var map = document.getElementById('map');
var timeSelected = document.querySelector(`#timeSelected`);
var dateSelected = document.querySelector(`#dateSelected`);
var submitBtn = document.querySelector(`#submitBtn`);
var customerCity;
var cityList = document.querySelector(`#dark_select`);
var customerName = document.querySelector(`#custName`);
var customerEmail = document.querySelector(`#custEmail`); 

//event when the user clicks submit
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.timeSelected = timeSelected.value;
  localStorage.dateSelected = dateSelected.value;
  localStorage.customerName = customerName.value;
  localStorage.customerEmail = customerEmail.value;
  
  var apptText = document.getElementById("appt")

  if (timeSelected.value.includes(":")&&dateSelected.value.includes("-")) {
    apptText.innerHTML = "Appointment Booked!"
  } else {
    apptText.innerHTML = "Please Select a Date and Time"
  }
  
})

map.innerHTML = `<iframe width='600' height='450' style='border:0' loading='lazy' allowfullscreen src='https://www.google.com/maps/embed/v1/search?q=q=vet%20clinic%20in%20${customerCity}&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4'></iframe>`


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
function cityDisplay(){
  fetch("https://countriesnow.space/api/v0.1/countries")
  .then(response => response.json())
  .then(function(result){
    result.data[35].cities
    for (let i = 0; i < result.data[35].cities.length; i++) {
   
      var cityName = document.createElement(`option`);

      cityName.textContent = result.data[35].cities[i];
      cityName.setAttribute("value",result.data[35].cities[i])
      
      // console.log(result.data[35].cities[i]);
      cityList.append(cityName);
      console.log(cityList.value);
      // localStorage.customerCity = cityList.textContent;
    }
  }).catch(error => console.log('error', error));

  // console.log(customerCity);

  cityList.addEventListener("change", function(event){
    console.log(cityList.value);
    customerCity = cityList.value;
    localStorage.customerCity = cityList.value;
    map.innerHTML = `<iframe width='600' height='450' style='border:0' loading='lazy' allowfullscreen src='https://www.google.com/maps/embed/v1/search?q=q=vet%20clinic%20in%20${customerCity}&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4'></iframe>`
  })
}

cityDisplay();