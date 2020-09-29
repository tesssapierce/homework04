

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
var start = document.getElementById("startButton");
var quizBody = document.body.querySelector(".hide");
var counter = 60;
var displayCount = document.querySelector(".countdown");
var questionDisplay = document.querySelector(".question");
var ulTag = document.querySelector(".answers");

var quiz = [
  {question: "This is the first question", choices: [
    "this is the first answer", "this is the second answer", "this is the third answer", "this is the fourth answer"], answer: "this is the correct answer"},
  {question: "This is the second question", choices: [
    "this is the first answer", "this is the second answer", "this is the third answer", "this is the fourth answer"], answer: "this is the correct answer"}
  ]

//Start Timer and unhide quiz
function startQuiz(e){
  e.preventDefault();
  quizBody.style.display = "block"
  startCountdown();
  populateQA();
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

//Questions and Answers populating
function populateQA(){
  questionDisplay.textContent = "Question: " + quiz[0].question;
  var answer1 = document.createElement("li");
  answer1.textContent = quiz[0].choices[0]
  ulTag.appendChild(answer1)

  
}


start.addEventListener("click", startQuiz);