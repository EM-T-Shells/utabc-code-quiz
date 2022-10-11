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

//readyStartBtn to quiz page
readyStartBtn.onclick = () =>{
  location.assign(url: "http://localhost)
}

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

