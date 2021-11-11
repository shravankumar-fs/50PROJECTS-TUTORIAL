const background = document.getElementById("background");
const inp = document.getElementById("password");

inp.addEventListener("input", (e) => {
  let strength = e.target.value.length * 2;
  background.style.filter = `blur(${20 - strength}px)`;
});
