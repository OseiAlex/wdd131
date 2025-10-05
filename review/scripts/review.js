const products = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

function idToName(id) {
  const match = products.find(p => p.id === id);
  return match ? match.name : id;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const summary = document.getElementById("summary");

  params.forEach((value, key) => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = key;
    dd.textContent = key === "product" ? idToName(value) : value;
    summary.appendChild(dt);
    summary.appendChild(dd);
  });

  // localStorage counter
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  document.getElementById("reviewCount").textContent = count;
});

document.getElementById("copyright-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;