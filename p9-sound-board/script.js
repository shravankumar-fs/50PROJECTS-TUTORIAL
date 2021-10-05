const buttons = document.getElementById("buttons");
const audios = document.querySelectorAll("audio");

audios.forEach((a) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = a.id;
  button.addEventListener("click", () => {
    stopOthers();
    a.play();
  });
  buttons.appendChild(button);
});

function stopOthers() {
  audios.forEach((a) => {
    a.pause();
    a.currentTime = 0;
  });
}
