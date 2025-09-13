/* temples.js
   - toggles the mobile hamburger nav
   - writes dynamic copyright year and last modified date
   - provides accessible state changes
*/

(function () {
  'use strict';

  // DOM elements
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  // Add a 'no-js' class removal & progressive enhancement fallback:
  // if JS runs, ensure body doesn't have 'no-js'
  document.documentElement.classList.remove('no-js');

  // Toggle function
  function toggleNav() {
    const isOpen = nav.classList.contains('open');
    if (isOpen) {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerText = '☰'; // menu icon
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    } else {
      nav.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.innerText = '✕'; // X close symbol
      hamburger.setAttribute('aria-label', 'Close navigation menu');
    }
  }

  // Attach event listener for hamburger if it exists
  if (hamburger && nav) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNav();
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.innerText = '☰';
          hamburger.setAttribute('aria-label', 'Open navigation menu');
        }
      }
    });

    // allow ESC to close nav
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerText = '☰';
      }
    });
  }

  // Footer dynamic content
  const yearEl = document.getElementById('copyright-year');
  const lastModifiedEl = document.getElementById('last-modified');

  // current year
  if (yearEl) {
    const now = new Date();
    yearEl.textContent = String(now.getFullYear());
  }

  // last modified from document (falls back to current date if not available)
  if (lastModifiedEl) {
    let lm = document.lastModified;
    if (!lm) {
      lm = new Date().toLocaleString();
    }
    lastModifiedEl.textContent = lm;
  }

})();
