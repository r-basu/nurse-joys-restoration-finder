var map = document.getElementById('map');
var timeSelected = document.querySelector(`#timeSelected`);
var dateSelected = document.querySelector(`#dateSelected`);
var submitBtn = document.querySelector(`#submitBtn`);

//Vinit's code

var raw = "{\n    \"country\": \"nigeria\"\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://countriesnow.space/api/v0.1/countries/cities", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//

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

submitBtn.addEventListener("click", function(event){
    console.log(timeSelected.value);
    console.log(dateSelected.value);
    localStorage.timeSelected = timeSelected.value;
    localStorage.dateSelected = dateSelected.value;
console.log(timeSelected);
})

map.innerHTML = `<iframe width='600' height='450' style='border:0' loading='lazy' allowfullscreen src='https://www.google.com/maps/embed/v1/search?q=Vet%20clinic%20near%20me&key=AIzaSyBnTYBBIATBd3K783xC4pBTBeUl37I_kX4'></iframe>`

