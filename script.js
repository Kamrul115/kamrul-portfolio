// script.js — page behavior: AOS init, mobile menu toggle, and small helpers

document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS if it's loaded
  if (window.AOS && typeof AOS.init === 'function') {
    AOS.init({ once: true, duration: 700 });
    // refresh in case elements were added dynamically
    AOS.refresh();
  }

  // Mobile menu toggle (simple inline-style toggle so no CSS changes required)
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      const current = getComputedStyle(navLinks).display;
      navLinks.style.display = (current === 'none' || current === '') ? 'flex' : 'none';
    });

    // Ensure nav is visible on resize for desktop and hidden on small screens
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navLinks.style.display = '';
      } else {
        navLinks.style.display = 'none';
      }
    });

    // Initial responsive state
    if (window.innerWidth <= 768) navLinks.style.display = 'none';
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });

  console.log('script.js loaded — AOS and menu toggle ready.');
});