// ===== Navigation =====
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Scroll effect for nav
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    navToggle?.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        navToggle?.classList.remove('active');
    });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

// Initial check
revealOnScroll();

// On scroll
window.addEventListener('scroll', revealOnScroll);

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Subtle parallax effect for hero =====
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
    if (heroContent && window.scrollY < window.innerHeight) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.15;
        heroContent.style.transform = `translateY(${rate}px)`;
    } else if (heroContent) {
        heroContent.style.transform = '';
    }
});

// ===== Intersection Observer for staggered animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
        }
    });
}, observerOptions);

// Apply to project cards and timeline items for staggered effect
document.querySelectorAll('.project-card, .timeline-item, .education-card, .cert-card, .strength-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
});
