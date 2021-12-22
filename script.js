let projects = [
  "p1-expanding-cards",
  "p2-progress-steps",
  "p3-rotating-navigation",
  "p4-hidden-search",
  "p5-blurry-loading",
  "p6-scroll-animation",
  "p7-split-landing-page",
  "p8-form-input-wave",
  "p9-sound-board",
  "p10-dad-jokes",
  "p11-Event-KeyCodes",
  "p12-faq-collapse",
  "p13-random-choice",
  "p14-animated-nav",
  "p15-incrementing-counter",
  "p16-drink-water",
  "p17-movie-app",
  "p18-background-silder",
  "p19-theme-clock",
  "p20-button-ripple",
  "p21-drop-boxes",
  "p22-canvas",
  "p23-kinetic-loader",
  "p24-content-placeholder",
  "p25-Sticky-Navbar",
  "p26-vertical-slider-ui",
  "p27-toast-notification",
  "p28-github-profiles",
  "p29-double-click-heart",
  "p30-AutoText-Effect",
  "p31-Password-Generator",
  "p32-good-cheap-fast",
  "p33-Notes-App",
  "p34-Animated-countdown",
  "p35-Image-Carousel",
  "p36-hoverboard",
  "p37-pokedex",
  "p38-mobile-tab-nav",
  "p39-Password-Strength-BG",
  "p40-3d-boxes-background",
  "p41-Verify-Account",
  "p42-Live-User-Filter",
  "p43-feedback-ui-design",
  "p44-custom-range-slider",
  "p45-netflix-mobile-navigation",
  "p46-quiz-app",
  "p47-testimonial-box-switcher",
  "p48-random-image-generator",
  "p49-todo-list",
  "p50-insect-catch-game",
];

class Project {
  constructor(id, name, link) {
    this.id = id;
    this.name = name;
    this.link = link;
  }
}
let projectList = [];
projects.forEach((project) => {
  projectList.push(
    new Project(
      project.split("-")[0].substring(1),
      project.split("-").slice(1).join(" "),
      project + "/index.html"
    )
  );
});
let first = true;
const click = document.getElementById("click");
projectList.forEach((pr) => {
  const row = document.createElement("div");
  row.classList.add("project");
  row.innerHTML = `
  <div class="prHeading">
  <a href="${pr.link}" target="_blank"><span class="num">${pr.id}</span>&nbsp;&nbsp;<span class="proName">${pr.name}</span></a>
  </div>`;
  row.addEventListener("mouseenter", () => {
    click.play();
    setTimeout(() => {
      click.pause();
      click.currentTime = 0;
    }, 300);
  });
  row.addEventListener("click", () => {
    click.play();
    setTimeout(() => {
      click.pause();
      click.currentTime = 0;
    }, 300);
  });
  document.getElementById("projects").appendChild(row);
});

// document.body.addEventListener("mousemove", (e) => {
//   document.body
//     .querySelectorAll(".customCursor")
//     .forEach((item) => item.remove());
//   let cursor = document.createElement("div");
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";
//   cursor.classList.add("customCursor");
//   document.body.appendChild(cursor);
//   cursor.style.animation = "cursorfade 1s ease-out infinite";
// });
