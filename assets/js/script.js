let pokeContainer = document.getElementById('pokemon');
let pokeBerryUrl = `https://pokeapi.co/api/v2/berry`

var pokemonType = localStorage.pokemonType;

function getPokeType() {
  let pokeTypeUrl = `https://pokeapi.co/api/v2/type/${pokemonType}`
  fetch(pokeTypeUrl)
    .then(response => response.json())
    .then(function (data) {
      console.log(data.pokemon);
      let pokeNamesType = data.pokemon
      for (let i = 0; i < pokeNamesType.length; i++) {
        let pokeContainer = document.getElementById('dark_select');
        console.log(i);
        console.log(pokeNamesType[i].pokemon.name);

        let pokeNames = document.createElement('option');

        pokeNames.textContent = pokeNamesType[i].pokemon.name;
        pokeNames.setAttribute("value", pokeNamesType[i].pokemon.name);

        pokeContainer.append(pokeNames);
      }
    })
}
getPokeType();

function getPokemon() {
  let pokeDropdown = document.getElementById("dark_select");
  let pokeSelectDrop = pokeDropdown.value;
  let pokeUrl = `https://pokeapi.co/api/v2/type/${pokeSelectDrop}`
  console.log(pokeUrl)
}
getPokemon();
