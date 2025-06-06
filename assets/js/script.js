// Wait for the full HTML document to be loaded and parsed
document.addEventListener("DOMContentLoaded", () => {

    // Initialize the Typed.js library for typewriter effect on element with ID 'typed-output'
    new Typed('#typed-output', {
        strings: [ // List of strings to display one after another
            "Hi, I'm Subin Bajracharya",
            "Software Developer",
            "Crafting modern web experiences"
        ],
        typeSpeed: 60, // Speed of typing each character (in milliseconds)
        backSpeed: 40, // Speed of deleting each character (in milliseconds)
        backDelay: 1800, // Delay before backspacing begins (in milliseconds)
        loop: true // Loop the animation indefinitely
    });

    // Enable smooth scrolling with header height offset for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // For each anchor link that starts with #
        anchor.addEventListener('click', function (e) {
            // Get the ID the link is pointing to (e.g., #about)
            const targetId = this.getAttribute('href');

            // If it's a valid in-page anchor
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault(); // Prevent default jump to section

                // Get the height of the navigation bar (header offset)
                const headerHeight = document.querySelector('nav').offsetHeight;

                // Get the vertical position of the target section
                const targetPosition = document.querySelector(targetId).offsetTop;

                // Scroll smoothly to the target position minus the header height
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer to animate elements when they enter the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // If the element is visible in the viewport
                entry.target.classList.add('animate-fade-in'); // Add animation class
                observer.unobserve(entry.target); // Stop observing this element after animation
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Apply the observer to all elements with the 'animate' class
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});
