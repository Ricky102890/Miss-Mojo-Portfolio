// Variables
const imgs= document.querySelectorAll(".about-img-wrapper img");
let imgIndex = 0;
let intervalId = null;
// Functions
function startSlideshow() {
    if (imgs.length > 0) {
        imgs[imgIndex].classList.add("show-img");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide() {
    if (imgIndex >= imgs.length) {
        imgIndex = 0;
    }
    else if (imgIndex < 0) {
        imgIndex = imgs.length - 1;
    }
    imgs.forEach(img => {
        img.classList.remove("show-img");
    });
    imgs[imgIndex].classList.add("show-img");
}
function prevSlide() {
    imgIndex++;
    showSlide(imgIndex);
}
function nextSlide() {
    imgIndex--;
    showSlide(imgIndex);
}
// Events
window.addEventListener("DOMContentLoaded", startSlideshow);