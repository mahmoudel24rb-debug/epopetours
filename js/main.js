/* ========================================
   L'Épopée — Main JS
   ======================================== */
(function () {
  'use strict';

  /* ----- Nav scroll ----- */
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Mobile menu ----- */
  var hamburger = document.querySelector('.nav__hamburger');
  var overlay = document.getElementById('nav-overlay');

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        hamburger.setAttribute('aria-expanded', 'true');
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });

    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }

  /* ----- Menu tabs (Savoria style) ----- */
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

  /* ----- Testimonial carousel ----- */
  var testiTrack = document.getElementById('testimonial-track');
  var testiPrev = document.getElementById('testi-prev');
  var testiNext = document.getElementById('testi-next');
  var testiDots = document.getElementById('testi-dots');

  if (testiTrack && testiPrev && testiNext && testiDots) {
    var slides = testiTrack.querySelectorAll('.testimonial-slide');
    var dots = testiDots.querySelectorAll('.testimonial-carousel__dot');
    var current = 0;
    var total = slides.length;

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      testiTrack.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === current);
      });
    }

    testiPrev.addEventListener('click', function () { goTo(current - 1); });
    testiNext.addEventListener('click', function () { goTo(current + 1); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    /* Keyboard navigation */
    testiTrack.closest('.testimonial-carousel').addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { goTo(current - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); e.preventDefault(); }
    });
  }
})();
