const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = "rock";
const computerSelection = getComputerChoice(choices);

function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}


// Game logic

function playRound(playerSelection, computerSelection) {
  let capitalPlayerSelection = playerSelection.toUpperCase();
  console.log("Computer Output: ", computerSelection);

  if (capitalPlayerSelection === computerSelection) {
    console.log("Draw! Try again");
  } else if (capitalPlayerSelection === "ROCK") {
    if(computerSelection === "PAPER") {
      console.log(`${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`);
    } else {
      console.log(`${computerSelection} beats ${capitalPlayerSelection}. You win!`);
    }
  } else if (capitalPlayerSelection === "SCISSORS") {
    if(computerSelection === "ROCK") {
      console.log(`${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`);
    } else {
      console.log(`${computerSelection} beats ${capitalPlayerSelection}. You win!`);
    }
  } else if (capitalPlayerSelection === "PAPER") {
    if(computerSelection === "SCISSORS") {
      console.log(`${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`);
    } else {
      console.log(`${computerSelection} beats ${capitalPlayerSelection}. You win!`);
    }
  }
}

// Auto play 5 rounds
function game(playRound) {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log(playRound(playerSelection, computerSelection));
