document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        el.classList.add('transition-all', 'duration-[1000ms]', 'ease-out', 'opacity-0', 'translate-y-8', 'data-[visible=true]:opacity-100', 'data-[visible=true]:translate-y-0');
        observer.observe(el);
    });
});
