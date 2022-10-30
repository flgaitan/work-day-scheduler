//declare variables that will be attached to an element id
var timeDisplayEl = $('#time-display');
//var =
//var =
//var =
//var =
//var =



// handle displaying the time
function displayTime() {
    var timeCurrent = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(timeCurrent);
  }