var timeSelected = document.querySelector(`#timeSelected`);
var dateSelected = document.querySelector(`#dateSelected`);
var submitBtn = document.querySelector(`#submitBtn`);


submitBtn.addEventListener("click", function(event){
    console.log(timeSelected.value);
    console.log(dateSelected.value);
    localStorage.timeSelected = timeSelected.value;
    localStorage.dateSelected = dateSelected.value;
});