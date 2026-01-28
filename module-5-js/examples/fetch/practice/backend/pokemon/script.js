async function getData() {
  const remoteUrl = "https://pokeapi.co/api/v2/pokemon/gengar";
  const response = await fetch(remoteUrl);
  if (!response.ok)
    throw new Error(`Network response was not ok: ${response.status}`);
  const data = await response.json();
  return data;
}

function renderDataAsText(data) {
  const name = data.name;
  const image = data.sprites.other.home.front_default;
  const type = data.types[0].type.name;

  const nameEl = document.getElementById("poke-name");
  nameEl.textContent = name;

  const imgEl = document.getElementById("poke-image");
  imgEl.setAttribute("src", image);

  const typesEl = document.getElementById("poke-types");
  typesEl.textContent = type;

  const statsEl = document.getElementById("poke-stats");

  const card = document.getElementById("poke-card");
}

document.addEventListener("DOMContentLoaded", async () => {
  const backendData = await getData();
  console.log({ backendData });
  renderDataAsText(backendData);
});
