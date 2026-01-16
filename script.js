const navbar = document.querySelector('.navbar');

// Scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {   // 50px scroll hone ke baad
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
