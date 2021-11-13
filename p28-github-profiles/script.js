const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    createErrorCard("No profile with this username");
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    console.log("problem fetching repos");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt=""
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${user.login}</h2>
      <p>
      ${user.bio}
      </p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos">
       
      </div>
    </div>
  </div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
        <div class="card">
            <h1>${message}<h1>
        
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  let str = "";
  repos.slice(0, 5).forEach((r) => {
    str =
      str +
      `<a href="${r.html_url}" target="_blank" class="repos">${r.name}</a>`;
  });
  reposEl.innerHTML = str;
}
