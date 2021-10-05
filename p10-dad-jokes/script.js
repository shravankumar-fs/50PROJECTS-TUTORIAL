const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const config = {
  headers: {
    Accept: "application/json",
  },
};
generateJoke();

async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  joke.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", () => generateJoke());
