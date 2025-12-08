// script.js - small UI helpers: active nav highlighting & smooth anchor scrolling
document.addEventListener('DOMContentLoaded', function() {
  // highlight active nav link based on filename
  const links = document.querySelectorAll('.nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  // smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});
