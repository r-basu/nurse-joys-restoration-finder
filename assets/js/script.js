let button1 = document.getElementById(`button`)

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

      let pokeDataSprite = document.createElement('img')
      let pokeDataName = document.createElement('p')
      let pokeDataHp = document.createElement('p')
      let pokeDataAttack = document.createElement('p')
      let pokeDataDefense = document.createElement('p')
      let pokeDataSpecialAttack = document.createElement('p')
      let pokeDataSpecialDefense = document.createElement('p')
      let pokeDataSpeed = document.createElement('p')
      let pokeFirstGame = document.createElement('p')

      console.log(data)

      pokeDataSprite.setAttribute('src', data.sprites.front_default)
      // pokeDataSprite.setAttribute('class', 'is-flex is-justify-content-center')

      pokeDataName.textContent = data.name
      pokeDataName.setAttribute("class", "is-size-2 has-text-centered is-capitalized")

      pokeDataHp.textContent = data.stats[0].stat.name + " " + data.stats[0].base_stat
      pokeDataHp.setAttribute("class", "has-text-centered is-uppercase");

      pokeDataAttack.textContent = data.stats[1].stat.name + " " + data.stats[1].base_stat
      pokeDataAttack.setAttribute("class", "has-text-centered is-capitalized");

      pokeDataDefense.textContent = data.stats[2].stat.name + " " + data.stats[2].base_stat
      pokeDataDefense.setAttribute("class", "has-text-centered is-capitalized");

      pokeDataSpecialAttack.textContent = data.stats[3].stat.name + " " + data.stats[3].base_stat
      pokeDataSpecialAttack.setAttribute("class", "has-text-centered is-capitalized");

      pokeDataSpecialDefense.textContent = data.stats[4].stat.name + " " + data.stats[4].base_stat
      pokeDataSpecialDefense.setAttribute("class", "has-text-centered is-capitalized");

      pokeDataSpeed.textContent = data.stats[5].stat.name + " " + data.stats[5].base_stat
      pokeDataSpeed.setAttribute('class', 'has-text-centered is-capitalized');

      pokeFirstGame.textContent = "First Pokemon game appearance: " + data.game_indices[0].version.name
      pokeFirstGame.setAttribute("class", "has-text-centered is-capitalized");



      pokeContainer.append(pokeDataSprite);
      pokeContainer.append(pokeDataName);
      pokeContainer.append(pokeFirstGame);
      pokeContainer.append(pokeDataHp);
      pokeContainer.append(pokeDataAttack);
      pokeContainer.append(pokeDataDefense);
      pokeContainer.append(pokeDataSpecialAttack);
      pokeContainer.append(pokeDataSpecialDefense);
      pokeContainer.append(pokeDataSpeed);
    })
}

button1.addEventListener('click', function () {
    getPokemon();
});