// Get current year and display in the footer
const yearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Get last modified date and display in the footer
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
