/* ============================================================
   My Reverso Story — shared data layer
   Used by: my-reverso-story.html, reverso-collection.html, reverso-admin.html

   STORAGE MODEL
   - 'reverso:index'      (shared) → JSON array of lightweight records (no photos)
   - 'reverso:sub:<id>'   (shared) → JSON of the full record, including both photos

   Splitting the data this way means each submission's photos only count
   against THAT submission's 5MB storage limit, not the whole collection's.
   ============================================================ */
window.ReversoData = (function(){
  const INDEX_KEY = 'reverso:index';
  const SUB_PREFIX = 'reverso:sub:';
  const hasStorage = !!(window.storage && window.storage.get && window.storage.set);

  // ---------- EmailJS notification (optional — see setup notes in the chat reply) ----------
  const EMAILJS = {
    enabled: false,                 // set to true once the three fields below are filled in
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY',
    curatorEmail: 'you@example.com'
  };
  let emailjsReady = false;
  function loadEmailJS(){
    return new Promise((resolve, reject) => {
      if(emailjsReady && window.emailjs) return resolve();
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      s.onload = () => { try{ window.emailjs.init({ publicKey: EMAILJS.publicKey }); emailjsReady = true; resolve(); }catch(e){ reject(e); } };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  async function notifyCurator(entry){
    if(!EMAILJS.enabled) return;
    try{
      await loadEmailJS();
      await window.emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
        to_email: EMAILJS.curatorEmail,
        submitter_name: entry.name || '(no name)',
        submitter_email: entry.email || '(not provided)',
        watch_ref: [entry.ref, entry.year].filter(Boolean).join(' · ') || '—',
        story_excerpt: (entry.story || '').slice(0, 220),
        submitted_at: new Date(entry.submittedAt || Date.now()).toLocaleString()
      });
    }catch(e){ console.warn('Curator email notification failed:', e); }
  }

  // ---------- helpers ----------
  function escapeHtml(str){
    return String(str || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  function newId(){
    return 'sub-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
  }

  // downscale + compress an uploaded photo so it stays well under the per-key storage limit
  function compressImageFile(file, maxDim, quality){
    maxDim = maxDim || 640; quality = quality || 0.72;
    return new Promise((resolve, reject) => {
      if(!file) return resolve('');
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Could not read the file.'));
      reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => reject(new Error('Could not decode the image.'));
        img.onload = () => {
          let w = img.width, h = img.height;
          if(w > h){ if(w > maxDim){ h = Math.round(h * maxDim / w); w = maxDim; } }
          else{ if(h > maxDim){ w = Math.round(w * maxDim / h); h = maxDim; } }
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // ---------- seed data ----------
  // Real collector stories now live in reverso-stories.js as curated content.
  // This seed set is only a fallback for the live submission system when no
  // storage is available yet — intentionally empty rather than filled with
  // placeholder names.
  const SEED_FULL = {};
  function lightweightFrom(full){
    return {
      id: full.id, status: full.status, name: full.name, location: full.location,
      ref: full.ref, year: full.year, engrave: full.engrave, story: full.story,
      submittedAt: full.submittedAt
    };
  }
  const SEED_INDEX = Object.values(SEED_FULL).map(lightweightFrom);

  // ---------- core read/write ----------
  async function loadIndex(){
    if(!hasStorage) return SEED_INDEX.slice();
    try{
      const res = await window.storage.get(INDEX_KEY, true);
      if(res && res.value){
        const parsed = JSON.parse(res.value);
        if(Array.isArray(parsed)) return parsed;
      }
    }catch(e){ /* key doesn't exist yet — fall through to seed */ }
    try{
      await window.storage.set(INDEX_KEY, JSON.stringify(SEED_INDEX), true);
      for(const id in SEED_FULL){ await window.storage.set(SUB_PREFIX + id, JSON.stringify(SEED_FULL[id]), true); }
    }catch(e){}
    return SEED_INDEX.slice();
  }

  async function saveIndex(list){
    if(!hasStorage) return false;
    try{ const res = await window.storage.set(INDEX_KEY, JSON.stringify(list), true); return !!res; }
    catch(e){ return false; }
  }

  async function loadSubmission(id){
    if(!hasStorage) return SEED_FULL[id] || null;
    try{
      const res = await window.storage.get(SUB_PREFIX + id, true);
      if(res && res.value) return JSON.parse(res.value);
    }catch(e){}
    return SEED_FULL[id] || null;
  }

  async function saveSubmission(obj){
    if(!hasStorage) return false;
    try{ const res = await window.storage.set(SUB_PREFIX + obj.id, JSON.stringify(obj), true); return !!res; }
    catch(e){ return false; }
  }

  async function upsertIndexEntry(entry){
    const list = await loadIndex();
    const i = list.findIndex(x => x.id === entry.id);
    if(i >= 0) list[i] = entry; else list.push(entry);
    await saveIndex(list);
    return list;
  }

  async function loadMany(ids){
    const results = await Promise.all(ids.map(id => loadSubmission(id)));
    return results.filter(Boolean);
  }

  return {
    hasStorage, escapeHtml, newId, compressImageFile,
    loadIndex, saveIndex, loadSubmission, saveSubmission, upsertIndexEntry, loadMany,
    lightweightFrom, notifyCurator
  };
})();
