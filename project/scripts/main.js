/* ---------- Destination data ---------- */
const destinations = [
  { id: "d1", name: "Sunny Beach", region: "Tropical", description: "A tropical paradise perfect for relaxation.", img: "images/beach.jpg", lazy: true },
  { id: "d2", name: "Misty Mountains", region: "Highlands", description: "Breathtaking mountain views and hiking trails.", img: "images/mountain.jpg", lazy: true },
  { id: "d3", name: "Modern City", region: "Urban", description: "Vibrant nights and modern culture.", img: "images/city.jpg", lazy: true },
  { id: "d4", name: "Quiet Forest", region: "Nature", description: "Peaceful forests for nature lovers.", img: "images/forest.jpg", lazy: true }
];

/* ---------- Utility: localStorage ---------- */
function getFavorites() { return JSON.parse(localStorage.getItem("favorites") || "[]"); }
function saveFavorites(arr) { localStorage.setItem("favorites", JSON.stringify(arr)); }

/* ---------- Render destination cards ---------- */
function destinationCardHtml(dest, isFav) {
  const loadingAttr = dest.lazy ? 'loading="lazy" decoding="async"' : "";
  return `
    <article class="destination" data-id="${dest.id}">
      <h3>${dest.name}</h3>
      <img src="${dest.img}" alt="${dest.name}" ${loadingAttr} width="800" height="450">
      <p>${dest.description}</p>
      <p><strong>Region:</strong> ${dest.region}</p>
      <button class="favBtn" aria-pressed="${isFav}">
        ${isFav ? "Remove favorite" : "Save favorite"}
      </button>
    </article>
  `;
}

function renderDestinations(list = destinations) {
  const container = document.getElementById("destinationsList");
  if (!container) return;
  const favs = getFavorites();
  container.innerHTML = list.map(d => destinationCardHtml(d, favs.includes(d.id))).join("");
  attachFavListeners();
}

/* ---------- Favorites ---------- */
function attachFavListeners() {
  document.querySelectorAll(".favBtn").forEach(btn => {
    btn.addEventListener("click", onFavClick);
  });
}
function onFavClick(e) {
  const article = e.target.closest(".destination");
  const id = article.dataset.id;
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(x => x !== id);
    e.target.textContent = "Save favorite";
    e.target.setAttribute("aria-pressed", "false");
  } else {
    favs.push(id);
    e.target.textContent = "Remove favorite";
    e.target.setAttribute("aria-pressed", "true");
  }
  saveFavorites(favs);
}

/* ---------- Filtering ---------- */
function filterAndRender() {
  const query = (document.getElementById("searchBox")?.value || "").toLowerCase();
  const region = document.getElementById("regionFilter")?.value || "";
  const filtered = destinations.filter(d => {
    const matchQuery = !query || d.name.toLowerCase().includes(query) || d.description.toLowerCase().includes(query);
    const matchRegion = !region || d.region === region;
    return matchQuery && matchRegion;
  });
  renderDestinations(filtered);
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const entry = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
      subscribe: form.subscribe.checked,
      date: new Date().toISOString()
    };
    if (!entry.name || !entry.email || !entry.message) {
      status.textContent = "Please fill all required fields.";
      return;
    }
    const saved = JSON.parse(localStorage.getItem("messages") || "[]");
    saved.push(entry);
    localStorage.setItem("messages", JSON.stringify(saved));
    status.textContent = `Thanks, ${entry.name}! Your message has been saved locally.`;
    form.reset();
  });

  document.getElementById("clearStorageBtn")?.addEventListener("click", () => {
    localStorage.removeItem("messages");
    status.textContent = "All saved messages cleared.";
  });
}

/* ---------- Init ---------- */
function init() {
  if (document.getElementById("destinationsList")) {
    renderDestinations();
    document.getElementById("searchBox")?.addEventListener("input", filterAndRender);
    document.getElementById("regionFilter")?.addEventListener("change", filterAndRender);
  }
  initContactForm();
  document.getElementById("exploreBtn")?.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "destinations.html";
  });
}

document.addEventListener("DOMContentLoaded", init);

// Dynamically set the current year in the footer
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModifiedParagraph = document.getElementById("lastModified");
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedParagraph.textContent = `Last Modification: ${formattedDate}`;
