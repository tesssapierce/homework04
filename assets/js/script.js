//Declare variables
var start = document.getElementById("startButton");
var quizBody = document.body.querySelector(".quiz");
var counter = 60;
var displayCount = document.querySelector(".countdown");
var questionDisplay = document.querySelector(".question");
var ulTagAnswers = document.querySelector(".answers");
var idx = 0;
var button = document.querySelector(".button")
var score = 0;
var message = document.querySelector(".message")
var progress = document.querySelector(".score-tracker")
var finalScore = document.querySelector(".score-final")
var enterName = document.querySelector("#data-name-entry")
var displayResultsName = document.querySelector("#name")
var displayResultsScore = document.querySelector("#score")
var letter = ["A", "B", "C", "D"];
var submitButton = document.getElementById("submitButton")
var resultsBody = document.querySelector(".results")
var countdown;

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

var leaderBoard = [
  {
    name: "Tessa",
    score: 500
  }
]

var leaderBoardStorage = localStorage.getItem("leaderBoard");
if (leaderBoardStorage !== null){
  leaderBoard = JSON.parse(leaderBoardStorage);
}

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
      endQuiz();
    }
  }, 1000)
}

//Populates the questions
function populateQuestion(){
  if(idx<quiz.length) {
    questionDisplay.textContent = "Question: " + quiz[idx].question;
    populateChoices(idx);
  } else {
    endQuiz();
  }
}

//Populates the choices
function populateChoices(idx){
  for (var i=0; i < quiz[idx].choices.length; i++){
    if(ulTagAnswers.childElementCount < quiz[idx].choices.length){
    var newButton = document.createElement("button");
    ulTagAnswers.appendChild(newButton);
    newButton.textContent = letter[i] + " " + quiz[idx].choices[i];
    newButton.setAttribute("class", "button" + [i]);
    newButton.setAttribute("id", "choice-button")
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

//Ends the quiz and moves to the results page
function endQuiz(){
  finalScore.textContent = score;
  quizBody.style.display = "none";
  resultsBody.style.display = "block";
  createLeaderBoard();
}

//Populates current leaderboard
function createLeaderBoard(){
  displayResultsName.innerHTML = "";
  displayResultsScore.innerHTML = "";
  for (i=0; i<leaderBoard.length; i++){
    var newLeaderName = document.createElement("li");
    displayResultsName.appendChild(newLeaderName);
    newLeaderName.textContent = leaderBoard[i].name;

    var newLeaderScore = document.createElement("li");
    displayResultsScore.appendChild(newLeaderScore);
    newLeaderScore.textContent = leaderBoard[i].score;    
  }
}

//Submits a score
function submitScore(e){
  e.preventDefault();
  var name = enterName.value.trim();
  var newLeaderEntry = {name, score}
  if(name.length){
    leaderBoard.push(newLeaderEntry);
    saveToLocalStorage(newLeaderEntry);
  } else {
    alert("Please enter a name")
  }
  enterName.value = "";
  createLeaderBoard();
}

function saveToLocalStorage(){
  localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
}

//Starts everything by clicking "Start Quiz"
start.addEventListener("click", startQuiz);

//Checks the answers when a user clicks an answer
ulTagAnswers.addEventListener("click", checkAnswer)

submitButton.addEventListener("click", submitScore);