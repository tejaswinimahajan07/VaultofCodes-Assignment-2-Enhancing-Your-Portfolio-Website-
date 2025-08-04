// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

scrollBtn.onclick = () => {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
};

// Optional: Typing animation using JS
const typing = document.querySelector('.typing');
const text = "Hi, I'm Tejaswini, Web Developer.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typing.textContent = "";
typeEffect();
document.getElementById("toggleDarkMode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-cards .card');
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
