// const choices = ["ROCK", "PAPER", "SCISSORS"];
// const playerSelection = "rock";
// const computerSelection = getComputerChoice(choices);
// let capitalPlayerSelection = "";
// let result = "";

// function getComputerChoice(choices) {
//   let randomPick = Math.floor(Math.random() * choices.length);
//   return choices[randomPick];
// }


// // Game logic
// function playRound(playerSelection, computerSelection) {
//   capitalPlayerSelection = playerSelection.toUpperCase();
  
//   if (capitalPlayerSelection === computerSelection) {
//     result = "Draw! Try again";
//   } else if (capitalPlayerSelection === "ROCK") {
//     if(computerSelection === "PAPER") {
//       result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
//     } else {
//       result = `${computerSelection} beats ${capitalPlayerSelection}. You win!`;
//     }
//   } else if (capitalPlayerSelection === "SCISSORS") {
//     if(computerSelection === "ROCK") {
//       result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
//     } else {
//       result = `${computerSelection} beats ${capitalPlayerSelection}. You win!`;
//     }
//   } else if (capitalPlayerSelection === "PAPER") {
//     if(computerSelection === "SCISSORS") {
//       result = `${computerSelection} beats ${capitalPlayerSelection}. Computer wins!`;
//     } else {
//       result = `${computerSelection} beats ${capitalPlayerSelection}. You win!`;
//     }
//   }
//   return result;
// }

// // Auto play 5 rounds

// let autoPlay = '';

// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound(playerSelection, computerSelection));
//   }
//   return autoPlay
// }

// console.log(playRound(playerSelection, computerSelection));
// console.log(game());


///////////////////////////////////////////////////////////////////
// New code

const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = "rock";
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
    return "Draw, try again!"
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
             playerSelection === "PAPER" && computerSelection === "ROCK" ||
             playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return "Player wins!"
  }
}