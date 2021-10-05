const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let activeSlide = 0;

setBgImageBody();
function setBgImageBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
leftBtn.addEventListener("click", () => {
  if (activeSlide > 0) {
    slides[activeSlide].classList.remove("active");
    activeSlide--;
    slides[activeSlide].classList.add("active");
    setBgImageBody();
  }
});
rightBtn.addEventListener("click", () => {
  if (activeSlide < slides.length - 1) {
    slides[activeSlide].classList.remove("active");
    activeSlide++;
    slides[activeSlide].classList.add("active");
    setBgImageBody();
  }
});
