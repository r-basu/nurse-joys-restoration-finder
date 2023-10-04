let pokemonTypeEl = document.getElementById(`icon`);
let userAppt = document.getElementById(`user-appt`);
let showAppt = document.getElementById(`show-appt`);
let clearAppt = document.getElementById(`clear-appt`);

pokemonTypeEl.addEventListener("click", function (event) {
  pokemonType = event.target.id;
  localStorage.pokemonType = pokemonType; // local storage where pokemon type is being stored.
  window.location.assign(
    "./main.html"
  );
});

if(localStorage.trainerName===undefined){
  document.querySelector(`.AptButton`).style.visibility = `hidden`;
}else{
  document.querySelector(`.AptButton`).style.visibility = `visible`;
}

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

showAppt.addEventListener("click", function(){
  userAppt.innerHTML = ``
  userAppt.innerHTML = `
  <p class="title">Booked Appointment</p>
  <p>Name: ${localStorage.trainerName}</p>
  <p class="is-capitalized">Pokemon: ${localStorage.pokemonName}</p>
  <p>Email: ${localStorage.trainerEmail}</p>
  <p>City: ${localStorage.trainerCity}</p>
  <p>Date: ${localStorage.dateSelected}</p>
  <p>Time: ${localStorage.timeSelected}</p>
  `
})

clearAppt.addEventListener("click", function () {
  localStorage.clear();
  userAppt.innerHTML = ``
})