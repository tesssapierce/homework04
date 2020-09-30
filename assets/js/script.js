//Declare variables
var start = document.getElementById("startButton");
var quizBody = document.body.querySelector(".quiz");
var counter = 60;
var displayCount = document.querySelector(".countdown");
var questionDisplay = document.querySelector(".question");
var ulTag = document.querySelector(".answers");
var idx = 0;
var button = document.querySelector(".button")
var score = 0;
var message = document.querySelector(".message")
var progress = document.querySelector(".score-tracker")
var displayResultsName = document.querySelector("#name")
var displayResultsScore = document.querySelector("#score")
var letter = ["A", "B", "C", "D"];

var quiz = [
  {
    question: "The # symbol specifies that the selector is...", 
    choices: ["Class", "Number", "Tag", "ID"], 
    answer: "ID"
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

//Start Timer and unhide quiz
function startQuiz(e){
  e.preventDefault();
  quizBody.style.display = "block"
  startCountdown();
  populateQuestion();
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

function populateQuestion(){
  questionDisplay.textContent = "Question: " + quiz[idx].question;
  populateChoices(idx);
}

//Choices populating
function populateChoices(idx){
  for (var i=0; i < quiz[idx].choices.length; i++){
    if(ulTag.childElementCount < quiz[idx].choices.length){
    var newButton = document.createElement("button");
    ulTag.appendChild(newButton);
    newButton.textContent = letter[i] + " " + quiz[idx].choices[i];
    newButton.setAttribute("class", "button" + [i]);
    newButton.setAttribute("data-answer", quiz[idx].choices[i]);
    } else {
    var existingButton = document.querySelector(".button" + [i]);
    existingButton.textContent = letter[i] + " " + quiz[idx].choices[i];
    existingButton.setAttribute("data-answer", quiz[idx].choices[i]);
    }
  }
}

//Checks the users answer
function checkAnswer(e){
  e.preventDefault();
  var userAnswer = e.target.getAttribute("data-answer");
  console.log(userAnswer);
  console.log(quiz[idx].answer)
  if(quiz[idx].answer == userAnswer){
    message.textContent = "Correct!";
    score++;
 } else {
    message.textContent = "Incorrect!";
    counter -= 5;
  }
  if(userAnswer){
    idx++;
    progress.textContent = "Current score: " + score;
    populateQuestion();
  }
}

function score(){
  displayResultsScore.textContent = score;
  displayResultsName.textContent = userName;
  //Create var = userName and set it to whatever the user puts in the form, form will be in HTML
}

//TODO: Create a high score page and save user score and initials to local storage

//TODO: Make it pretty

//Starts everything by clicking "Start Quiz"
start.addEventListener("click", startQuiz);

//Checks the answers when a user clicks an answer
ulTag.addEventListener("click", checkAnswer)


    //If we want to have an LI tag AND a button, we can use this:
    // var answer = document.createElement("li");
    // answer.textContent = quiz[idx].choices[i];
    // ulTag.appendChild(answer);