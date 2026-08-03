// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Sticky Navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");

  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });

      navLinks.classList.remove("active");
    }
  });
});

// Reveal Animation
const revealElements = document.querySelectorAll(".card, .section-title");

const reveal = () => {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
