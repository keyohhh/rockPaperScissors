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
function playRound() {
    const playerSelection = getPlayerChoice();
    let computerSelection =  getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log("Round ends in a draw!")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Player Wins this round rock beats paper!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}