// Intersection Observer - Updated for left/right animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 }); // Reduced threshold for earlier trigger

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Immediately show hero content
document.querySelector('#hero').classList.add('section-active');