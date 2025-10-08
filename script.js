lucide.createIcons();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuButton.querySelector('[data-lucide="menu"]');
const xIcon = mobileMenuButton.querySelector('[data-lucide="x"]');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    xIcon.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileNavLinks = mobileMenu.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
};

// Animation Script
const animatedElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});
animatedElements.forEach(element => {
    observer.observe(element);
});
