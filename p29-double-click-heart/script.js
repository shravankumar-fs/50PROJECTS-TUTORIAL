const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");
let clickTime = 0;
let timesClicked = 0;
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else if (new Date().getTime() - clickTime < 1000) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = clickTime = new Date().getTime();
  }
});

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  timesClicked++;
  loveMe.appendChild(heart);
  setTimeout(() => {
    times.innerText = timesClicked;
    heart.remove();
  }, 600);
}
