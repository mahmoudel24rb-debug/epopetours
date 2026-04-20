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

  /* Testimonial carousel */
  var testiTrack = document.getElementById('testi-track');
  var testiPrev = document.getElementById('testi-prev');
  var testiNext = document.getElementById('testi-next');
  var testiDots = document.getElementById('testi-dots');
  if (testiTrack && testiPrev && testiNext && testiDots) {
    var slides = testiTrack.querySelectorAll('.testi-slide');
    var dots = testiDots.querySelectorAll('.testi-dot');
    var current = 0;
    var total = slides.length;
    var autoplayDelay = 8000; // 8s
    var autoplayTimer = null;

    function goTo(i) {
      current = ((i % total) + total) % total;
      testiTrack.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, idx) {
        d.classList.toggle('is-active', idx === current);
      });
    }
    function restartAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(function () { goTo(current + 1); }, autoplayDelay);
    }
    // Initial
    testiTrack.style.transition = 'transform 0.6s cubic-bezier(0.12, 0.23, 0.5, 1)';
    goTo(0);
    restartAutoplay();
    testiPrev.addEventListener('click', function () { goTo(current - 1); restartAutoplay(); });
    testiNext.addEventListener('click', function () { goTo(current + 1); restartAutoplay(); });
    dots.forEach(function (d, idx) {
      d.addEventListener('click', function () { goTo(idx); restartAutoplay(); });
    });
    // Pause on hover
    var carousel = document.getElementById('testi-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', function () { if (autoplayTimer) clearInterval(autoplayTimer); });
      carousel.addEventListener('mouseleave', restartAutoplay);
    }
  }

  /* Scroll animations — fade-in via IntersectionObserver */
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  }
})();
