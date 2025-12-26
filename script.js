document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Initialize Animation Library
    if (window.AOS) {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // 2. Mobile Navigation Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            
            if (!isFlex) {
                // Style for mobile dropdown
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#0a0f1c';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
                navLinks.style.zIndex = '999';
            }
        });
    }

    // 3. Close Menu on Link Click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });

});
