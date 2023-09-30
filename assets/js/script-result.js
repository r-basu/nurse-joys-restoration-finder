let map;
let service;
let infowindow;

var custLocation;
var custAddress = document.querySelector(`#custAddress`);

function getCustomerAddress(){
    var autoFill =  new google.maps.places.Autocomplete(custAddress,{
        types: ['geocode']
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autoFill.getPlace();
    });

}