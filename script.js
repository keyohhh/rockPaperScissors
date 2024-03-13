const answers = ["rock", "paper", "scissor"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * answers.length);
    return answers[index];
}

function getPlayerChoice() {
    let pick = prompt(answers);
    return pick;
}

function playRound() {
    const playerSelection = getPlayerChoice();
    let computerSelection =  getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log("Round ends in a draw!")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`Computer Wins this round ${computerSelection} beats ${playerSelection}!`)
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log(`Player wins this round ${playerSelection} beats ${computerSelection}!`)
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log(`Player wins this round ${playerSelection} beats ${computerSelection}!`)
    } else if (computerSelection === "rock" && playerSelection === "scissor") {
        console.log(`Computer wins this round ${computerSelection} beats ${playerSelection}!`)
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log(`Computer wins this round ${computerSelection} beats ${playerSelection}!`)
    } else if (computerSelection === "paper" && playerSelection === "scissor") {
        console.log(`Player wins this round ${playerSelection} beats ${computerSelection}!`)
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}