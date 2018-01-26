/*
//////////////////////////////////////////////////////////////////////////////////////////
  Name: Trevor Malloy
  Date: 1/19/18
  Description:
    This javascript file is handling equation calculations,
    Show and Hide of each questions answers, answer validation in the form of badges,
    and making each function fire when a button is clicked.
/////////////////////////////////////////////////////////////////////////////////////////
*/


/*
///////////////////////////////////////////////////////
  Setting each questions calculations to a variable.
///////////////////////////////////////////////////////
*/
var additionAnswer = 25+3;
var subtractionAnswer = 100-50;
var multiplicationAnswer = 10*4;
var divisionAnswer = 6/3;
var modulusAnswer = 14 % 3;

/*
/////////////////////////////////////////////////////
  Set text for each problems help text,
  change the display for each text,
  and set the button to display or hide the text
/////////////////////////////////////////////////////
*/
function showAnswers() {
  //Setting the button to a variable
  var showButton = document.getElementById('answerShow');

  //Addition Answer
  var addHelp = document.getElementById('additionHelp');
  var displaySetting = addHelp.style.display;

  addHelp.innerHTML = additionAnswer;

  if (displaySetting == 'block') {
  addHelp.style.display = 'none';
  showButton.innerHTML = 'Show';
  }
  else {
  addHelp.style.display = 'block';
  showButton.innerHTML = 'Hide';
  }

  //Subtraction Answer
  var subHelp = document.getElementById('subtractionHelp');
  var displaySetting = subHelp.style.display;

  subHelp.innerHTML = subtractionAnswer;

  if (displaySetting == 'block') {
  subHelp.style.display = 'none';
  showButton.innerHTML = 'Show';
  }
  else {
  subHelp.style.display = 'block';
  showButton.innerHTML = 'Hide';
  }

  //Multiplication Answer
  var mulHelp = document.getElementById('multiplicationHelp');
  var displaySetting = mulHelp.style.display;

  mulHelp.innerHTML = multiplicationAnswer;

  if (displaySetting == 'block') {
  mulHelp.style.display = 'none';
  showButton.innerHTML = 'Show';
  }
  else {
  mulHelp.style.display = 'block';
  showButton.innerHTML = 'Hide';
  }

  //Division Answer
  var divHelp = document.getElementById('divisionHelp');
  var displaySetting = divHelp.style.display;

  divHelp.innerHTML = divisionAnswer;

  if (displaySetting == 'block') {
  divHelp.style.display = 'none';
  showButton.innerHTML = 'Show';
  }
  else {
  divHelp.style.display = 'block';
  showButton.innerHTML = 'Hide';
  }

  //Modulus Answer
  var modHelp = document.getElementById('modulusHelp');
  var displaySetting = modHelp.style.display;

  modHelp.innerHTML = modulusAnswer;

  if (displaySetting == 'block') {
  modHelp.style.display = 'none';
  showButton.innerHTML = 'Show';
  }
  else {
  modHelp.style.display = 'block';
  showButton.innerHTML = 'Hide';
  }

/*
/////////////////////////////////////////////////////////////////////////
  First iteration of the show answerShow
  Just showed the answers with no hide functionality
/////////////////////////////////////////////////////////////////////////
  document.getElementById('additionHelp').innerHTML = additionAnswer;
  document.getElementById('subtractionHelp').innerHTML = subtractionAnswer;
  document.getElementById('multiplicationHelp').innerHTML = multiplicationAnswer;
  document.getElementById('divisionHelp').innerHTML = divisionAnswer;
  document.getElementById('modulusHelp').innerHTML = modulusAnswer;
*/

}//End showAnswers


/*
//////////////////////////////////////////////////////////////////////////
  Changing the alert badges className,
  id, and innerHTML to let the user know if their answer was correct or wroung.
//////////////////////////////////////////////////////////////////////////
*/

/*
////////////////////////////
  If an answer is correct
////////////////////////////
*/
function correctAlert() {
  var alert = document.getElementById('alert');
  alert.className += " badge-success";
  alert.id = "correctAnswer";
  alert.innerHTML = "Correct";
}

/*
///////////////////////////
  If an answer is wroung
///////////////////////////
*/
function wrongAlert() {
  var alert = document.getElementById('alert');
  alert.className += " badge-danger";
  alert.id = "wrongAnswer";
  alert.innerHTML = "Wrong";
}

/*
///////////////////////////////////////////////////////////
  Checking the users input with each calculation
  and showing the badge associated with their answer.
///////////////////////////////////////////////////////////
*/
function correctAnswer() {
  //Check if the Addition answer is correct or wrong
  var correct = document.getElementById('addition').value;
    if (correct == additionAnswer){
      correctAlert();
    } else {
      wrongAlert();
    }
  //Check if Subtraction answer is correct or wrong
  var correct2 = document.getElementById('subtraction').value;
    if (correct2 == subtractionAnswer){
      correctAlert();
    } else {
      wrongAlert();
    }
  //Check if Multiplication answer is correct or wrong
  var correct3 = document.getElementById('multiplication').value;
    if (correct3 == multiplicationAnswer){
      correctAlert();
    } else {
      wrongAlert();
    }
  //Check if Division answer is correct or wrong
  var correct4 = document.getElementById('division').value;
    if (correct4 == divisionAnswer){
      correctAlert();
    } else {
      wrongAlert();
    }
  //Check if Modulus answer is correct or wrong
  var correct5 = document.getElementById('modulus').value;
    if (correct5 == modulusAnswer){
      correctAlert();
    } else {
      wrongAlert();
    }
}

/*
//////////////////////////////////////////////
  Setting the events for each button click.
//////////////////////////////////////////////
*/
window.onload = function() {
  /* Change help text on click */
  document.getElementById('answerShow').onclick = showAnswers;
  /* Checks the users input and shows the appropriate badge */
  document.getElementById('submit').onclick = correctAnswer;
}
