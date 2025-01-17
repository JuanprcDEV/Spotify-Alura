const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});

/*Boas-vindas dinâmico*/
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();


if (currentHour >= 5 && currentHour < 12) {
greetingElement.textContent = "Bom dia";
} else if (currentHour >= 12 && currentHour < 18) {
greetingElement.textContent = "Boa tarde";
} else {
greetingElement.textContent = "Boa noite";
}

greetingElement.textContent = greetingMessage;

const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  
  const containerWidth = container.offsetWidth; 
  const numColumns = Math.floor(containerWidth / 200); 


  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});

observer.observe(container);