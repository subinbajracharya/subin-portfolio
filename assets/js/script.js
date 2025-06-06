document.addEventListener("DOMContentLoaded", () => {
    new Typed('#typed-output', {
        strings: [
            "Hi, I'm Subin Bajracharya",
            "Software Developer",
            "Crafting modern web experiences"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1800,
        loop: true
    });

    // Smooth Scroll with header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault();
                const headerHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = document.querySelector(targetId).offsetTop;
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});
