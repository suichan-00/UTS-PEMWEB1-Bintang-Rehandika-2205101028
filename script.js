// Slider Discography
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  updateSlider();
});

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  updateSlider();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const offset = document.querySelector('header').offsetHeight; // Tinggi header
        const targetPosition = targetElement.offsetTop - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });