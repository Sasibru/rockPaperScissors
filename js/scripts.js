const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}


function playRound(playerSelection, computerSelection) {
  let capitalPlayerSelection = playerSelection.toUpperCase();
  console.log("Computer Output: ", computerSelection);

  if (capitalPlayerSelection === computerSelection) {
    console.log("Draw! Try again");
  } else if (capitalPlayerSelection === "ROCK") {
    if(computerSelection === "PAPER") {
      console.log("Computer wins!");
    } else {
      console.log("You win!");
    }
  } else if (capitalPlayerSelection === "SCISSORS") {
    if(computerSelection === "ROCK") {
      console.log("Computer wins!");
    } else {
      console.log("You win!");
    }
  } else if (capitalPlayerSelection === "PAPER") {
    if(computerSelection === "SCISSORS") {
      console.log("Computer wins!");
    } else {
      console.log("You win!");
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(choices);
console.log(playRound(playerSelection, computerSelection));
