function getPokeType() {
  //TODO
  // pokeTypeUrl is generated from event listener click on Types images.
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
        pokeNames.setAttribute("value", i);

        pokeContainer.append(pokeNames);
      }
    })
}
getPokeType();