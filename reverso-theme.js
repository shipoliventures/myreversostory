/* ============================================================
   My Reverso Story — theme toggle (light / dark)

   The choice itself is applied by a small inline snippet in each
   page's <head>, BEFORE this file loads, so there is no flash of
   the wrong theme on first paint. This file only wires up the
   button: clicking it flips the stored preference and re-applies
   it immediately.

   Pages that carry the inline snippet but no visible button (the
   private admin and image-check tools) still pick up whatever was
   chosen elsewhere on the site — they just don't offer their own
   switch. This file no-ops harmlessly on those pages.
   ============================================================ */
(function () {
  'use strict';

  var KEY = 'reverso:theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function init() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    btn.setAttribute('aria-label', current() === 'light' ? 'Switch to dark theme' : 'Switch to light theme');

    btn.addEventListener('click', function () {
      var next = current() === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* private browsing — theme still applies this visit */ }
      btn.setAttribute('aria-label', next === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    });

    // If the person changes their OS-level appearance while this tab is open,
    // and they've never explicitly chosen a theme here themselves, follow it.
    var stored;
    try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }
    if (!stored && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
        apply(e.matches ? 'light' : 'dark');
        btn.setAttribute('aria-label', e.matches ? 'Switch to dark theme' : 'Switch to light theme');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
