document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Toggle menu visibility when hamburger is clicked
    hamburger.addEventListener('click', () => {
        // Toggle between 'block' and 'none' to show/hide the menu
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});


// Set footer last modified date
const lastModified = document.getElementById('lastModified');   
lastModified.textContent = document.lastModified;