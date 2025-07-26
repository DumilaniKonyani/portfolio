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

// Animate the profile picture on hover
const profilePic = document.getElementById('profilePic');
profilePic.addEventListener('mouseover', () => {
  profilePic.style.transform = 'rotate(360deg)';
});
profilePic.addEventListener('mouseout', () => {
  profilePic.style.transform = 'rotate(0deg)';
});

// Fade in the intro text on page load
const introText = document.getElementById('introText');
window.addEventListener('load', () => {
  introText.style.opacity = 0;
  introText.style.transition = 'opacity 2s';
  setTimeout(() => {
    introText.style.opacity = 1;
  }, 500);
});


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
