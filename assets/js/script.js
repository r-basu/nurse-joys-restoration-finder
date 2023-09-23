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
    for (let i = 0; i < data.pokemon.length; i++) {
      console.log(data.pokemon[i].pokemon.name);
      console.log(data.pokemon[i].pokemon.url);
    }
  }) 
}

pokeTypeRetrieve();