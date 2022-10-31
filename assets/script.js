//declare variables that will be attached to an element id
var currentDayElement = $('#time-display');
//var timeCurrent = moment().format();


//creating a function that will display the times: present, past and future in our page
//to do this a for-loop was created that will run until the conditions are satisfied
//let currentTime = parseInt(moment().format("HH"));
function displayBackground(){
  let currentTime = parseInt(moment().format("HH"));
  console.log(currentTime)
  for (let i=8; i<17; i++){
    if (currentTime === i){
      let currentElement = document.getElementById(`${i}`);
      currentElement.setAttribute(`class`,`${currentElement.classList.value} present`);
     


    } else if(i>currentTime){
      let currentElement = document.getElementById(`${i}`);
      currentElement.setAttribute(`class`,`${currentElement.classList.value} future`);
     

    } else{
      let currentElement = document.getElementById(`${i}`);
      currentElement.setAttribute(`class`,`${currentElement.classList.value} past`);

    }    
  }
};


// handle displaying the time using moment
//moment().format("MMM Do YY"); 
//moment().format('MMM DD, YYYY [at] hh:mm:ss a');
function currentDayEl() {
    var timeCurrent = moment().format("MMM Do YY"); 
    //console.log(currentDayElement)
    currentDayElement.text(timeCurrent)
    $('.saveBtn').on('click',function(){
      //store in localstorage, declaring values for row class(col-10 description) and row id values(hour)
      var value = $(this).siblings('.description').val()
      var time = $(this).parent().attr('id')
      localStorage.setItem(time, value)
  })
  }

  currentDayEl() 
  displayBackground()

//notification that appt was added
$('.usernotification').addClass('notification-center-hub');

//now we have to display all the values to be gotten from Local Storage using getItem instead of setItem for each
$('#8 .description').val(localStorage.getItem('8'))
$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))