/* ============================================================
   My Reverso Story — mobile navigation
   Shared across every page. Below 920px the desktop nav links
   disappear (reverso-styles.css), so this turns the hamburger
   button each page's <nav> now carries into a working toggle
   for a slide-in panel — the site's only way to reach History,
   Models, Calibres, Archive or Limited on a phone.

   Defensive by design: if a page is missing the button or the
   link list, this quietly does nothing rather than throwing,
   so a stray page never loses its script tag's safety net.
   ============================================================ */
(function () {
  'use strict';

  function init() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.navlinks');
    if (!toggle || !links) return;

    var scrim = document.createElement('div');
    scrim.className = 'nav-scrim';
    document.body.appendChild(scrim);

    function isOpen() { return links.classList.contains('open'); }

    function open() {
      links.classList.add('open');
      scrim.classList.add('on');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-locked');
    }

    function close() {
      links.classList.remove('open');
      scrim.classList.remove('on');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-locked');
    }

    toggle.addEventListener('click', function () {
      isOpen() ? close() : open();
    });

    scrim.addEventListener('click', close);

    // Tapping an actual destination should close the panel, not just
    // navigate underneath it — otherwise the next page loads with the
    // drawer still open.
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) close();
    });

    // Rotating a tablet or widening a browser window past the breakpoint
    // must not strand the overlay open on what is now a desktop layout.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920 && isOpen()) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
