// save reference to important DOM elements
var timeDisplay = $("#currentDay");
var saveBtnEl = $("#button-addon2");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
  console.log(timeDisplay.text);
}

// $("textarea").each(function (index) {
//   console.log(index + ":" + $(this).text());
// });
$(saveBtnEl).on("click", function (event) {
  for (i = 9; i < 18; i++) {
    timeEntry = "#" + [i];
    console.log(timeEntry);
    hourEvent = $(timeEntry).val();
    console.log(hourEvent);
    localStorage.setItem(timeEntry, hourEvent);
  }
});

// saveBtnEl.click(saveEntry());

//gets the time every second
setInterval(displayTime, 1000);
