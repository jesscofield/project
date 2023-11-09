const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function switchItem() {
    carouselItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add("active");
}

switchItem();

let interval = setInterval(switchItem, 3000);

function pauseCarousel() {
    clearInterval(interval);
}

function resumeCarousel() {
    interval = setInterval(switchItem, 3000);
}

function prevItem() {
    carouselItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.add("active");
}

function nextItem() {
    carouselItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add("active");
}

carousel.addEventListener("mouseover", pauseCarousel);
carousel.addEventListener("mouseout", resumeCarousel);
prevButton.addEventListener("click", prevItem);
nextButton.addEventListener("click", nextItem);