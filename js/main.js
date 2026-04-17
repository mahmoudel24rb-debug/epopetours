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
  if (hamburger && overlay) {
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
  }

  /* Menu tabs */
  var menuTabs = document.getElementById('menu-tabs');
  if (menuTabs) {
    var items = menuTabs.querySelectorAll('.menu__item');
    var images = menuTabs.querySelectorAll('.menu__image');
    items.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var idx = item.getAttribute('data-menu');
        items.forEach(function (i) { i.classList.remove('is-active'); });
        images.forEach(function (img) { img.classList.remove('is-active'); });
        item.classList.add('is-active');
        var target = menuTabs.querySelector('.menu__image[data-menu="' + idx + '"]');
        if (target) target.classList.add('is-active');
      });
    });
  }

  /* Testimonials: pas de carousel, 2 cards côte à côte (Savoria) */
})();
