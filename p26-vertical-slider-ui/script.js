const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let active = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    active = active >= slidesLength - 1 ? 0 : active + 1;
  } else {
    active = active < 1 ? slidesLength - 1 : active - 1;
  }
  slideRight.style.transform = `translateY(-${active * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${active * sliderHeight}px)`;
}
