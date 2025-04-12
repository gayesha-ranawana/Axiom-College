document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const slideContents = document.querySelectorAll('.slide-content');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const currentSlideNumber = document.querySelector('.slide-counter .current');
    const totalSlideNumber = document.querySelector('.slide-counter .total');
  
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;
  
    function initSlider() {
      totalSlideNumber.textContent = slides.length.toString().padStart(2, '0');
      updateSlideCounter(currentSlide);
      startSlideshow();
      setupEventListeners();
    }
  
    function updateSlideCounter(index) {
      currentSlideNumber.textContent = (index + 1).toString().padStart(2, '0');
    }
  
    function goToSlide(index) {
      if (isAnimating) return;
      isAnimating = true;
  
      slides.forEach(s => s.classList.remove('active'));
      slideContents.forEach(c => c.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
  
      slideContents[index].offsetWidth; // reflow
      slides[index].querySelector('img').offsetHeight; // reflow for animation
  
      slides[index].classList.add('active');
      slideContents[index].classList.add('active');
      dots[index].classList.add('active');
      updateSlideCounter(index);
      currentSlide = index;
  
      resetSlideshow();
  
      setTimeout(() => {
        isAnimating = false;
      }, 1000);
    }
  
    function nextSlide() {
      const index = (currentSlide + 1) % slides.length;
      goToSlide(index);
    }
  
    function prevSlide() {
      const index = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(index);
    }
  
    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 6000);
    }
  
    function resetSlideshow() {
      clearInterval(slideInterval);
      startSlideshow();
    }
  
    function setupEventListeners() {
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      dots.forEach(dot => {
        dot.addEventListener('click', function () {
          goToSlide(parseInt(this.dataset.index));
        });
      });
    }
  
    initSlider();
  });
  