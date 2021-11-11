let k = `<li>
          <img
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt="Sara"
          />
          <div class="user-info">
            
          </div>
        </li>  `;

const resultsCont = document.getElementById("result");
const filter = document.getElementById("filter");

listItems = [];

filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

/** get Data */
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  resultsCont.innerHTML = ``;

  results.forEach((user) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = user.picture.large;

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    userInfo.innerHTML = `
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    `;

    li.appendChild(img);
    li.appendChild(userInfo);
    listItems.push(li);
    resultsCont.appendChild(li);
  });
}
getData();
