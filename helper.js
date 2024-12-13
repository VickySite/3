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