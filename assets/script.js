//  question set
 const questions = [
  {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
      answer: "d. <script>"
  },
  {
      question: "String values must be enclosed within _____ when being assigned to variables.",
      choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
      answer: "c. quotes"
  },
  {
      question: "Arrays in JavaScript can be used to store _____.",
      choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
      answer: "b. other arrays"
  },
  {
      question: "Commonly used data types DO NOT include:",
      choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
      answer: "c. alerts"
  },
  {
      question: "How do you create a function in JavaScript",
      choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
      answer: "b. function myFunction()"
  },
];

// grab references to elements
var quizPage = document.getElementById("quizPage");
var startQuizBtn = document.getElementById("start-quiz-button");
var hofBtn = document.getElementById("hof-button");
var homeBtn = document.getElementById("homeButton");
var homePage = document.getElementById("home");

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp")

var quizChoices = document.getElementById("quizChoices");
var questionText = document.getElementById("questionText");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var hofPage = document.getElementById("hofPage");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var hofList = document.getElementById("hofList");

//function specific variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


var totalTime = 151;
function newQuiz() {
  questionIndex = 0;
  totalTime = 150;
  timeLeft.textContent = totalTime;
  initialInput.textContent = "";
//display the quiz page
  homePage.style.display = "none";
  quizPage.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";

  var startTimer = setInterval(function() {
      totalTime--;
      timeLeft.textContent = totalTime;
      if(totalTime <= 0) {
          clearInterval(startTimer);
          if (questionIndex < questions.length - 1) {
              gameOver();
          }
      }
  },1000);

  showQuiz();
};

//quiz page functions
function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionText.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

//after user input will display wrong or right and will tie into total score
function checkAnswer(answer) {
 var lineBreak = document.getElementById("lineBreak");
 //shows the wrong or right response
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";
  if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
      correctAns++;
      answerCheck.textContent = "Correct!";
  } else {
      // wrong answer, deduct 20 seconds from timer
      totalTime -= 20;
      timeLeft.textContent = totalTime;
      answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
  }
  questionIndex++;
  //next question
  if (questionIndex < questions.length) {
      nextQuestion();
  } else {
      // no more questions or times up... below
      gameOver();
  }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }

// when all questions are answered or timer reaches 0, game over
function gameOver() {
  summary.style.display = "block";
  quizChoices.style.display = "none";
  quizPage.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";

  // show final score
  finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
  event.preventDefault();

  // stop function is initial is blank
  if (initialInput.value === "") {
      alert("Please enter your initials!");
      return;
  }

  quizPage.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  hofPage.style.display = "block";

  // store scores into local storage
  var savedHighScores = localStorage.getItem("high scores");
  var scoresArray;

  if (savedHighScores === null) {
      scoresArray = [];
  } else {
      scoresArray = JSON.parse(savedHighScores)
  }

  var userScore = {
      initials: initialInput.value,
      score: finalScore.textContent
  };

  scoresArray.push(userScore);

  //attaches new scores consecutively
  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);

  // show current highscores
  showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

  quizPage.style.display = "none";
  timer.style.display = "none";
  quizChoices.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  hofPage.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");

  // check if there is any in local storage
  if (savedHighScores === null) {
      return;
  }

  var storedHighScores = JSON.parse(savedHighScores);

  for (i=0; i < storedHighScores.length; i++) {
      var newHighScore = document.createElement("p");
      newHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
      hofList.appendChild(newHighScore);
  }
}

//button event listeners

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){
  storeHighScores(event);
});

hofBtn.addEventListener("click", function() {
  homePage.style.display = "none";
  hofPage.style.display = "block";
  quizPage.style.display = "none";
});

homeBtn.addEventListener("click", function() {
  homePage.style.display = "block";
  hofPage.style.display = "none";
  quizPage.style.display = "none";
});

goBackBtn.addEventListener("click", function() {
  homePage.style.display = "block";
  hofPage.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
  window.localStorage.removeItem("high scores");
  hofList.innerHTML = "High Scores Cleared!";
  hofList.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});