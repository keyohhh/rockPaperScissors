const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const playerScore = document.querySelector(".pscore");
const computerScore = document.querySelector('.cscore');
const startGame = document.querySelector('.start')
const results = document.querySelector('.results')

let pscore = "0";
let cscore = "0";
let gameInProgress;
let playerChoice = "";

function computerChoice() {
    const answers = ["rock", " paper", " scissors"];
    let choice = Math.floor(Math.random() * answers.length);
    return choice;
}

startGame.addEventListener("click", () => {
    startGame.style.visibility = 'hidden'
    playerScore.textContent = pscore;
    computerScore.textContent = cscore;
    gameInProgress = true;
})

rockBtn.addEventListener("click", () => {
    if (gameInProgress) {
        playerChoice = "rock";
        playRound(playerChoice, computerChoice())
    }
})

paperBtn.addEventListener("click", () => {
    if (gameInProgress) {
        playerChoice = "paper";
        playRound(playerChoice, computerChoice())
    }
})

scissorsBtn.addEventListener("click", () => {
    if (gameInProgress) {
        playerChoice = "scissors"
        playRound(playerChoice, computerChoice())
    }
})

function fiveRounds() {
    if (playerScore === 5) {
        gameInProgress = false;
        alert("play Again")
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === "rock"){
        switch (computerChoice){
            case 0: {
                return "it's a draw";
            }
            case 1: {
                cscore++;
                computerScore.textContent = cscore;
                return "you lost, paper beats rock";
                
            }
            case 2: {
                pscore++;
                playerScore.textContent = pscore;
                return "you won, rock beats scissor"
            }
        }
    } else if (playerChoice === "scissors"){
        switch (computerChoice){
            case 0: {
                cscore++;
                computerScore.textContent = cscore;
                return "you lost, rock beats scissor";
            }
            case 1: {
                pscore++;
                playerScore.textContent = pscore;
                return "you won, scissor beats paper";
            }
            case 2: {
                return "it's a draw"
            }
        }
    } else if (playerChoice === "paper"){
        switch (computerChoice){
            case 0:{
                pscore++;
                playerScore.textContent = pscore;
                return "you won, paper beats rock";
            }
            case 1:{
                return "it's a draw";
            }
            case 2:{
                cscore++;
                computerScore.textContent = cscore;
                return "you lost, scissor beats paper"
            }
        }
    }    
    }

