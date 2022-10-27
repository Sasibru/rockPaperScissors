const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = "ROCK";
const computerSelection = getComputerChoice(choices);

function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}

function allCapString(stringInput) {
  return stringInput.toUpperCase();
}


function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection){
    console.log("Draw, try again!")
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
             playerSelection === "PAPER" && computerSelection === "ROCK" ||
             playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    console.log("Player wins!")
  }
  
}

for (let index = 0; index < 5; index++) {
  const computerSelection = getComputerChoice(choices);
  playRound(playerSelection, computerSelection)
}
