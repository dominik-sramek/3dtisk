/**
 * 3D TISK LAB - JavaScript pro interaktivitu a mobilní navigaci
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // 1. Mobilní menu (Hamburger přepínač)
    // -------------------------------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpened = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpened);

            // Animace ikony křížku/hamburgeru
            const bars = menuToggle.querySelectorAll('.bar');
            if (isOpened) {
                bars[0].style.transform = 'translateY(7px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Zavření mobilního menu po kliknutí na odkaz
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const bars = menuToggle.querySelectorAll('.bar');
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            });
        });
    }

    // -------------------------------------------------------------------------
    // 2. Aktivní zvýraznění odkazu v menu podle aktuálního scrollování
    // -------------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const headerOffset = 120; // posun pro detekci pod hlavičkou

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - headerOffset;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
});

