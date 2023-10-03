let pokeBerryUrl = `https://pokeapi.co/api/v2/berry`
let button = document.getElementById(`button`)
let pokeIcon = document.getElementById(`iconPoke`)

// Fetching user selected pokemon type from localstorage
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

  // Switch case based on user selected pokemon, display selected type picture for user understanding
  let typeIcon = document.createElement(`img`)
  switch (pokeType) {
    case "dark":
      typeIcon.setAttribute(`src`, `assets/icons/Dark.png`)
      pokeIcon.append(typeIcon)
      break;

    case "bug":
      typeIcon.setAttribute(`src`, `assets/icons/Bug.png`)
      pokeIcon.append(typeIcon)
      break;

    case "dragon":
      typeIcon.setAttribute(`src`, `assets/icons/Dragon.png`)
      pokeIcon.append(typeIcon)
      break;

    case "electric":
      typeIcon.setAttribute(`src`, `assets/icons/Electric.png`)
      pokeIcon.append(typeIcon)
      break;

    case "fairy":
      typeIcon.setAttribute(`src`, `assets/icons/Fairy.png`)
      pokeIcon.append(typeIcon)
      break;

    case "fighting":
      typeIcon.setAttribute(`src`, `assets/icons/Fighting.png`)
      pokeIcon.append(typeIcon)
      break;

    case "fire":
      typeIcon.setAttribute(`src`, `assets/icons/Fire.png`)
      pokeIcon.append(typeIcon)
      break;

    case "flying":
      typeIcon.setAttribute(`src`, `assets/icons/Flying.png`)
      pokeIcon.append(typeIcon)
      break;

    case "ghost":
      typeIcon.setAttribute(`src`, `assets/icons/Ghost.png`)
      pokeIcon.append(typeIcon)
      break;

    case "grass":
      typeIcon.setAttribute(`src`, `assets/icons/Grass.png`)
      pokeIcon.append(typeIcon)
      break;

    case "ground":
      typeIcon.setAttribute(`src`, `assets/icons/Ground.png`)
      pokeIcon.append(typeIcon)
      break;

    case "ice":
      typeIcon.setAttribute(`src`, `assets/icons/Ice.png`)
      pokeIcon.append(typeIcon)
      break;

    case "normal":
      typeIcon.setAttribute(`src`, `assets/icons/Normal.png`)
      pokeIcon.append(typeIcon)
      break;

    case "poison":
      typeIcon.setAttribute(`src`, `assets/icons/Poison.png`)
      pokeIcon.append(typeIcon)
      break;

    case "psychic":
      typeIcon.setAttribute(`src`, `assets/icons/Psychic.png`)
      pokeIcon.append(typeIcon)
      break;

    case "rock":
      typeIcon.setAttribute(`src`, `assets/icons/Rock.png`)
      pokeIcon.append(typeIcon)
      break;

    case "steel":
      typeIcon.setAttribute(`src`, `assets/icons/Steel.png`)
      pokeIcon.append(typeIcon)
      break;

    case "water":
      typeIcon.setAttribute(`src`, `assets/icons/Water.png`)
      pokeIcon.append(typeIcon)
      break;

  }
}
getPokeType();

// Fetching berries API endpoint and associating with status conditions on checkbox event listeners, saved values localstorage
fetch(pokeBerryUrl)
  .then(response => response.json())
  .then(function (data) {
    let berries = [];
    berries[0] = data.results[2].name
    berries[1] = data.results[0].name
    berries[2] = data.results[3].name
    berries[3] = data.results[1].name
    berries[4] = data.results[3].name
    berries[5] = data.results[7].name

    let status = ["poison", "paralysis", "burned", "asleep", "frozen", "confused"]
    let checkBoxPoison = document.getElementById(`Poison`)
    let checkBoxParalyze = document.getElementById(`Paralyzed`)
    let checkBoxBurned = document.getElementById(`Burned`)
    let checkBoxAsleep = document.getElementById(`Asleep`)
    let checkBoxFrozen = document.getElementById(`Frozen`)
    let checkBoxConfused = document.getElementById(`Confused`)

    for (let i = 0; i < status.length; i++) {
      localStorage.removeItem(status[i]);
    }

    checkBoxPoison.addEventListener('click', function () {
      if (checkBoxPoison.checked == true) {
        localStorage.setItem(status[0], berries[0] + " berry for poison")
      } else {
        localStorage.removeItem(status[0])
      }
    });

    checkBoxParalyze.addEventListener('click', function () {
      if (checkBoxParalyze.checked == true) {
        localStorage.setItem(status[1], berries[1] + " berry for the paralysis")
      } else {
        localStorage.removeItem(status[1])
      }
    });

    checkBoxBurned.addEventListener('click', function () {
      if (checkBoxBurned.checked == true) {
        localStorage.setItem(status[2], berries[2] + " berry for the burn")
      } else {
        localStorage.removeItem(status[2])
      }
    });

    checkBoxAsleep.addEventListener('click', function () {
      if (checkBoxAsleep.checked == true) {
        localStorage.setItem(status[3], berries[3] + " berry to wake up")
      } else {
        localStorage.removeItem(status[3])
      }
    });

    checkBoxFrozen.addEventListener('click', function () {
      if (checkBoxFrozen.checked == true) {
        localStorage.setItem(status[4], berries[4] + " berry to unfreeze")
      } else {
        localStorage.removeItem(status[4])
      }
    });

    checkBoxConfused.addEventListener('click', function () {
      if (checkBoxConfused.checked == true) {
        localStorage.setItem(status[5], berries[5] + " berry to snap out of confusion")
      } else {
        localStorage.removeItem(status[5])
      }
    });
  });


