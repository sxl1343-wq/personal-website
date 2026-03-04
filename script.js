document.addEventListener('DOMContentLoaded', () => {
    // Elegant navbar scroll effect
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Single Page Application (SPA) Tab Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const pageSections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Allow outside links like CV to work normally
            if (!targetId.startsWith('#') && targetId !== 'index.html') {
                return;
            }

            e.preventDefault();

            // Determine which section to show (index.html maps to #home)
            const targetElementId = targetId === 'index.html' ? '#home' : targetId;
            const targetElement = document.querySelector(targetElementId);

            if (targetElement) {
                // Update active state on nav links
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');

                // Hide all sections, show target section
                pageSections.forEach(section => section.classList.remove('active-section'));
                targetElement.classList.add('active-section');

                // Instantly jump to top so no scroll motion is visible
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        });
    });
});
