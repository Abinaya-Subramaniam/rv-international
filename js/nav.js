// nav.js — Navigation interactions

(function () {
  'use strict';

  const navbar    = document.getElementById('navbar');
  const toggle    = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  const backToTop = document.getElementById('backToTop');

  // ── Create overlay for mobile nav ──
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  // ── Mobile nav toggle ──
  function openNav() {
    navLinks.classList.add('open');
    overlay.classList.add('show');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeNav() : openNav();
  });

  overlay.addEventListener('click', closeNav);

  // Close nav when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // ── Escape key closes nav ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });

  // ── Scroll-based behaviors ──
  function onScroll() {
    const scrollY = window.scrollY;

    // Sticky nav bg
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active section highlight
    updateActiveSection();
  }

  // ── Active section in nav ──
  const sections = document.querySelectorAll('section[id], main[id]');
  const navItems = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveSection() {
    let currentSection = '';
    const offset = 120;

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= offset) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active-section');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active-section');
      }
    });
  }

  // ── Back to top ──
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Throttle scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  onScroll();
})();
