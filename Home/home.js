let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelector('.carousel-inner');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    const slides = document.querySelector('.carousel-inner');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelector('.carousel-inner');
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlidePosition(); // Initialize to first slide
});
