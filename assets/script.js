const readyStartBtn = document.getElementById('readyStartBtn');
const hallOfFameBtn = document.getElementById('hallOfFameBtn');
const startPageButtons = document.getElementsByClassName('startPageButtons');

//redirect to respective page, on button click//
readyStartBtn.onclick= function() {
  location.href="game.html";
  }
hallOfFameBtn.onclick= function() {
  location.href="hof.html";
  }
////////////////////////////////////////////////

