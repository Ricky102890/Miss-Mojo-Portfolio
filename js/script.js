// Variables
const imgs= document.querySelectorAll(".about-img-wrapper img");
let imgIndex = 0;
let intervalId = null;
const pubBtn = document.getElementById("pubMenu");
const projectBtn = document.getElementById("projectMenu");
const contactBtn = document.getElementById("contactMenu");
const subBtn = document.getElementById("subMenu");
// Functions
// !! Needs work
function showMegaMenu() {
        }
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
window.onscroll = () => {
    const container1 = document.querySelectorAll(".main-animate1");
    const container2 = document.querySelectorAll(".main-animate2");
    const container3 = document.querySelectorAll(".main-animate3");
    
    container1.forEach(cont => {
        let top = window.scrollY;
        let contOffset = cont.offsetTop - 300;
        let contHeight = cont.offsetHeight;

        if (top < contOffset + contHeight) {
            cont.classList.add("show-animate1");
        }
        else {
            cont.classList.remove("show-animate1");
        }
    });
    container2.forEach(cont => {
        let top = window.scrollY;
        let contOffset = cont.offsetTop - 300;
        let contHeight = cont.offsetHeight;

        if (top < contOffset + contHeight) {
            cont.classList.add("show-animate2");
        }
        else {
            cont.classList.remove("show-animate2");
        }
    });
    container3.forEach(cont => {
        let top = window.scrollY;
        let contOffset = cont.offsetTop - 300;
        let contHeight = cont.offsetHeight;

        if (top < contOffset + contHeight) {
            cont.classList.add("show-animate3");
        }
        else {
            cont.classList.remove("show-animate3");
        }
    });
}