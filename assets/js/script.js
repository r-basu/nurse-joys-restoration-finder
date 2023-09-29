let pokeDropdown = document.getElementById("dark_select");

let pokeType = localStorage.pokemonType;
let pokeSelectDrop;
let pokeTypeUrl = `https://pokeapi.co/api/v2/type/${pokeType}`


function getPokeType() {
  fetch(pokeTypeUrl)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.pokemon.length; i++) {
        let pokeContainer = document.getElementById('dark_select');
        let pokeNames = document.createElement('option');

        pokeNames.textContent = data.pokemon[i].pokemon.name;
        pokeNames.setAttribute("value", data.pokemon[i].pokemon.name);

        pokeContainer.append(pokeNames);
      }
    })
}
getPokeType();

function getPokemon() {
  pokeSelectDrop = pokeDropdown.value;
  let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeSelectDrop}`
  fetch(pokeUrl)
    .then(response => response.json())
    .then(function (data) {
      let pokeContainer = document.getElementById('pokeSelect');
      let pokeData = document.createElement('p')
      console.log(data.name);

      pokeData.textContent = data.name
      console.log(pokeData);
      pokeContainer.append(pokeData);
    })
}