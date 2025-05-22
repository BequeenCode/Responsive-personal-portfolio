
// Responsive Navbar Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
};

// Remove navbar on scroll or link click (for mobile UX)
window.onscroll = () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
};
document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  };
});

// Active link switching on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    let sectionTop = section.offsetTop - 100;
    let sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ScrollReveal Animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-img, .about-content, .skills-container, .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .footer', { origin: 'bottom' });

// Typed.js for animated text
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Designer', 'UI/UX Designer'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true
});

// Smooth scroll to top
document.querySelector('.footer-iconTop a').onclick = function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// (Optional) Prevent default form submission for demo
document.getElementById('contact-form').onsubmit = function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! (Form submission is disabled in this demo.)');
};