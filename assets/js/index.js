var pokemonTypeEl = document.querySelector(`.tAlign`);
var randomClick = document.querySelector(`.randomClick`);
var pokemonType;

randomClick.addEventListener("click", function (event) {
  window.location.assign(
    "./result.html"
  );
})
pokemonTypeEl.addEventListener("click", function (event) {
  pokemonType = event.target.id;
  localStorage.pokemonType = pokemonType; // local storage where pokemon type is being stored.
  window.location.assign(
    "./main.html"
  );
});