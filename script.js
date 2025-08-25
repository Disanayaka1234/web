// script.js

// === MOBILE MENU TOGGLE ===
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// === FADE-UP ANIMATION ON SCROLL ===
const fadeEls = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.add("fade-in"); // trigger CSS animation
      }
    });
  },
  { threshold: 0.2 }
);

fadeEls.forEach((el) => observer.observe(el));

// === OPTIONAL: TYPING EFFECT FOR HERO SUBTITLE ===
const subtitle = document.querySelector(".typing-text");
if (subtitle) {
  const text = subtitle.innerText;
  subtitle.innerText = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      subtitle.innerText += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // typing speed
    }
  }
  typeWriter();
}
