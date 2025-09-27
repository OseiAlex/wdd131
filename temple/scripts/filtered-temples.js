// Temple Data
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7761e87183d3a9d62055ebb8b18035d6f7441789/full/320%2C/0/default"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/320%2C/0/default"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/804587d0137532b76b3661501e624ab155e0083f/full/320%2C/0/default"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919-11-27",
    area: 42320,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/bcff33b8702e7490b7fb8d097a70859b4d6d14d0/full/320%2C/0/default"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/825014ad7522e9baeadfafbee6ac86a4aecad6e0/full/320%2C/0/default"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44175,
    imageUrl: "https://churchofjesuschrist.org/imgs/76b9cf4bbdfaa0c5ac83e1ad129854da057c37d9/full/320%2C/0/default"
  },
  {
    templeName: "Preston England Temple",
    location: "Chorley, England",
    dedicated: "1998-06-07",
    area: 69630,
    imageUrl: "https://churchofjesuschrist.org/imgs/4f09a606b5a42ea2586c2a5c8a56555f7908c3f9/full/320%2C/0/default"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996-05-26",
    area: 21900,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/2430c13195837ca3b8d54cc22f92a37d1cac4419/full/320%2C/0/default"
  },
  {
    templeName: "Rexburg Idaho Temple",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008-02-28",
    area: 57504,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/689bbc7521d05a77c72a4d8e8a7e70ea8a375f07/full/320%2C/0/default"
  }
];

// Render card
function renderTempleCard(t) {
  const card = document.createElement("div");
  card.classList.add("temple-card");
  card.innerHTML = `
    <h3>${t.templeName}</h3>
    <p><strong>Location:</strong> ${t.location}</p>
    <p><strong>Dedicated:</strong> ${t.dedicated}</p>
    <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
    <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
  `;
  return card;
}

// Display temples
function displayTemples(list) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";
  list.forEach(t => container.appendChild(renderTempleCard(t)));
}

// Filters
function filterTemples(criteria) {
  switch (criteria) {
    case "old": return temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    case "new": return temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    case "large": return temples.filter(t => t.area > 90000);
    case "small": return temples.filter(t => t.area < 10000);
    default: return temples;
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  // nav filter clicks
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      displayTemples(filterTemples(filter));
    });
  });

  // hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    hamburger.textContent = expanded ? "☰" : "✕";
  });

  // footer info
  document.getElementById("copyright-year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});
