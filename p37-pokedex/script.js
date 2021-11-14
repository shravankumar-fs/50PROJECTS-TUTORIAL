const POKEURL = `https://pokeapi.co/api/v2/pokemon/`;

const poke_container = document.getElementById("poke-container");
const pokemon_count = 386;
const colors = {
  fire: "darkorange",
  grass: "yellowgreen",
  electric: "yellow",
  water: "skyblue",
  ground: "#ebc26b",
  rock: "brown",
  fairy: "lightpink",
  poison: "purple",
  bug: "green",
  dragon: "red",
  psychic: "#c84fa6",
  flying: "#d3f2f4",
  fighting: "#59390b",
  normal: "wheat",
  ice: "#a9eff3",
  steel: "steelblue",
  ghost: "rebeccapurple",
  dark: "black",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

class Pokemon {
  id;
  name;
  types;
  image;
}

let getBackground = (types) => {
  return types.length == 1
    ? colors[types[0]]
    : `linear-gradient(to right,${colors[types[0]]} 60%,${
        colors[types[1]]
      } 100%)`;
};
let getTypes = (types) => {
  let str = "";
  types.forEach((type) => {
    str += `<span class="type" style="background: ${
      colors[type]
    }">${type.toUpperCase()}</span>`;
  });
  return str;
};

const createCard = (pokemon) => {
  let cardBg = getBackground(pokemon.types);

  let idmap = pokemon.id.toString().padStart(3, "0");

  let p = `
      <div class="pokemon" style="background: ${cardBg}">
          <div class="img-container">
            <img
              src="${pokemon.image}"
              alt=""
            />
          </div>
          <div class="info">
            <span class="number">#${idmap}</span>
            <h3 class="name">${pokemon.name.toUpperCase()}</h3>
            <small>${getTypes(pokemon.types)}</small>
          </div>
        </div>
      `;
  let dom = document.createElement("div");
  dom.innerHTML = p;
  poke_container.appendChild(dom);
};

const getPokemon = async (id) => {
  let poke = await fetch(POKEURL + id);
  const data = await poke.json();
  let p = new Pokemon();
  p.id = data.id;
  p.name = data.name;
  p.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
  p.types = [];
  data.types.forEach((el) => {
    p.types.push(el.type.name);
  });
  createCard(p);
};

fetchPokemons();
