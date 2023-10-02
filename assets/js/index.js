let pokemonTypeEl = document.querySelector(`.tAlign`);
let pokemonType;


pokemonTypeEl.addEventListener("click", function (event) {
  pokemonType = event.target.id;
  localStorage.pokemonType = pokemonType; // local storage where pokemon type is being stored.
  window.location.assign(
    "./main.html"
  );
});