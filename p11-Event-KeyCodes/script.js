const insert = document.querySelector(".insert");
const old = insert.innerHTML;

window.addEventListener("keydown", (key) => {
  console.log(key);
  if (key.keyCode == 32) {
    key.key = "Space";
  }

  insert.innerHTML = `
  <div class="key">
  ${key.keyCode == 32 ? "Space" : key.key}
  <small>event.key</small>
</div>
<div class="key">
  ${key.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${key.code}
  <small>event.code</small>
</div>
${old}`;
});
