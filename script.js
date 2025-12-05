const navbar = document.querySelector('.navbar');

// Scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {   // 50px scroll hone ke baad
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
