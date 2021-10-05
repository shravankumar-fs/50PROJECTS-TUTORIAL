const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    cup.classList.toggle("full");
    handleOther(idx);
  });
});

function handleOther(idx) {
  for (let i = 0; i < smallCups.length; i++) {
    if (i < idx) {
      if (!smallCups[i].classList.contains("full"))
        smallCups[i].classList.add("full");
    } else if (i > idx)
      if (smallCups[i].classList.contains("full"))
        smallCups[i].classList.remove("full");
  }
  manageBigCup();
}

function manageBigCup() {
  const full = document.querySelectorAll(".cup-small.full").length;
  const totalCup = document.querySelectorAll(".cup-small").length;
  console.log(full, totalCup);
  let percentHt = (full / totalCup) * 330;
  let remainedHt = 330 - percentHt;
  remained.style.height = remainedHt + "px";
  percentage.style.height = percentHt + "px";
  if (full === 0) {
    percentage.style.visibility = "hidden";
    liters.innerText = "2L";
  } else {
    percentage.style.visibility = "visible";
    let done = full / totalCup;
    percentage.innerText = done * 100 + "%";
    liters.innerText = 2 - 2 * done + "L";
  }
}
