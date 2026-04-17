(function () {
  'use strict';

  /* Nav scroll */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  }, { passive: true });

  /* Mobile menu */
  var hamburger = document.querySelector('.nav__hamburger');
  var overlay = document.getElementById('nav-overlay');
  if (!hamburger || !overlay) return;

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    var open = hamburger.getAttribute('aria-expanded') === 'true';
    if (open) { closeMenu(); } else {
      hamburger.setAttribute('aria-expanded', 'true');
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  });

  overlay.querySelectorAll('a').forEach(function (l) { l.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) { closeMenu(); hamburger.focus(); }
  });
})();
