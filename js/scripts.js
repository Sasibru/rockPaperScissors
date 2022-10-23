const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}

// jeg er paa steg 4

function playRound(playerSelection, computerSelection) {
  let capital = playerSelection.toUpperCase();
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(choices);
