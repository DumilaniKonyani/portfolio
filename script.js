// Typing effect
const text = "Hi, I'm Dumilani 👋";
let index = 0;
const typingSpeed = 100;
const typedText = document.getElementById("typed-text");

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}
type();

// Scroll fade-in effect
const sections = document.querySelectorAll(".fade-in-section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
