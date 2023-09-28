let pokeContainer = document.getElementById('pokemon');
let pokeBerryUrl = `https://pokeapi.co/api/v2/berry`

// var checkBoxPoison = document.getElementById(`Poison`)
// var button = document.getElementById(`button`)
// var text = document.getElementById(`text`)

function getPokeType() {
  let pokeTypeUrl = `https://pokeapi.co/api/v2/type/1`
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
  let pokeSelect = pokeDropdown.value;
  console.log(pokeSelect);
}
getPokemon();

// fetch(pokeBerryUrl)
// .then(response => response.json())
// .then(function (data) {

// checkBoxPoison.addEventListener ('click', function() {
//   if (checkBoxPoison.checked == true) {
//     localStorage.setItem("poison", "Nurse Joy recommends a " + data.results[0].name + " berry!")
//   } else {
//     return;
//   }
//   });
// });

// button.addEventListener ('click', function() {
//     var x = localStorage.getItem("poison")
//     text.textContent = x;
// });