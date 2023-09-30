function getPokeType() {
  let pokeType = localStorage.pokemonType;
  let pokeTypeUrl = `https://pokeapi.co/api/v2/type/${pokeType}`
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
  let pokeDropdown = document.getElementById("dark_select");
  let pokeSelectDrop = pokeDropdown.value;
  let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeSelectDrop}`
  fetch(pokeUrl)
    .then(response => response.json())
    .then(function (data) {
      let pokeContainer = document.getElementById('pokeSelect');
      let pokeData = document.createElement('p')

      pokeData.textContent = data.name
      pokeContainer.append(pokeData);
    })
}