let pokeContainer = document.getElementById('pokemon');

//TODO
// Loop over all Types in API
let pokeTypeUrl = `https://pokeapi.co/api/v2/type/1`

function getPokeType() {
  fetch(pokeTypeUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
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

    }
    return data.pokemon[i]
  .fetch(data.pokemon[i].pokemon.url)
    .then(response => response.json())
    .then(otherData => {
      console.log(otherData)
    }) 
  }) 
}
getPokeType();