
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should fade in on scroll
    const fadeInElements = document.querySelectorAll('.fade-in-on-scroll');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // The viewport is the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function to execute when observed elements intersect
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is intersecting (in view), add the 'is-visible' class
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it's visible if you only want it to animate once
                observer.unobserve(entry.target);
            }
            // else {
            //     // Optional: Remove 'is-visible' if you want it to fade out when scrolled away
            //     // entry.target.classList.remove('is-visible');
            // }
        });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each element
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});