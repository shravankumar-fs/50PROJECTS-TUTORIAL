const label = document.getElementById("lab");

label.innerHTML = label.innerText
  .split("")
  .map(
    (letter, idx) =>
      `<span style="transition-delay:${idx * 10}ms">${letter}</span>`
  )
  .join("");
