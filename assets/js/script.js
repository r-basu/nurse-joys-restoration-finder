//TODO
// Loop over all Types in API

let pokeTypeUrl = `https://pokeapi.co/api/v2/type/1`


function pokeTypeRetrieve() {
  fetch(pokeTypeUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    console.log(data.pokemon);
    let pokeNamesType = data.pokemon
    for (let i = 0; i < pokeNamesType.length; i++) {
      console.log(i);
      let pokeNames = pokeNamesType[i].pokemon.name;
      let pokeUrls = pokeNamesType[i].pokemon.url;
      console.log(pokeNames);
      console.log(pokeUrls);

    }
  }) 
}

pokeTypeRetrieve();