// save reference to important DOM elements
var timeDisplay = $("#currentDay");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
  console.log(timeDisplay.text);
}

//gets the time every second
setInterval(displayTime, 1000);
