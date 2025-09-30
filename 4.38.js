
  const slides = document.getElementById('slides');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = dots.length;
  let currentIndex = 0;

  function updateSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides -1;
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    updateSlide(currentIndex -1);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    updateSlide(currentIndex +1);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      updateSlide(index);
    });
  });

  // Optional: Auto-play
  // setInterval(() => {
  //   updateSlide(currentIndex +1);
  // }, 5000);