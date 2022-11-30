const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = "paper";
const computerSelection = getComputerChoice(choices);
const rockSelection = document.getElementById("rockSelection").addEventListener("click", playGame);
const paperSelection = document.getElementById("paperSelection").addEventListener("click", playGame);
const scissorsSelection = document.getElementById("scissorsSelection").addEventListener("click", playGame);
const userScoreDom = document.getElementById("userScore");
const computerScoreDom = document.getElementById("computerScore");
const gameLogDom = document.getElementById("gameLogDom");
let capitalPlayerSelection = playerSelection.toUpperCase();
let gameLog = "";
let autoPlay = '';
let autoGenerateSelection = "";
const resetScore = 0;
let userScore = 0;
let computerScore = 0;
let btn = document.createElement("button");
btn.innerHTML = "Play again!";


function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}


// Game logic

function playRound(capitalPlayerSelection, computerSelection) {

  if (capitalPlayerSelection === computerSelection) {
    gameLog = `Draw!`;
    document.getElementById("gameLogDom").innerHTML = gameLog;
  } else if(
    (capitalPlayerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (capitalPlayerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (capitalPlayerSelection === 'PAPER' && computerSelection === 'ROCK')) {
      userScore++
     gameLog = `${capitalPlayerSelection} beats ${computerSelection}. You win!`;
     document.getElementById("userScore").innerHTML = userScore;
     document.getElementById("gameLogDom").innerHTML = gameLog;
  } else if (
    (computerSelection === 'ROCK' && capitalPlayerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && capitalPlayerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && capitalPlayerSelection === 'ROCK')) {
      computerScore++
     gameLog = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
     document.getElementById("computerScore").innerHTML = computerScore;
     document.getElementById("gameLogDom").innerHTML = gameLog;
    }

    if(userScore === 5){
      document.getElementById("gameLogDom").innerHTML = "You won the game!"
      gameLogDom.classList.add("leader");
    }else if(computerScore === 5) {
      document.getElementById("gameLogDom").innerHTML = "Computer wins the game!"
      gameLogDom.classList.add("looser");
    }

    animations();


    return gameLog;
  };

function animations() {
  if (userScore === computerScore) {
    userScoreDom.classList.remove("looser");
    userScoreDom.classList.remove("leader");
    computerScoreDom.classList.remove("leader");
    computerScoreDom.classList.remove("looser");
    }else if(userScore > computerScore) {
      userScoreDom.classList.remove("looser");
      userScoreDom.classList.add("leader");
      computerScoreDom.classList.remove("leader");
      computerScoreDom.classList.add("looser");
    }else if (userScore < computerScore){
      computerScoreDom.classList.add("leader");
      computerScoreDom.classList.remove("looser");
      userScoreDom.classList.remove("leader");
      userScoreDom.classList.add("looser");
    };

}


function playGame() {
  if(userScore === 5){
    resetGame();
  }else if(computerScore === 5) {
    resetGame();
  };

   playRound(this.value, getComputerChoice(choices));
  };


  // Add/Remove classes from dom
/*
  if (userScore === computerScore) {
    userScoreDom.classList.remove("looser");
    userScoreDom.classList.remove("leader");
    computerScoreDom.classList.remove("leader");
    computerScoreDom.classList.remove("looser");
  }else if(userScore > computerScore) {
      userScoreDom.classList.remove("looser");
      userScoreDom.classList.add("leader");
      computerScoreDom.classList.remove("leader");
      computerScoreDom.classList.add("looser");
    } else if (userScore < computerScore){
      computerScoreDom.classList.add("leader");
      computerScoreDom.classList.remove("looser");
      userScoreDom.classList.remove("leader");
      userScoreDom.classList.add("looser");
    };
*/

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("userScore").innerHTML = 0;
  document.getElementById("computerScore").innerHTML = 0;
  gameLogDom.classList.remove("leader");
  gameLogDom.classList.remove("looser");

}
/*
// Auto play 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    autoGenerateSelection = getComputerChoice(choices);
    console.log(playRound(playerSelection, autoGenerateSelection));
  }
  return autoPlay
}

// console.log(playRound(playerSelection, computerSelection));
// console.log(game());
*/