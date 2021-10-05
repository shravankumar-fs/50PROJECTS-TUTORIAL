const tagsEl = document.getElementById("tags");
const textAr = document.getElementById("textarea");

textAr.focus();

textAr.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(str) {
  const tags = str
    .split(",")
    .filter((tag) => tag.trim() != "")
    .map((tag) => tag.trim());
  console.log(tags);
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const t = document.createElement("span");
    t.innerText = tag;
    t.classList.add("tag");
    tagsEl.appendChild(t);
  });
}

function randomSelect() {
  times = 30;

  const interval = setInterval(() => {
    //loop and pickup random tag to highlight
    const tag = pickRandomTag();
    highlightTag(tag);
    //clear picked up tag
    setTimeout(() => {
      unHighlightTag(tag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, 100 * times);
}

function pickRandomTag() {
  const len = Math.ceil((Math.random() + 1) * 10000) % tagsEl.childNodes.length;
  return tagsEl.childNodes[len];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
