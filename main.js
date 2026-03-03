
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const heroSection = document.querySelector(".hero");

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }, 6000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Dot click control
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slide));
    });
  });

  // Pause on hover
  heroSection.addEventListener("mouseenter", stopAutoSlide);
  heroSection.addEventListener("mouseleave", startAutoSlide);

  // Start carousel
  startAutoSlide();


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

