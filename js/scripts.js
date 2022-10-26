const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = "rock";
const computerSelection = getComputerChoice(choices);

function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}
let result = "";

// Game logic
  function playRound(playerSelection, computerSelection) {
  let capitalPlayerSelection = playerSelection.toUpperCase();

  if (capitalPlayerSelection === computerSelection) {
    result = "Draw! Try again";
  } else if (capitalPlayerSelection === "ROCK") {
    if(computerSelection === "PAPER") {
      result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
    } else {
      result = `${computerSelection} beats ${capitalPlayerSelection}. You win!`;
    }
  } else if (capitalPlayerSelection === "SCISSORS") {
    if(computerSelection === "ROCK") {
      result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
    } else {
      result = `${computerSelection} beats ${capitalPlayerSelection}. You win!`;
    }
  } else if (capitalPlayerSelection === "PAPER") {
    if(computerSelection === "SCISSORS") {
      result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
    } else {
      result = `${computerSelection} beats ${capitalPlayerSelection}. You win!`;
    }
  }
  return result;
}
// Auto play 5 rounds
let finalScore = "";

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
  return finalScore;
}

console.log(playRound(playerSelection, computerSelection));
console.log(game(finalScore));