console.log("JS is linked");


let pokeContainer = document.getElementById('pokemon');

let pokeBerryUrl = `https://pokeapi.co/api/v2/berry`

var checkBoxPoison = document.getElementById(`Poison`)

var button = document.getElementById(`button`)

var text = document.getElementById(`text`)

//TODO
// Loop over all Types in API
let pokeTypeUrl = `https://pokeapi.co/api/v2/type/1`

function getPokeType() {

  fetch(pokeTypeUrl)
    .then(response => response.json())
    .then(function (data) {
      console.log(data.pokemon);
      let pokeNamesType = data.pokemon

      for (let i = 0; i < pokeNamesType.length; i++) {
        console.log(i);
        console.log(pokeNamesType[i].pokemon.name);
        console.log(pokeNamesType[i].pokemon.url);

        let pokeNames = document.createElement('h3');
        let pokeUrl = document.createElement('p');

        pokeNames.textContent = pokeNamesType[i].pokemon.name
        pokeUrl.textContent = pokeNamesType[i].pokemon.url

        pokeNames.setAttribute('class', "has-text-centered")

        pokeContainer.append(pokeNames);
        pokeContainer.append(pokeUrl);
        fetch(pokeNamesType[i].pokemon.url)
          .then(response => response.json())
          .then(otherData => {
            console.log(otherData)
          })
      }
    })


  // .fetch(data.pokemon[i].pokemon.url)
  //   .then(response => response.json())
  //   .then(otherData => {
  //     console.log(otherData)
  //   }) 
  // }) 
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