// Fetching individual pokemon API endpoint based on user selection
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

      console.log(data)

      pokeDataName.textContent = data.name
      pokeDataName.setAttribute("class", "is-size-2")

      pokeDataHp.textContent = data.stats[0].stat.name + " " + data.stats[0].base_stat
      pokeDataHp.setAttribute("class", "is-uppercase");

      pokeDataSprite.setAttribute('src', data.sprites.front_default)
      pokeDataAttack.textContent = data.stats[1].stat.name + " " + data.stats[1].base_stat
      pokeDataDefense.textContent = data.stats[2].stat.name + " " + data.stats[2].base_stat
      pokeDataSpecialAttack.textContent = data.stats[3].stat.name + " " + data.stats[3].base_stat
      pokeDataSpecialDefense.textContent = data.stats[4].stat.name + " " + data.stats[4].base_stat
      pokeDataSpeed.textContent = data.stats[5].stat.name + " " + data.stats[5].base_stat

      pokeContainer.innerHTML = ""
      pokeContainer.append(pokeDataSprite);
      pokeContainer.append(pokeDataName);
      pokeContainer.append(pokeDataHp);
      pokeContainer.append(pokeDataAttack);
      pokeContainer.append(pokeDataDefense);
      pokeContainer.append(pokeDataSpecialAttack);
      pokeContainer.append(pokeDataSpecialDefense);
      pokeContainer.append(pokeDataSpeed);

      let nurseContainer = document.getElementById('nurseContainer2');
      localStorage.pokemonName = data.name
      nurseContainer.innerHTML = `
      <div class="nes-container is-dark">
      <p><span class="nes-text is-error">We recommend to take </span><span class="nes-text is-primary is-capitalized">${localStorage.pokemonName}</span><span class="nes-text is-error"> to the nearest clinic or hospital if you do not have the berries on hand!</span></p>
      </div>`
    })
}

// Button to return cure recomendation from localstorage status conditions and runs the individual pokemon fetch function
button.addEventListener('click', function () {
  let checkBoxPoison = document.getElementById(`Poison`)
  let checkBoxParalyze = document.getElementById(`Paralyzed`)
  let checkBoxBurned = document.getElementById(`Burned`)
  let checkBoxAsleep = document.getElementById(`Asleep`)
  let checkBoxFrozen = document.getElementById(`Frozen`)
  let checkBoxConfused = document.getElementById(`Confused`)

  if (checkBoxPoison.checked == true || checkBoxAsleep.checked == true || checkBoxBurned.checked == true || checkBoxConfused.checked == true || checkBoxParalyze.checked == true || checkBoxFrozen.checked == true) {
    let nurseContainer = document.getElementById(`nurseContainer`)

    getPokemon();

    let statuses = [];
    statuses[0] = localStorage.getItem("poison")
    statuses[1] = localStorage.getItem("paralysis")
    statuses[2] = localStorage.getItem("burned")
    statuses[3] = localStorage.getItem("asleep")
    statuses[4] = localStorage.getItem("frozen")
    statuses[5] = localStorage.getItem("confused")

    let newStatuses = [];

    for (let i = 0; i < statuses.length; i++) {
      if (statuses[i]) {
        newStatuses.push(statuses[i]);
      }
    }

    nurseContainer.innerHTML = `
    <div class="nes-container is-dark with-title">
    <p class="title">Nurse Joy's Recommendation</p>
    <p><span class="is-capitalized nes-text is-success">Nurse Joy recommends a ${newStatuses}!</span></p>
    </div>`;

  } else {
    nurseContainer.innerHTML = `
    <div class="nes-container is-dark with-title">
    <p class="title">Nurse Joy's Recommendation</p>
    <p><span class="nes-text is-error">Please select at least one status condition!</span></p>
    </div>`;
  }

  //New button created to take to booking page
  let button = document.getElementById('submit');
  button.innerHTML = `<button type="button" class="nes-btn is-primary">Book your appointment now!</button>`
  button.addEventListener("click", function (event) {
    window.location.assign(
      "./booking.html"
    );
  });

});

//Navbar
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
