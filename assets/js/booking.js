let map = document.getElementById('map');
let timeSelected = document.querySelector(`#timeSelected`);
let dateSelected = document.querySelector(`#dateSelected`);
let submitBtn = document.querySelector(`#submitBtn`);
let trainerCity;
let cityList = document.querySelector(`#dark_select`);
let trainerName = document.querySelector(`#trainerName`);
let trainerEmail = document.querySelector(`#trainerEmail`);


submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.trainerName = trainerName.value;
  localStorage.trainerEmail = trainerEmail.value;
  localStorage.timeSelected = timeSelected.value;
  localStorage.dateSelected = dateSelected.value;

  let apptText = document.getElementById("appt")

  if (timeSelected.value.includes(":") && dateSelected.value.includes("-")) {
    apptText.innerHTML = `Your appointment has been Booked on ${localStorage.dateSelected} at ${localStorage.timeSelected}!`
  } else {
    apptText.innerHTML = "Please Select a Date and Time"
  }
})

map.innerHTML = `
<div class="nes-container is-dark">
<iframe width='600' height='450' style='border:0' loading='lazy' allowfullscreen src='https://www.google.com/maps/embed/v1/search?q=q=vet%20clinic%20in%20${trainerCity}&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4'></iframe>
</div>
`


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


//code to push list of cities in canada to the drop down.
function cityDisplay() {
  fetch("https://countriesnow.space/api/v0.1/countries")
    .then(response => response.json())
    .then(function (result) {
      result.data[35].cities
      for (let i = 0; i < result.data[35].cities.length; i++) {

        let cityName = document.createElement(`option`);

        cityName.textContent = result.data[35].cities[i];
        cityName.setAttribute("value", result.data[35].cities[i])
        cityList.append(cityName);
      }
    }).catch(error => console.log('error', error));


  cityList.addEventListener("change", function (event) {
    console.log(cityList.value);
    trainerCity = cityList.value;
    localStorage.trainerCity = cityList.value;
    map.innerHTML = `
    <div class="nes-container is-dark">
    <iframe width='600' height='450' style='border:0' loading='lazy' allowfullscreen src='https://www.google.com/maps/embed/v1/search?q=q=vet%20clinic%20in%20${trainerCity}&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4'></iframe>
    </div>
    `
  })
}


cityDisplay();