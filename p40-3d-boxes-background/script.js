const boxContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

createBoxes();
btn.addEventListener("click", () => {
  boxContainer.classList.toggle("big");
});
function createBoxes() {
  let value = -125;
  for (let i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${value * j}px ${value * i}px`;
      boxContainer.appendChild(box);
    }
  }
}
