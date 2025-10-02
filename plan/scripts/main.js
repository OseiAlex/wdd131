// js/main.js
// Small interactive behaviors for the site plan:
// 1) display the current date in a friendly format
// 2) toggle a 'highlight' class on wireframe SVGs to visually emphasize them

(function () {
  'use strict';

  // Display the current date (UTC) in the header
  var dateEl = document.getElementById('date-display');
  if (dateEl) {
    var now = new Date();
    // show date in a stable, human-readable format
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = 'Document date: ' + now.toLocaleDateString(undefined, options);
  }

  // Toggle class to highlight wireframes' shapes (minimal DOM interaction)
  var btn = document.getElementById('toggle-wireframes');
  btn && btn.addEventListener('click', function () {
    var svgs = document.querySelectorAll('.wireframe');
    svgs.forEach(function(svg) {
      // toggling a class on the svg
      if (svg.classList.contains('highlight')) {
        svg.classList.remove('highlight');
      } else {
        svg.classList.add('highlight');
      }
    });
    // Update button label for accessibility
    if (btn.textContent.includes('Highlight')) {
      btn.textContent = 'Remove Wireframe Highlights';
    } else {
      btn.textContent = 'Toggle Wireframe Highlights';
    }
  });

  // Add a simple focus-visible polyfill so keyboard users can see focus in older browsers
  // (very small, non-invasive)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      document.documentElement.classList.add('user-is-tabbing');
    }
  });
})();
