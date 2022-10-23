const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
}
