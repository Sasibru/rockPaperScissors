const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = "paper";
const computerSelection = getComputerChoice(choices);
let capitalPlayerSelection = playerSelection.toUpperCase();
let result= "";
let autoPlay = '';
let autoGenerateSelection = "";

function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}

// Game logic
function playRound(capitalPlayerSelection, computerSelection) {
  if (capitalPlayerSelection === computerSelection) {
    result = "Draw! Try again";
  } else if (capitalPlayerSelection === "ROCK") {
    if(computerSelection === "PAPER") {
      result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
    } else {
      result = `${capitalPlayerSelection} beats ${computerSelection}. You win!`;
    }
  } else if (capitalPlayerSelection === "SCISSORS") {
    if(computerSelection === "ROCK") {
      result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
    } else {
      result = `${capitalPlayerSelection} beats ${computerSelection}. You win!`;
    }
  } else if (capitalPlayerSelection === "PAPER") {
    if(computerSelection === "SCISSORS") {
      result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
    } else {
      result = `${capitalPlayerSelection} beats ${computerSelection}. You win!`;
    }
  }
  return result;
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