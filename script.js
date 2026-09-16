const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? '×' : '+';
});

nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '+';
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
