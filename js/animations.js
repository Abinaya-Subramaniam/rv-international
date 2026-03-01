
(function () {
  'use strict';

  // Skip hero reveals (handled by CSS keyframes on page load)
  const hero = document.querySelector('.hero');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve once revealed for performance
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  // Observe all reveal elements OUTSIDE the hero
  document.querySelectorAll('.reveal').forEach(el => {
    if (!hero || !hero.contains(el)) {
      observer.observe(el);
    }
  });

  // ── Stagger children inside grids ──
  function staggerGridChildren() {
    const grids = document.querySelectorAll(
      '.about-cards, .courses-grid, .reviews-grid'
    );

    grids.forEach(grid => {
      const children = grid.querySelectorAll('.reveal');
      children.forEach((child, i) => {
        if (!child.style.transitionDelay) {
          child.style.transitionDelay = (i * 0.1) + 's';
        }
      });
    });
  }

  staggerGridChildren();
})();
