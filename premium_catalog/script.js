document.addEventListener("DOMContentLoaded", () => {
    // Transparent to Solid Navbar on Scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Intersection Observer for Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    // Select all elements to be animated
    const animatedElements = document.querySelectorAll(".fade-up, .reveal-left, .reveal-right");
    animatedElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for anchor tags
    document.querySelectorAll('.navbar nav ul li a, .footer-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
