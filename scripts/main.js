// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all internal page links (links starting with #)
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click handler to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Stop default jump behavior
            const targetId = this.getAttribute('href');  // Get target section ID
            const targetElement = document.querySelector(targetId);  // Find target element
            targetElement.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll
        });
    });
});