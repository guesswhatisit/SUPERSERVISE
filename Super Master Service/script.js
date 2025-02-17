// Параллакс-эффект для фона на скролле
window.addEventListener('scroll', function () {
    const hero = document.getElementById('hero');
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});

// Анимация на скролл для текста
const heroContent = document.querySelector('.hero-content');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            heroContent.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

observer.observe(heroContent);
