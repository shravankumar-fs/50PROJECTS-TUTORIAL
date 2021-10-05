const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const id = document.getElementById("id");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

let getData = () => {
  header.innerHTML = `<img
      src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
      alt=""
    />`;
  excerpt.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
    dolore.`;
  title.innerText = `Lorem ipsum dolor sit amet.`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  id.innerText = `John Doe`;
  date.innerText = "Oct 08 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
};
setTimeout(getData, 2000);
