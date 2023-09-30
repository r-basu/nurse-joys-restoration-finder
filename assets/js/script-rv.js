let pokeBerryUrl = `https://pokeapi.co/api/v2/berry`

var checkBoxPoison = document.getElementById(`Poison`)

var checkBoxParalyz = document.getElementById(`Paralyzed`)

var checkBoxBurned = document.getElementById(`Burned`)

var checkBoxAsleep = document.getElementById(`Asleep`)

var checkBoxFrozen = document.getElementById(`Frozen`)

var checkBoxConfused = document.getElementById(`Confused`)

var button = document.getElementById(`button`)

var text = document.getElementById(`text`)



fetch(pokeBerryUrl)
  .then(response => response.json())
  .then(function (data) {

    var berries = [];
    berries[0] = data.results[2].name
    berries[1] = data.results[0].name
    berries[2] = data.results[3].name
    berries[3] = data.results[1].name
    berries[4] = data.results[3].name
    berries[5] = data.results[7].name

    var status = ["poison", "paralysis", "burned", "asleep", "frozen", "confused"]

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

    checkBoxParalyz.addEventListener('click', function () {
      if (checkBoxParalyz.checked == true) {
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

    if (checkBoxAsleep.checked !== true) {
      localStorage.removeItem(status[3])
    }
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

button.addEventListener('click', function () {
  var statuses = [];
  statuses[0] = localStorage.getItem("poison")
  statuses[1] = localStorage.getItem("paralysis")
  statuses[2] = localStorage.getItem("burned")
  statuses[3] = localStorage.getItem("asleep")
  statuses[4] = localStorage.getItem("frozen")
  statuses[5] = localStorage.getItem("confused")

  var newStatuses = [];

  for (let i = 0; i < statuses.length; i++) {
    if (statuses[i]) {
      newStatuses.push(statuses[i]);
    }
    text.textContent = "Nurse Joy recommends a " + newStatuses + "!";
  }


});


