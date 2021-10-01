// save reference to important DOM elements
var timeDisplay = $("#currentDay");
var saveBtnEl = $(".btn");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
  console.log(timeDisplay.text);
}

//save entries on button click
$(saveBtnEl).on("click", function (event) {
  for (i = 9; i < 18; i++) {
    timeEntry = "#" + [i];
    console.log(timeEntry);
    hourEvent = $(timeEntry).val();
    console.log(hourEvent);
    localStorage.setItem(timeEntry, hourEvent);
  }
});
//iterates through the keys in the local storage and returns their values
function loadSaved() {
  for (i = 9; i < 18; i++) {
    timeEntry = "#" + [i];
    console.log(timeEntry);
    console.log(localStorage.getItem(timeEntry));
    $(timeEntry).val(localStorage.getItem(timeEntry));
  }
}
//for loop with if/else to set colors on past, present, and future time blocks
function colorBlock() {
  for (i = 9; i < 18; i++) {
    timeEntry = "#" + [i];

    if (i < moment().format("H")) {
      $(timeEntry).addClass("past");
      $(timeEntry).removeClass("future present");
    } else if (i == moment().format("H")) {
      $(timeEntry).addClass("present");
      $(timeEntry).removeClass("future past");
    } else {
      $(timeEntry).addClass("future");
      $(timeEntry).removeClass("present past");
    }
  }
}
//checks what color time blocks should be on page load
$(document).ready(colorBlock);
//checks for saved events on page load
$(document).ready(loadSaved);
//gets the time every second
setInterval(displayTime, 1000);
