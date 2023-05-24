const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.products__carousel-slide');

function showCurrentSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth > 768) {
        const secondSlideIdx = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 1024) {
            const thirdSlideIdx = secondSlideIdx === slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

showCurrentSlide();

function nextSlide() {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
}

setInterval(nextSlide, 2000);

const nextBtn = document.querySelector('.products__carousel-btn--next');
const prevBtn = document.querySelector('.products__carousel-btn--prev');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);