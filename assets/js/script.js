

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
var idx = 0;
var button = document.querySelectorAll(".button")

// var idx = 0;
var letter = ["A", "B", "C", "D"];
console.log(letter[0])

var quiz = [
  {
    question: "The # symbol specifies that the selector is...", 
    choices: ["Class", "Number", "Tag", "ID"], 
    answer: "."
  },{
    question: "Where is the correct place to put the title tag in an HTML document?", 
    choices: ["Above the HTML tag", "In the body of the document", "In the head of the document", "It doesn't matter"], 
    answer: "In the head of the document"
  },{
    question: "Items in a ____ list are preceded by numbers", 
    choices: ["unordered", "ordered", "bulleted", "grocery"], 
    answer: "ordered"
  },{
    question: "What does CSS stand for?", 
    choices: ["Custom Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"], 
    answer: "Cascading Style Sheets"
  }
];

  console.log(quiz.length)

//Start Timer and unhide quiz
function startQuiz(e){
  e.preventDefault();
  quizBody.style.display = "block"
  startCountdown();
  populateQA(idx);
  start.style.display = "none";
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
function populateQA(idx){
  for (var i=0; i<quiz.length; i++){
    for (var i=0; i < quiz[idx].choices.length; i++){
    
    //Question display
    questionDisplay.textContent = "Question: " + quiz[idx].question;

    //Answer display
    var button = document.createElement("button");
    button.textContent = letter[i]
    ulTag.appendChild(button);
    button.setAttribute("class", "button");
    var answer = document.createElement("li");
    answer.textContent = quiz[idx].choices[i];
    ulTag.appendChild(answer);
    }
  }
  button.addEventListener("click", logIt);
}

function logIt(){
  console.log("click");
}

//Starts everything by clicking "Start Quiz"
start.addEventListener("click", startQuiz);
