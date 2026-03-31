
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

// Function to go to a slide
function goToSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if(i === n) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
  currentSlide = n;
}

// Next slide
function nextSlide() {
  let next = currentSlide + 1;
  if(next >= slides.length) next = 0;
  goToSlide(next);
}

// Auto slide
function startSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

// Stop slide
function stopSlide() {
  clearInterval(slideInterval);
}

// Dot click
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
    stopSlide();
    startSlide();
  });
});

// Pause on hover
document.querySelector('.hero-carousel').addEventListener('mouseenter', stopSlide);
document.querySelector('.hero-carousel').addEventListener('mouseleave', startSlide);

// Init
goToSlide(0);
startSlide();


  // sticky navbar/////////////////////////
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

