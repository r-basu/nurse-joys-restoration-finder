let map = document.getElementById('map');
let timeSelected = document.querySelector(`#timeSelected`);
let dateSelected = document.querySelector(`#dateSelected`);
let submitBtn = document.querySelector(`#submitBtn`);
let trainerCity;
let cityList = document.querySelector(`#dark_select`);
let trainerName = document.querySelector(`#trainerName`);
let trainerEmail = document.querySelector(`#trainerEmail`);
let userAppt = document.getElementById(`user-appt`);
let showAppt = document.getElementById(`show-appt`);
let goHome = document.getElementById(`go-home`);
let clearAppt = document.getElementById(`clear-appt`);

if (localStorage.pokemonName === undefined) {
  document.getElementById("trainerForm").style.display = "none";
  document.getElementById("map").style.display = "none";
  var errorText = document.createElement(`p`)
  errorText.innerHTML = "Please select a Pokemon to create a booking!"
  document.getElementById('errorTex').append(errorText)
} else {
  document.getElementById(`errorTex`).style.display = "none";
}

let locationEl = document.querySelector(`.location`)
let locationYes = document.querySelector(`.locationYes`);
let locationNo = document.querySelector(`.locationNo`);


var gmapUrl = `https://www.google.com/maps/embed/v1/search?q=vet%20clinic%20near%20me&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4`;

// hiding the city selector

cityList.style.visibility = `hidden`;
citySelect.style.visibility = `hidden`;


// Saved Bookings button visiblity, and button functions
function visibleApptBtn() {
  if (localStorage.trainerName === undefined) {
    showAppt.style.visibility = `hidden`;
  } else {
    showAppt.style.visibility = `visible`;
  }
}

visibleApptBtn();

goHome.addEventListener("click", function () {
  window.location.assign(
    "./index.html"
    )
})

clearAppt.addEventListener("click", function () {
  localStorage.clear();
  window.location.assign(
    "./index.html"
  )
})

showAppt.addEventListener("click", function () {
  userAppt.innerHTML = `
  <p class="title">Booked Appointment</p>
  <p class="is-capitalized">Pokemon: ${localStorage.pokemonName}</p>
  <p>Name: ${localStorage.trainerName}</p>
  <p>Email: ${localStorage.trainerEmail}</p>
  <p>City: ${localStorage.trainerCity}</p>
  <p>Date: ${localStorage.dateSelected}</p>
  <p>Time: ${localStorage.timeSelected}</p>
  `
})

// Saving input values as local storage keys for appointment information
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
  localStorage.trainerName = trainerName.value;
  localStorage.trainerEmail = trainerEmail.value;
  localStorage.timeSelected = timeSelected.value;
  localStorage.dateSelected = dateSelected.value;
  
  let apptText = document.getElementById("appt");

  if (timeSelected.value.includes(":") && dateSelected.value.includes("-") && localStorage.trainerName !==``) {
    apptText.innerHTML = `Your appointment has been booked on ${localStorage.dateSelected} at ${localStorage.timeSelected} at your selected clinic!`
    visibleApptBtn();
  } else {
    apptText.innerHTML = "Please input your name and preferred date, time"
  }

  
})

// initial display for the map
map.innerHTML = `
<div class="nes-container is-dark">
<iframe 
width='600' 
height='450' 
style='border:0' 
loading='lazy' 
allowfullscreen 
src=${gmapUrl}>
</iframe>
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
    cityList.addEventListener("change", function (event) {
  
      trainerCity = cityList.value;
      localStorage.trainerCity = cityList.value;
      gmapUrl = `https://www.google.com/maps/embed/v1/search?q=q=vet%20clinic%20in%20${trainerCity}&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4`;
      map.innerHTML = `
      <div class="nes-container is-dark">
      <iframe 
      width='600' 
      height='450' 
      style='border:0' 
      loading='lazy' 
      allowfullscreen src=${gmapUrl}>
      </div>
      `
    });
  }).catch(error => console.log('error', error));
}


function displayMap(event) {

  trainerCity = cityList.value;
  localStorage.trainerCity = cityList.value;
  map.innerHTML = `
  <div class="nes-container is-dark">
  <iframe 
  width='600' 
  height='450' 
  style='border:0' 
  loading='lazy' 
  allowfullscreen src=${gmapUrl}>
  </div>
  `
}


//asking the user if they want clinic near them or not

locationEl.addEventListener(`click`,function(event){
  console.log("locationYes.checked : " + locationYes.checked);
  if (locationYes.checked) {
    let citySelect = document.querySelector(`#citySelect`);
    gmapUrl = `https://www.google.com/maps/embed/v1/search?q=vet%20clinic%20near%20me&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4`;
    cityList.style.visibility = `hidden`;
    citySelect.style.visibility = `hidden`;
    displayMap();
  } else if(locationNo.checked) {
    gmapUrl = `https://www.google.com/maps/embed/v1/search?q=q=vet%20clinic%20in%20${trainerCity}&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4`;
    cityList.style.visibility = `visible`;
    citySelect.style.visibility = `visible`;
    displayMap();
  }
  
});

cityDisplay();