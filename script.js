document.addEventListener('DOMContentLoaded', function () {
    
    // Initialize AOS
    if (window.AOS) {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80
        });
    }

    // Initialize Vanilla Tilt for the profile card
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelector(".img-frame"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }

    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            if (isFlex) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#0b0f19';
                navLinks.style.padding = '2rem';
                navLinks.style.zIndex = '9999';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });
    }
});
