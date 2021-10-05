const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 100);
function blurring() {
  load += 5;
  loadText.innerText = `${load}%`;
  if (load > 99) {
    clearInterval(int);
    loadText.innerText = "";
  }
  bg.style.filter = `blur(${(30 * (100 - load)) / 300}px)`;
  loadText.style.opacity = (100 - load) / 100;
}
