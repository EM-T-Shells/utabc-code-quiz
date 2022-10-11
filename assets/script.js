const readyStartBtn = document.getElementById('readyStartBtn');
const hallOfFameBtn = document.getElementById('hallOfFameBtn');
const questionText = document.getElementById("question-text");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const score = document.getElementById("scoreContainer");

let questionBank = [
  {
    question: "What does HTML stand for?",
      choiceA: "Correct",
      choiceB: "Wrong",
      choiceC: "Wrong",
      ChoiceD: "Wrong",
      correct: "A"
  },
  {
    question: "What does CSS stand for?",
      choiceA: "Wrong",
      choiceB: "Correct",
      choiceC: "Wrong",
      choiceD: "Wrong",
      correct: "B"
  },
  {
    question: "What does JS stand for?",
      choiceA: "Wrong",
      choiceB: "Wrong",
      choiceC: "Correct",
      choiceD: "Wrong",
      correct: "C"
  },
  {
    question: "What does JS stand for?",
      choiceA: "Wrong",
      choiceB: "Wrong",
      choiceC: "Wrong",
      choiceD: "Correct",
      correct: "D"
  },
  {
    question: "What does JS stand for?",
      choiceA: "Wrong",
      choiceB: "Wrong",
      choiceC: "Wrong",
      choiceD: "Correct",
      correct: "D"
  }
];

//declaring what is the last and first question
const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
const questionTime = 30; //30 seconds
const gaugeWidth = 150; //px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
score = 0;

//retrieve questions and choices
function nextQuestion() {
  let question = questionBank[currentQuestion];

  questionText.innerHTML = question.questionText;
  choiceA.innerHTML = question.choiceA;
  choiceB.innerHTML = question.choiceB;
  choiceC.innerHTML = question.choiceC;
  choiceD.innerHTML = question.choiceD;
}


readyStartBtn.addEventListener("click", startQuiz);

function startQuiz(){
  nextQuestion();
  progress();
  countDown();
  TIMER = setInterval(countDown, 1000);
}


//updating progress
function progress() {
  for(let questionIndex = 0; questionIndex <= lastQuestion; questionIndex++){
    progress.innerHTML += "<div class='prog' id="+ questionIndex +"></div>";
  }
}

function countDown(){
  if(count <= questionTime){
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++
  } else{
    count=0;
    answerIsWrong();
    }
  if (currentQuestion < lastQuestion){
    currentQuestion++;
    nextQuestion();
  } else {
      clearInterval(TIMER);
      updateScore();
    }
}

function checkAnswer(answer){
  if(answer == questions[currentQuestion].correct){
      // answer is correct
      score++;
      // change progress color to green
      answerIsCorrect();
  }else{
      // answer is wrong
      // change progress color to red
      answerIsWrong();
  }
  count = 0;
  if(currentQuestion < lastQuestion){
      currentQuestion++;
      nextQuestion();
  }else{
      // end the quiz and show the score
      clearInterval(TIMER);
      updateScore();
  }
}

// answer is correct
function answerIsCorrect(){
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function updateScore(){
  const scorePerCent = Math.round(100 * score/questions.length);
}