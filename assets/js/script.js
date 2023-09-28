let pokeContainer = document.getElementById('pokemon');
let pokeBerryUrl = `https://pokeapi.co/api/v2/berry`

var checkBoxPoison = document.getElementById(`Poison`)
var button = document.getElementById(`button`)
var text = document.getElementById(`text`)
var pokemonType = localStorage.pokemonType;

// console.log("pokeTYpe : " + poketype);

//TODO
// Loop over all Types in API
let pokeTypeUrl = `https://pokeapi.co/api/v2/type/${pokemonType}`

function getPokeType() {
  //TODO
  // pokeTypeUrl is generated from event listener click on Types images.
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
        pokeNames.setAttribute("value", i);

        pokeContainer.append(pokeNames);
      }
    })
}
getPokeType();

fetch(pokeBerryUrl)
.then(response => response.json())
.then(function (data) {

checkBoxPoison.addEventListener ('click', function() {
  if (checkBoxPoison.checked == true) {
    localStorage.setItem("poison", "Nurse Joy recommends a " + data.results[0].name + " berry!")
  } else {
    return;
  }
  });
});

button.addEventListener ('click', function() {
    var x = localStorage.getItem("poison")
    text.textContent = x;
});