let currentImageIndex = 0;

function showImageSlide(index) {
    const slides = document.querySelectorAll('.image-slide');
    if (index >= slides.length) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = slides.length - 1;
    } else {
        currentImageIndex = index;
    }
    const offset = -currentImageIndex * 100;
    document.querySelector('.image-slider-container').style.transform = `translateX(${offset}%)`;
}

function nextImageSlide() {
    showImageSlide(currentImageIndex + 1);
}

function prevImageSlide() {
    showImageSlide(currentImageIndex - 1);
}

setInterval(() => {
    nextImageSlide();
}, 3000);