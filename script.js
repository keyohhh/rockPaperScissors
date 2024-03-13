// initialize Rock paper scissors
// Get player choice - Rock, Paper, or Scissors
// Get random computer choice - Rock, Paper, or Scissors
// Get computer choice and player choice to compare them
// Take choice and print winner

const answers = ["rock", "paper", "scissor"];

// get random computer choice
function getComputerChoice() {
    let index = Math.floor(Math.random() * answers.length);
    return answers[index];
}

//get players choice
function getPlayerChoice() {
    let pick = prompt(answers);
    return pick;
}

// compare and declare winner
function playRound(computerSelection, playerSelection) {
    
}