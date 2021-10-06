const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

let count = -1;

button.addEventListener("click", () => {
  count = count > messages.length - 2 ? 0 : count + 1;
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = messages[count];
  toasts.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
});
