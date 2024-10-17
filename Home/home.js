function setupCarousel(carouselClass) {
    let currentSlide = 0;

    function nextSlide() {
        const slides = document.querySelector(`.${carouselClass} .carousel-inner`);
        const totalSlides = slides.children.length;
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition(slides);
    }

    function prevSlide() {
        const slides = document.querySelector(`.${carouselClass} .carousel-inner`);
        const totalSlides = slides.children.length;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition(slides);
    }

    function updateSlidePosition(slides) {
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector(`.${carouselClass} .next`).addEventListener('click', nextSlide);
    document.querySelector(`.${carouselClass} .prev`).addEventListener('click', prevSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    setupCarousel('carousel-1');
    setupCarousel('carousel-2');
});
