// save reference to important DOM elements
var timeDisplay = $("#currentDay");
var saveBtnEl = $("#button-addon2");

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
//
function colorBlock() {
  for (i = 9; i < 18; i++) {
    timeEntry = "#" + [i];

    if (i < moment().format("H")) {
      // console.log(moment().add(7, h).format("H"));
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

$(document).ready(colorBlock);
//gets the time every second
setInterval(displayTime, 1000);
