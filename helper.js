window.addEventListener('load', solve)
function solve(){
  let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('image__container');

    // Hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Show current image
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 1500);
}
}

const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.opacity = 100;
        } else {
          slide.style.opacity = 0;
        }
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    showSlide(currentSlide);
