// script.js — small UI helpers: menu toggle, reveal on scroll, active nav, theme
document.addEventListener('DOMContentLoaded', () => {
  // menu toggle (mobile)
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (ham) ham.addEventListener('click', () => nav.classList.toggle('open'));

  // active link highlighting - use pathname
  const anchors = document.querySelectorAll('nav a');
  const current = location.pathname.split('/').pop() || 'index.html';
  anchors.forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // reveal on scroll using IntersectionObserver
  const reveals = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, {threshold: 0.15});
    reveals.forEach(r => io.observe(r));
  } else {
    // fallback
    reveals.forEach(r => r.classList.add('revealed'));
  }

  // theme toggle (light/dark-ish)
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const saved = localStorage.getItem('io-theme');
    if (saved === 'light') document.documentElement.classList.add('light-theme');
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light-theme');
      const isLight = document.documentElement.classList.contains('light-theme');
      localStorage.setItem('io-theme', isLight ? 'light' : 'dark');
    });
  }
});
