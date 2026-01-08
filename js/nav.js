// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', function() {
            navContainer.classList.toggle('mobile-open');
            
            // Change icon between hamburger and X
            const icon = menuToggle.querySelector('span');
            if (icon) {
                if (navContainer.classList.contains('mobile-open')) {
                    icon.textContent = '✕';
                } else {
                    icon.textContent = '☰';
                }
            }
        });

        // Close menu when clicking on a link
        const navLinks = navContainer.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navContainer.classList.remove('mobile-open');
                const icon = menuToggle.querySelector('span');
                if (icon) {
                    icon.textContent = '☰';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navContainer.contains(event.target) && !menuToggle.contains(event.target)) {
                navContainer.classList.remove('mobile-open');
                const icon = menuToggle.querySelector('span');
                if (icon) {
                    icon.textContent = '☰';
                }
            }
        });
    }
});
