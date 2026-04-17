/* ========================================
   L'Épopée — Main JS
   Nav scroll + Mobile menu
   ======================================== */

(function () {
  'use strict';

  /* ----- Nav scroll effect ----- */
  var nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Mobile menu toggle ----- */
  var hamburger = document.querySelector('.nav__hamburger');
  var overlay = document.getElementById('nav-overlay');

  if (!hamburger || !overlay) return;

  function openMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* Fermer le menu au clic sur un lien */
  var overlayLinks = overlay.querySelectorAll('a');
  for (var i = 0; i < overlayLinks.length; i++) {
    overlayLinks[i].addEventListener('click', closeMenu);
  }

  /* Fermer avec Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* ========================================
     Testimonial Slider
     ======================================== */
  var track = document.getElementById('slider-track');
  var prevBtn = document.getElementById('slider-prev');
  var nextBtn = document.getElementById('slider-next');
  var dotsContainer = document.getElementById('slider-dots');

  if (track && prevBtn && nextBtn && dotsContainer) {
    var slides = track.querySelectorAll('.slider__slide');
    var dots = dotsContainer.querySelectorAll('.slider__dot');
    var current = 0;
    var total = slides.length;

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';

      for (var d = 0; d < dots.length; d++) {
        dots[d].classList.toggle('is-active', d === current);
      }
    }

    prevBtn.addEventListener('click', function () { goTo(current - 1); });
    nextBtn.addEventListener('click', function () { goTo(current + 1); });

    for (var d = 0; d < dots.length; d++) {
      (function (idx) {
        dots[idx].addEventListener('click', function () { goTo(idx); });
      })(d);
    }

    /* Navigation clavier */
    track.closest('.slider').addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { goTo(current - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); e.preventDefault(); }
    });
  }
})();
