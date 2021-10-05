const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleEl.addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    toggleEl.innerText = "Dark Mode";
  } else {
    toggleEl.innerText = "Light Mode";
  }
  html.classList.toggle("dark");
});

setInterval(() => {
  setTime();
}, 1000);

function setTime() {
  const time = new Date();
  let month = time.getMonth();
  let day = time.getDay();
  let date = time.getDate();
  let hours = time.getHours() % 12;
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hours,
    0,
    12,
    0,
    360
  )}deg)`;

  minEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    min,
    0,
    60,
    0,
    360
  )}deg)`;
  secEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    sec,
    0,
    60,
    0,
    360
  )}deg)`;

  dateEl.innerHTML = `${days[day]}, ${
    months[month - 1]
  } <span class="circle">${date}</span>`;
  timeEl.innerHTML = `${hours}:${min < 10 ? `0${min}` : `${min}`} ${
    time.getHours() / 12 < 1 ? `AM` : `PM`
  }`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
