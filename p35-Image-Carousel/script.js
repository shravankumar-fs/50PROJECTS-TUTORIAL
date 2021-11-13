const pics = document.querySelectorAll("#imgs img");

const imgsContainer = document.getElementById("imgs");
const prev = document.getElementById("left");
const next = document.getElementById("right");

prev.addEventListener("click", () => {
  idx--;
  changeImage();
});
next.addEventListener("click", () => {
  idx++;
  changeImage();
});

let idx = 0;

let interval = setInterval(() => {
  idx++;
  changeImage();
}, 10000);

function changeImage() {
  if (idx > pics.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = pics.length - 1;
  }
  imgsContainer.style.transform = `translateX(${-500 * idx}px)`;
}
