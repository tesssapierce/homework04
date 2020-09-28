

// User is given a landing page
    //User clicks "Start Quiz"
// User is prompted with the first question
// Timer starts
    // User Answers correctly
      //Next Question
    //User answers incorrectly
      //10 seconds off, next question

// Timer runs out OR question are answered, display results
// User can enter initials to save score
// Restart option

//Declare variables
var start = document.getElementById("start");
var quizBody = document.body.querySelector(".modal");
var counter = 60;
var displayCount = document.querySelector(".countdown");

//Start Timer and unhide quiz
function startQuiz(e){
  e.preventDefault();
  quizBody.style.display = "block";
  startCountdown();
}

//Timer
function startCountdown(){
  var countdown = setInterval(function(){
    counter--;

    //Display text on webpage
    displayCount.textContent = counter + " seconds left"

    if (counter === 0) {
      clearInterval(countdown);
    }
  }, 1000)

}

start.addEventListener("click", startQuiz);