/* ============================================================
   My Reverso Story — entry-level sharing
   Phase 1 scope: collector stories + Pièce Unique archive entries.

   WHAT THIS DOES
   - Composites an entry's front/back photos and its text into a single
     branded card on a <canvas> (1080x1350 post, or 1080x1920 story).
   - Hands that card, as a real image FILE, to the OS share sheet via the
     Web Share API — so WhatsApp / Viber / Messages / Instagram receive the
     photo and the writing together, not a bare link.
   - Falls back to a panel of per-platform links + download + copy caption
     wherever the share sheet can't take files (most desktop browsers).

   WHAT IT DELIBERATELY DOES NOT DO
   - It never rewrites or paraphrases an entry. Captions are the entry's own
     text, trimmed at a sentence boundary when a platform limit demands it.
     Nothing is generated, summarised or invented at share time.

   USAGE
     ReversoShare.register(key, entry)   // entry shape documented below
     ReversoShare.buttonHTML(key)        // returns markup for a share button
     ReversoShare.init()                 // once per page, after markup exists

   ENTRY SHAPE
     { key, kind, title, eyebrow, meta:[], body, front, back, url, credit }
   ============================================================ */
window.ReversoShare = (function () {
  'use strict';

  var ENTRIES = {};
  var booted = false;

  /* ---------- brand tokens (mirrored from reverso-styles.css) ---------- */
  var T = {
    void: '#0b0e12',
    panel: '#151b22',
    panel2: '#1c232c',
    ink: '#ece5d8',
    inkDim: '#a79f8f',
    brass: '#c9a35e',
    brassBright: '#eecb8d',
    line: 'rgba(201,163,94,0.28)',
    lineSoft: 'rgba(201,163,94,0.14)'
  };

  var FORMATS = {
    post: { w: 1080, h: 1350, label: 'Post' },
    story: { w: 1080, h: 1920, label: 'Story' }
  };

  /* Platform caption budgets. The link is appended separately; X counts every
     link as 23 characters regardless of real length, so its budget is tight. */
  var LIMITS = {
    x: 250,
    instagram: 2100,
    linkedin: 2900,
    facebook: 2900,
    whatsapp: 4000,
    telegram: 4000,
    viber: 2000,
    sms: 900,
    email: 6000,
    card: 560,
    generic: 2000
  };

  /* ---------- small helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  /* Strip inline markup and normalise entities so text is safe for canvas
     and for plain-text captions. */
  function plain(html) {
    var s = String(html == null ? '' : html);
    s = s.replace(/<br\s*\/?>/gi, ' ');
    s = s.replace(/<\/p>/gi, '\n\n');
    s = s.replace(/<[^>]*>/g, '');
    s = s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
         .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
         .replace(/&mdash;/g, '\u2014').replace(/&ndash;/g, '\u2013');
    return s.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  }

  /* Trim to a limit WITHOUT rewriting: prefer the last sentence end, then the
     last word break. Returns the original untouched when it already fits. */
  function trim(text, max) {
    var s = plain(text);
    if (s.length <= max) return s;
    var cut = s.slice(0, max);
    var sentence = Math.max(
      cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '),
      cut.lastIndexOf('.\n'), cut.lastIndexOf('\u2014 ')
    );
    if (sentence > max * 0.55) return cut.slice(0, sentence + 1).trim();
    var word = cut.lastIndexOf(' ');
    return (word > 0 ? cut.slice(0, word) : cut).trim() + '\u2026';
  }

  function absolute(url) {
    if (!url) return location.href.split('#')[0];
    try { return new URL(url, location.href).href; } catch (e) { return url; }
  }

  /* ---------- caption assembly ---------- */
  function captionFor(entry, platform) {
    var limit = LIMITS[platform] || LIMITS.generic;
    var head = entry.title;
    var meta = (entry.meta || []).filter(Boolean).join(' \u00b7 ');
    var link = absolute(entry.url);

    // Reserve room for the heading block and the trailing link.
    var overhead = head.length + (meta ? meta.length + 1 : 0) + link.length + 8;
    var body = trim(entry.body, Math.max(60, limit - overhead));

    var out = head;
    if (meta) out += '\n' + meta;
    if (body) out += '\n\n' + body;
    out += '\n\n' + link;
    return out;
  }

  /* ---------- canvas plumbing ---------- */
  /* Same-origin images must NOT be requested with crossOrigin set. The page has
     already loaded these exact URLs without CORS for the flip-cards, so a
     CORS-mode request hits that cached, header-less response and is rejected —
     the photo loads on the page but fails here. Same-origin never taints the
     canvas, so there is nothing to gain from asking for CORS in that case.
     Cross-origin sources still need it, and get one cache-busted retry. */
  function sameOrigin(src) {
    try { return new URL(src, location.href).origin === location.origin; }
    catch (e) { return true; }
  }

  function loadImage(src) {
    return new Promise(function (resolve) {
      if (!src) return resolve(null);
      var cross = !sameOrigin(src);

      function attempt(url, useCors, onFail) {
        var img = new Image();
        if (useCors) img.crossOrigin = 'anonymous';
        img.onload = function () { resolve(img); };
        img.onerror = function () { onFail(); };
        img.src = url;
      }

      attempt(src, cross, function () {
        // Retry once, flipping the CORS decision and dodging the cached entry.
        var bust = src + (src.indexOf('?') >= 0 ? '&' : '?') + 'rscb=1';
        attempt(bust, !cross, function () { resolve(null); });
      });
    });
  }

  /* object-fit: cover, drawn into a rect */
  function drawCover(ctx, img, x, y, w, h) {
    var r = Math.max(w / img.width, h / img.height);
    var dw = img.width * r, dh = img.height * r;
    ctx.save();
    ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
    ctx.restore();
  }

  function emptyPlate(ctx, x, y, w, h) {
    ctx.fillStyle = T.panel;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = T.lineSoft;
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);
    ctx.fillStyle = 'rgba(167,159,143,0.55)';
    ctx.font = '500 22px Jost, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Photo wanted', x + w / 2, y + h / 2);
    ctx.textAlign = 'left';
  }

  /* Word-wrap into lines, capped. Returns {lines, truncated} */
  /* Greedy wrap. Only reports truncation when content was actually dropped —
     text that exactly fills maxLines must not pick up a false ellipsis. */
  function wrapInfo(ctx, text, maxW, maxLines) {
    var paras = String(text || '').split('\n');
    var lines = [];
    var dropped = false;

    outer:
    for (var p = 0; p < paras.length; p++) {
      var words = paras[p].split(/\s+/).filter(Boolean);
      var line = '';
      for (var i = 0; i < words.length; i++) {
        var test = line ? line + ' ' + words[i] : words[i];
        if (ctx.measureText(test).width > maxW && line) {
          if (lines.length >= maxLines) { dropped = true; break outer; }
          lines.push(line);
          line = words[i];
        } else {
          line = test;
        }
      }
      if (line) {
        if (lines.length >= maxLines) { dropped = true; break outer; }
        lines.push(line);
      }
    }

    if (dropped && lines.length) {
      var idx = lines.length - 1;
      var last = lines[idx];
      while (last.length && ctx.measureText(last + '\u2026').width > maxW) {
        last = last.slice(0, -1);
      }
      lines[idx] = last.replace(/[\s,;:.\u2014-]+$/, '') + '\u2026';
    }
    return { lines: lines.slice(0, maxLines), truncated: dropped };
  }

  function wrap(ctx, text, maxW, maxLines) {
    return wrapInfo(ctx, text, maxW, maxLines).lines;
  }

  function tracked(ctx, text, x, y, spacing) {
    var cx = x;
    for (var i = 0; i < text.length; i++) {
      ctx.fillText(text[i], cx, y);
      cx += ctx.measureText(text[i]).width + spacing;
    }
    return cx - x - spacing;
  }

  function trackedWidth(ctx, text, spacing) {
    var w = 0;
    for (var i = 0; i < text.length; i++) w += ctx.measureText(text[i]).width + spacing;
    return w - spacing;
  }

  /* Tracked-out text can't wrap, so fit it: step the size down, then clip with
     an ellipsis. Returns the size actually used. */
  function fitTracked(ctx, text, x, y, maxW, spacing, sizes, weight, family) {
    var size = sizes[0], out = text;
    for (var i = 0; i < sizes.length; i++) {
      size = sizes[i];
      ctx.font = weight + ' ' + size + 'px ' + family;
      if (trackedWidth(ctx, text, spacing) <= maxW) { out = text; break; }
      if (i === sizes.length - 1) {
        out = text;
        while (out.length > 1 && trackedWidth(ctx, out + '\u2026', spacing) > maxW) {
          out = out.slice(0, -1);
        }
        out = out.replace(/[\s\u00b7,;:-]+$/, '') + '\u2026';
      }
    }
    tracked(ctx, out, x, y, spacing);
    return size;
  }

  /* Make sure the webfonts are rasterisable before we draw with them. */
  function fontsReady() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var want = [
      '600 54px "Cormorant Garamond"', '400 30px "Cormorant Garamond"',
      '500 22px Jost', '600 22px Jost', '500 26px Cinzel', '600 26px Cinzel'
    ];
    return Promise.all(want.map(function (f) {
      return document.fonts.load(f).catch(function () {});
    })).then(function () { return document.fonts.ready; }).catch(function () {});
  }

  /* ---------- the card ---------- */
  async function buildCanvas(entry, formatKey) {
    var F = FORMATS[formatKey] || FORMATS.post;
    var W = F.w, H = F.h;

    await fontsReady();
    var pair = await Promise.all([loadImage(entry.front), loadImage(entry.back)]);
    var front = pair[0], back = pair[1];

    var cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d');

    /* ground */
    ctx.fillStyle = T.void;
    ctx.fillRect(0, 0, W, H);

    var M = 64;                          // outer margin
    var isStory = formatKey === 'story';
    var top = isStory ? 210 : 74;        // story format leaves room for UI chrome

    /* hairline frame — the case-back rule, not decoration for its own sake */
    ctx.strokeStyle = T.line;
    ctx.lineWidth = 2;
    ctx.strokeRect(M - 22, top - 34, W - (M - 22) * 2, H - (top - 34) - (isStory ? 150 : 60));

    /* --- the two faces, side by side: the whole point of a Reverso --- */
    var gap = 26;
    var plateW = (W - M * 2 - gap) / 2;
    /* 4:5 on the post card — the same crop the flip-cards use on the site.
       The taller story canvas can afford a more generous plate. */
    var plateH = Math.round(plateW * (isStory ? 1.62 : 1.12));
    var py = top + 26;

    if (front) drawCover(ctx, front, M, py, plateW, plateH); else emptyPlate(ctx, M, py, plateW, plateH);
    if (back) drawCover(ctx, back, M + plateW + gap, py, plateW, plateH); else emptyPlate(ctx, M + plateW + gap, py, plateW, plateH);

    ctx.strokeStyle = T.lineSoft;
    ctx.lineWidth = 2;
    ctx.strokeRect(M + 1, py + 1, plateW - 2, plateH - 2);
    ctx.strokeRect(M + plateW + gap + 1, py + 1, plateW - 2, plateH - 2);

    /* From here down everything stacks from the top of the glyph box, so a
       block's height is exactly the advance we add. Mixing baselines is what
       makes canvas layouts drift. */
    ctx.textBaseline = 'top';

    /* face labels, sitting in the gutter beneath the two plates */
    ctx.fillStyle = 'rgba(201,163,94,0.85)';
    ctx.font = '500 17px Jost, sans-serif';
    var fw = trackedWidth(ctx, 'FRONT', 2.6);
    tracked(ctx, 'FRONT', M + plateW / 2 - fw / 2, py + plateH + 20, 2.6);
    var bw = trackedWidth(ctx, 'BACK', 2.6);
    tracked(ctx, 'BACK', M + plateW + gap + plateW / 2 - bw / 2, py + plateH + 20, 2.6);

    /* ---- measure the whole text block before drawing any of it, so it can be
            placed as one unit instead of drifting down a tall canvas ---- */
    var textTop = py + plateH + 74;
    var footerY = H - (isStory ? 215 : 118);
    var avail = footerY - 46 - textTop;
    var colW = W - M * 2;

    var EYE_H = entry.eyebrow ? 38 : 0;

    /* title: step down until it sets in two lines without being cut */
    var titleSize = 60, tLines = null;
    var steps = [60, 54, 48, 42, 37];
    for (var si = 0; si < steps.length; si++) {
      titleSize = steps[si];
      ctx.font = '600 ' + titleSize + 'px "Cormorant Garamond", serif';
      var got = wrapInfo(ctx, entry.title, colW, 2);
      tLines = got.lines;
      if (!got.truncated) break;
    }
    var TITLE_H = tLines.length * (titleSize * 1.14) + 12;

    /* meta */
    var meta = (entry.meta || []).filter(Boolean).join('   \u00b7   ');
    var mLines = [];
    if (meta) {
      ctx.font = '400 23px Jost, sans-serif';
      mLines = wrap(ctx, meta, colW, 2);
    }
    var META_H = mLines.length ? mLines.length * 32 + 8 : 0;

    var RULE_H = 44;   // 10 above the rule, 34 below

    /* body fills whatever is left */
    var bodySize = 29;
    var lineH = Math.round(bodySize * 1.48);
    ctx.font = '400 ' + bodySize + 'px "Cormorant Garamond", serif';
    var room = Math.max(1, Math.floor((avail - EYE_H - TITLE_H - META_H - RULE_H) / lineH));
    var bLines = wrap(ctx, trim(entry.body, LIMITS.card), colW, room);
    var BODY_H = bLines.length * lineH;

    var blockH = EYE_H + TITLE_H + META_H + RULE_H + BODY_H;
    /* Sit the block just under the plates; on the tall story canvas, share the
       leftover space so it doesn't strand a void above the footer. */
    var y = textTop + (isStory ? Math.max(0, (avail - blockH) * 0.42) : 0);

    /* ---- now draw it ---- */
    if (entry.eyebrow) {
      ctx.fillStyle = T.brass;
      fitTracked(ctx, String(entry.eyebrow).toUpperCase(), M, y, colW, 3.2,
                 [21, 19, 17, 15.5], '500', 'Jost, sans-serif');
      y += EYE_H;
    }

    ctx.fillStyle = T.ink;
    ctx.font = '600 ' + titleSize + 'px "Cormorant Garamond", serif';
    tLines.forEach(function (l) { ctx.fillText(l, M, y); y += titleSize * 1.14; });
    y += 12;

    if (mLines.length) {
      ctx.fillStyle = T.inkDim;
      ctx.font = '400 23px Jost, sans-serif';
      mLines.forEach(function (l) { ctx.fillText(l, M, y); y += 32; });
      y += 8;
    }

    y += 10;
    ctx.strokeStyle = T.line;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(M, y); ctx.lineTo(W - M, y); ctx.stroke();
    y += 34;

    ctx.fillStyle = T.inkDim;
    ctx.font = '400 ' + bodySize + 'px "Cormorant Garamond", serif';
    bLines.forEach(function (l) { ctx.fillText(l, M, y); y += lineH; });

    ctx.textBaseline = 'alphabetic';

    /* --- footer: attribution + the disclaimer that has to travel with the image --- */
    ctx.strokeStyle = T.lineSoft;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(M, footerY - 34); ctx.lineTo(W - M, footerY - 34); ctx.stroke();

    ctx.fillStyle = T.ink;
    ctx.font = '600 25px Cinzel, serif';
    var brandW = tracked(ctx, 'MY REVERSO STORY', M, footerY, 3.4);

    if (entry.credit) {
      ctx.fillStyle = 'rgba(167,159,143,0.75)';
      ctx.font = '400 19px Jost, sans-serif';
      var creditRoom = colW - brandW - 30;
      var credit = String(entry.credit);
      while (credit.length > 1 && ctx.measureText(credit).width > creditRoom) {
        credit = credit.slice(0, -1);
      }
      if (credit.length < String(entry.credit).length) credit = credit.slice(0, -1) + '\u2026';
      if (creditRoom > 60) {
        ctx.textAlign = 'right';
        ctx.fillText(credit, W - M, footerY);
        ctx.textAlign = 'left';
      }
    }

    ctx.fillStyle = 'rgba(167,159,143,0.6)';
    ctx.font = '400 18px Jost, sans-serif';
    ctx.fillText('Independent collector archive \u2014 not affiliated with Jaeger-LeCoultre', M, footerY + 34);

    return cv;
  }

  function canvasToBlob(cv) {
    return new Promise(function (resolve, reject) {
      try {
        cv.toBlob(function (b) { b ? resolve(b) : reject(new Error('Card could not be encoded.')); }, 'image/jpeg', 0.92);
      } catch (e) {
        // Tainted canvas — happens on file:// or if a photo is served cross-origin.
        reject(new Error('The photos could not be read into the card. Open the site over http(s) rather than from a local file.'));
      }
    });
  }

  async function buildFile(entry, formatKey) {
    var cv = await buildCanvas(entry, formatKey);
    var blob = await canvasToBlob(cv);
    var name = (entry.key || 'reverso') + '-' + formatKey + '.jpg';
    var file = new File([blob], name, { type: 'image/jpeg' });
    return { file: file, blob: blob, canvas: cv, name: name };
  }

  /* ---------- share targets ---------- */
  function openShare(url) {
    var w = window.open(url, '_blank', 'noopener,noreferrer,width=680,height=640');
    if (w) w.opener = null;
  }

  var TARGETS = [
    { id: 'whatsapp', label: 'WhatsApp', href: function (e) {
        return 'https://wa.me/?text=' + encodeURIComponent(captionFor(e, 'whatsapp')); } },
    { id: 'telegram', label: 'Telegram', href: function (e) {
        return 'https://t.me/share/url?url=' + encodeURIComponent(absolute(e.url)) +
               '&text=' + encodeURIComponent(captionFor(e, 'telegram')); } },
    { id: 'viber', label: 'Viber', href: function (e) {
        return 'viber://forward?text=' + encodeURIComponent(captionFor(e, 'viber')); } },
    { id: 'sms', label: 'Messages', href: function (e) {
        return 'sms:?&body=' + encodeURIComponent(captionFor(e, 'sms')); } },
    { id: 'x', label: 'X', href: function (e) {
        return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(captionFor(e, 'x')); } },
    { id: 'facebook', label: 'Facebook', href: function (e) {
        return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(absolute(e.url)); } },
    { id: 'linkedin', label: 'LinkedIn', href: function (e) {
        return 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(absolute(e.url)); } },
    { id: 'email', label: 'Email', href: function (e) {
        return 'mailto:?subject=' + encodeURIComponent(e.title) +
               '&body=' + encodeURIComponent(captionFor(e, 'email')); } }
  ];

  function canShareFiles(files) {
    return !!(navigator.canShare && navigator.share && navigator.canShare({ files: files }));
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;top:-2000px;left:0;opacity:0;';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
      } catch (e2) { return false; }
    }
  }

  function download(blob, name) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  /* ---------- toast ---------- */
  var toastEl = null, toastTimer = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'rs-toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('on'); }, 3200);
  }

  /* ---------- panel ---------- */
  var panel = null, panelState = { entry: null, format: 'post', built: null };

  function buildPanel() {
    if (panel) return panel;
    panel = document.createElement('div');
    panel.className = 'rs-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Share this entry');
    panel.innerHTML =
      '<div class="rs-scrim" data-rs-close></div>' +
      '<div class="rs-sheet">' +
        '<button class="rs-x" data-rs-close aria-label="Close">\u00d7</button>' +
        '<p class="rs-kicker">Share</p>' +
        '<h3 class="rs-title" id="rsTitle"></h3>' +
        '<div class="rs-formats" role="group" aria-label="Card shape">' +
          '<button class="rs-fmt on" data-rs-format="post">Post \u00b7 4:5</button>' +
          '<button class="rs-fmt" data-rs-format="story">Story \u00b7 9:16</button>' +
        '</div>' +
        '<div class="rs-preview" id="rsPreview"><span class="rs-building">Drawing the card\u2026</span></div>' +
        '<div class="rs-primary">' +
          '<button class="btn solid" data-rs-act="native">Share card</button>' +
          '<button class="btn" data-rs-act="save">Save card</button>' +
          '<button class="btn" data-rs-act="caption">Copy caption</button>' +
        '</div>' +
        '<p class="rs-note" id="rsNote"></p>' +
        '<div class="rs-ig">' +
          '<b>Instagram</b>' +
          '<span>Instagram can\u2019t be posted to from a website. Save the card, then paste the caption \u2014 both steps are one tap each above.</span>' +
          '<button class="rs-iglink" data-rs-act="instagram">Save card and copy caption</button>' +
        '</div>' +
        '<p class="rs-kicker rs-kicker-sub">Or send as a link</p>' +
        '<div class="rs-targets" id="rsTargets"></div>' +
        '<button class="rs-copylink" data-rs-act="link">Copy link to this entry</button>' +
      '</div>';
    document.body.appendChild(panel);

    panel.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-rs-close]')) { closePanel(); return; }
      var fmt = ev.target.closest('[data-rs-format]');
      if (fmt) {
        panelState.format = fmt.getAttribute('data-rs-format');
        panel.querySelectorAll('.rs-fmt').forEach(function (b) {
          b.classList.toggle('on', b === fmt);
        });
        renderPreview();
        return;
      }
      var act = ev.target.closest('[data-rs-act]');
      if (act) doAction(act.getAttribute('data-rs-act'));
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && panel.classList.contains('on')) closePanel();
    });

    return panel;
  }

  function renderTargets(entry) {
    document.getElementById('rsTargets').innerHTML = TARGETS.map(function (t) {
      return '<button class="rs-target" data-rs-act="t:' + t.id + '">' + esc(t.label) + '</button>';
    }).join('');
  }

  async function renderPreview() {
    var box = document.getElementById('rsPreview');
    var note = document.getElementById('rsNote');
    box.innerHTML = '<span class="rs-building">Drawing the card\u2026</span>';
    note.textContent = '';
    panelState.built = null;
    try {
      var built = await buildFile(panelState.entry, panelState.format);
      panelState.built = built;
      var img = document.createElement('img');
      img.alt = 'Share card preview for ' + panelState.entry.title;
      img.src = URL.createObjectURL(built.blob);
      box.innerHTML = '';
      box.appendChild(img);
    } catch (e) {
      box.innerHTML = '<span class="rs-building rs-err">' + esc(e.message) + '</span>';
      note.textContent = 'You can still share this entry as a link using the buttons below.';
    }
  }

  async function doAction(act) {
    var entry = panelState.entry;
    if (!entry) return;

    if (act.indexOf('t:') === 0) {
      var t = TARGETS.filter(function (x) { return x.id === act.slice(2); })[0];
      if (t) openShare(t.href(entry));
      return;
    }

    if (act === 'link') {
      var ok = await copyText(absolute(entry.url));
      toast(ok ? 'Link copied.' : 'Copy failed \u2014 select the address bar instead.');
      return;
    }

    if (act === 'caption') {
      var ok2 = await copyText(captionFor(entry, 'instagram'));
      toast(ok2 ? 'Caption copied.' : 'Copy failed \u2014 try again.');
      return;
    }

    if (act === 'save' || act === 'instagram') {
      if (!panelState.built) { toast('The card is still drawing.'); return; }
      download(panelState.built.blob, panelState.built.name);
      if (act === 'instagram') {
        var ok3 = await copyText(captionFor(entry, 'instagram'));
        toast(ok3 ? 'Card saved and caption copied. Open Instagram and paste.' : 'Card saved. Copy the caption next.');
      } else {
        toast('Card saved.');
      }
      return;
    }

    if (act === 'native') {
      if (!panelState.built) { toast('The card is still drawing.'); return; }
      var files = [panelState.built.file];
      if (canShareFiles(files)) {
        try {
          await navigator.share({
            files: files,
            title: entry.title,
            text: captionFor(entry, 'generic')
          });
        } catch (e) {
          if (e && e.name !== 'AbortError') toast('Sharing was cancelled.');
        }
      } else {
        download(panelState.built.blob, panelState.built.name);
        await copyText(captionFor(entry, 'instagram'));
        toast('This browser can\u2019t open the share sheet. Card saved and caption copied instead.');
      }
      return;
    }
  }

  function openPanel(key) {
    var entry = ENTRIES[key];
    if (!entry) return;
    buildPanel();
    panelState.entry = entry;
    panelState.format = 'post';
    panel.querySelectorAll('.rs-fmt').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-rs-format') === 'post');
    });
    document.getElementById('rsTitle').textContent = entry.title;
    /* On a desktop the OS sheet only lists installed apps, so say what it's
       actually good for rather than letting someone find out by trying it. */
    var shareBtn = panel.querySelector('[data-rs-act="native"]');
    if (shareBtn) shareBtn.textContent = isTouchDevice() ? 'Share card' : 'Send to phone\u2026';
    renderTargets(entry);
    panel.classList.add('on');
    document.body.classList.add('rs-locked');
    renderPreview();
  }

  function closePanel() {
    if (!panel) return;
    panel.classList.remove('on');
    document.body.classList.remove('rs-locked');
    panelState.entry = null;
    panelState.built = null;
  }

  /* The Web Share API exists on desktop Safari and Chrome too, so its presence
     says nothing about whether the OS sheet is worth using. On a Mac that sheet
     lists only installed apps — AirDrop, Mail, Notes — and none of the places
     people actually post. Reserve it for touch devices, where it's the whole
     point, and give everyone else the panel. */
  function isTouchDevice() {
    try {
      var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      var touch = (navigator.maxTouchPoints || 0) > 0 || 'ontouchstart' in window;
      return !!(coarse && touch);
    } catch (e) { return false; }
  }

  /* ---------- fast path: on touch devices, skip the panel entirely ---------- */
  async function quickShare(key, btn) {
    var entry = ENTRIES[key];
    if (!entry) return;

    if (!isTouchDevice() || !(navigator.canShare && navigator.share)) return openPanel(key);

    var prev = btn ? btn.getAttribute('data-label') || btn.textContent : '';
    if (btn) { btn.classList.add('busy'); btn.disabled = true; }
    try {
      var built = await buildFile(entry, 'post');
      if (canShareFiles([built.file])) {
        await navigator.share({
          files: [built.file],
          title: entry.title,
          text: captionFor(entry, 'generic')
        });
      } else {
        openPanel(key);
      }
    } catch (e) {
      if (e && e.name === 'AbortError') { /* user backed out — say nothing */ }
      else openPanel(key);
    } finally {
      if (btn) { btn.classList.remove('busy'); btn.disabled = false; btn.textContent = prev || 'Share'; }
    }
  }

  /* ---------- public API ---------- */
  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/>' +
    '<path d="M8.3 10.8L15.7 6.4M8.3 13.2l7.4 4.4"/></svg>';

  function register(key, entry) {
    entry.key = key;
    ENTRIES[key] = entry;
    return key;
  }

  function buttonHTML(key, opts) {
    opts = opts || {};
    var label = opts.label || 'Share';
    var cls = 'rs-btn' + (opts.compact ? ' compact' : '');
    return '<button type="button" class="' + cls + '" data-rs-share="' + esc(key) + '" ' +
      'aria-label="Share ' + esc((ENTRIES[key] && ENTRIES[key].title) || 'this entry') + '">' +
      ICON + '<span>' + esc(label) + '</span></button>';
  }

  function init() {
    if (booted) return;
    booted = true;
    document.addEventListener('click', function (ev) {
      var btn = ev.target.closest('[data-rs-share]');
      if (!btn) return;
      ev.preventDefault();
      ev.stopPropagation();          // don't trigger the flip-card underneath
      quickShare(btn.getAttribute('data-rs-share'), btn);
    });
  }

  /* Console diagnostic. Run ReversoShare.diagnose() on any page with share
     buttons to see which photo URLs actually resolve and whether the card can
     be encoded. Reports the real URL it tried, so a path or extension mismatch
     is obvious. */
  function diagnose(key) {
    var keys = key ? [key] : Object.keys(ENTRIES);
    if (!keys.length) { console.log('[share] no entries registered on this page'); return; }
    keys = keys.slice(0, 5);
    console.log('[share] origin', location.origin, '\u00b7 checking', keys.length, 'entr' + (keys.length === 1 ? 'y' : 'ies'));

    keys.forEach(function (k) {
      var e = ENTRIES[k];
      ['front', 'back'].forEach(function (side) {
        var src = e[side];
        if (!src) { console.log('  ' + k + ' ' + side + ': (none set)'); return; }
        var full = absolute(src);
        loadImage(src).then(function (img) {
          console.log('  ' + (img ? 'OK  ' : 'FAIL') + ' ' + k + ' ' + side +
            ' \u2192 ' + full + (img ? '  (' + img.width + '\u00d7' + img.height + ')' : ''));
        });
      });
    });

    var first = ENTRIES[keys[0]];
    buildFile(first, 'post').then(function (b) {
      console.log('[share] card encoded OK \u2014 ' + Math.round(b.blob.size / 1024) + ' KB');
    }).catch(function (err) {
      console.warn('[share] card could not be encoded:', err.message);
    });

    console.log('[share] share sheet with files:',
      (navigator.canShare && navigator.share) ? 'available' : 'NOT available on this browser');
  }

  return {
    register: register,
    buttonHTML: buttonHTML,
    init: init,
    open: openPanel,
    captionFor: captionFor,
    buildFile: buildFile,
    buildCanvas: buildCanvas,
    diagnose: diagnose,
    _entries: ENTRIES
  };
})();
