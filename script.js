/* =========================================================
   VAISHNAVI KADAM — PORTFOLIO JAVASCRIPT
   Handles: nav, scroll effects, hamburger, reveal,
            back-to-top, active links, copyright year
   ========================================================= */

'use strict';

// ── DOM References ──────────────────────────────────────
const navbar      = document.getElementById('navbar');
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');
const backToTop   = document.getElementById('back-to-top');
const yearEl      = document.getElementById('current-year');
const navLinks    = document.querySelectorAll('.nav-link[id]');
const sections    = document.querySelectorAll('section[id]');
const revealEls   = document.querySelectorAll('.reveal');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

// ── Copyright Year ───────────────────────────────────────
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Scroll-dependent effects (throttled) ─────────────────
let ticking = false;

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }
}

function handleScroll() {
  const scrollY = window.scrollY;

  // Navbar shadow on scroll
  if (scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back-to-top visibility
  if (scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  // Active nav link highlight
  updateActiveNavLink(scrollY);

  ticking = false;
}

window.addEventListener('scroll', onScroll, { passive: true });

// ── Active Nav Highlight ─────────────────────────────────
function updateActiveNavLink(scrollY) {
  const offset = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-h')) || 72;

  let currentId = '';

  sections.forEach(section => {
    const top = section.offsetTop - offset - 40;
    if (scrollY >= top) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    if (href === currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ── Hamburger Menu ───────────────────────────────────────
function openMenu() {
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.contains('open');
  if (isOpen) closeMenu();
  else openMenu();
});

// Close when a mobile nav link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMenu();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMenu();
    hamburger.focus();
  }
});

// ── Back To Top ──────────────────────────────────────────
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── IntersectionObserver — Reveal on scroll ──────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve once revealed (performance)
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealEls.forEach(el => revealObserver.observe(el));

// ── Smooth scroll for all anchor links ───────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
    ) || 72;

    const top = target.getBoundingClientRect().top + window.scrollY - navH;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Skill card hover micro-animation ─────────────────────
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    const emoji = this.querySelector('.skill-emoji');
    if (emoji) {
      emoji.style.transform = 'scale(1.2) rotate(-5deg)';
      emoji.style.transition = 'transform 200ms cubic-bezier(0.34,1.56,0.64,1)';
    }
  });
  card.addEventListener('mouseleave', function () {
    const emoji = this.querySelector('.skill-emoji');
    if (emoji) {
      emoji.style.transform = '';
    }
  });
});

// ── Project card — keyboard enter activation ─────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstBtn = card.querySelector('a.btn');
      if (firstBtn) firstBtn.click();
    }
  });
});

// ── Initial scroll state ─────────────────────────────────
handleScroll();

// ── Console greeting (fun Easter egg) ───────────────────
console.log(
  '%c👋 Hi there! I\'m Vaishnavi Kadam.',
  'color:#7c3aed; font-size:16px; font-weight:bold;'
);
console.log(
  '%c💻 Computer Engineering Student @ SAKEC | Web Developer in the making!',
  'color:#6366f1; font-size:13px;'
);
console.log(
  '%c📫 vaishnavi.kadam24@sakec.ac.in  |  github.com/vaishnavisk09',
  'color:#9ca3af; font-size:12px;'
);
