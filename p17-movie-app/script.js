const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23c428e5e6e883031294f63d0e90e3ce&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=23c428e5e6e883031294f63d0e90e3ce&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("main").innerHTML = "";
  data.results.forEach((element) => {
    createCard(element);
  });
}

function createCard(element) {
  const card = document.createElement("div");
  card.classList.add("movie");
  const img = document.createElement("img");
  img.src = `${IMG_PATH}${element.poster_path}`;
  const info = document.createElement("div");
  const titleInfo = document.createElement("h3");
  const rating = document.createElement("span");

  titleInfo.innerText = element.title;
  rating.innerText = element.vote_average;

  info.appendChild(titleInfo);
  info.appendChild(rating);
  info.classList.add("movie-info");
  const ov = document.createElement("div");
  ov.classList.add("overview");
  ov.innerHTML = "<h3>Overview</h3>" + element.overview;
  card.appendChild(img);
  card.appendChild(info);
  styleRating(rating);
  card.appendChild(ov);
  document.getElementById("main").appendChild(card);
}

function styleRating(rating) {
  const count = +rating.innerText;
  if (count > 7.8) {
    rating.classList.add("green");
  } else if (count > 6) {
    rating.classList.add("orange");
  } else {
    rating.classList.add("red");
  }
  console.log(rating.innerText);
  rating.classList.forEach((element) => {
    console.log(element);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm != "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
