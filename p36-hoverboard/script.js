const container = document.getElementById("container");

const colors = ["blue", "red", "yellow", "green", "white", "pink", "purple"];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseout", () => {
    removeColor(square);
  });

  container.appendChild(square);
}

function setColor(square) {
  square.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}
function removeColor(square) {
  square.style.backgroundColor = "#1d1d1d";
}
