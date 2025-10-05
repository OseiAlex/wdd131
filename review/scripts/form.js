// products array (as required)
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product select options (value = id, text = name)
function populateProducts() {
  const select = document.getElementById('product');
  if (!select) return;

  // Ensure first placeholder exists (already in HTML)
  products.forEach(prod => {
    const opt = document.createElement('option');
    opt.value = prod.id;         // id used as value
    opt.textContent = prod.name; // visible text
    select.appendChild(opt);
  });
}

// Small enhancement: when clicking a star label, make it appear selected by toggling attribute on the radio (native behavior) — CSS changes color for :checked
function attachRatingHints() {
  const labels = document.querySelectorAll('.rating label');
  labels.forEach(lbl => {
    lbl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        lbl.click();
        e.preventDefault();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateProducts();
  attachRatingHints();
});

document.getElementById("copyright-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;