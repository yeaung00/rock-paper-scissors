let playerPoint = 0;
let computerPoint = 0;
let playerSelection = "";
let points = 0;
const buttons = document.querySelectorAll('button');
let computerScore = document.querySelector(".compScore");
let playerScore = document.querySelector(".playerScore");
let playerChoice = document.querySelector(".playerChoice");
let compChoice = document.querySelector(".compChoice");
let endGameMsg = document.getElementById("winner");
var modal = document.getElementById("myModal");
const retry = document.querySelector(".retry")
let matchResult = document.querySelector(".matchResult");
let x = document.querySelector(".playerResult");
let y = document.querySelector(".compResult");

function computerPlay() {
    let play = Math.floor((Math.random() * 3) + 1);
    if (play == 1) {
        return "rock";
    }
    if (play == 2) {
        return "paper";
    }
    if (play == 3) {
        return "scissor";
    }
}


function playerSelect(playerSelection, computerSelection) {
    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            x.textContent = "🧻"
            y.textContent = "🗿";
            matchResult.textContent = "You win!";
            return 1;
        }

        if (playerSelection == "rock") {
            x.textContent = "🗿"
            y.textContent = "🗿";
            matchResult.textContent = "Draw";
            return -1;
        }

        else {
            x.textContent = "✂️"
            y.textContent = "🗿";
            matchResult.textContent = "You lose";
            return 0;
        }
    }
    if (computerSelection == "paper") {
        if (playerSelection == "scissors") {
            y.textContent = "🧻";
            x.textContent = "✂️";
            matchResult.textContent = "You win!";
            return 1;
        }

        if (playerSelection == "paper") {
            y.textContent = "🧻";
            x.textContent = "🧻";
            matchResult.textContent = "Draw";
            return -1;
        }

        else {
            y.textContent = "🧻";
            x.textContent = "🗿";
            matchResult.textContent = "You lose";
            return 0;
        }
    }
    if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            y.textContent = "✂️";
            x.textContent = "🗿";
            matchResult.textContent = "You win!";
            return 1;
        }
        if (playerSelection == "scissors") {
            y.textContent = "✂️";
            x.textContent = "✂️";
            matchResult.textContent = "Draw";
            return -1;
        }
        else {
            y.textContent = "✂️";
            x.textContent = "🧻";
            matchResult.textContent = "You lose";
            return 0;
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.className);
        if(playerPoint == 5 || computerPoint == 5) {
            declareWinner();
        }
    });
});

function playRound(playerSelection) {
    computerSelection = computerPlay();

    points = playerSelect(playerSelection, computerSelection);

    if (points == 1) {
        playerPoint += 1;
        updatePlayerScore(playerPoint);
        updatePlayerChoice(playerSelection);
        updateComputerChoice(computerSelection);
    }
    if (points == 0) {
        computerPoint += 1;
        updateComputerScore(computerPoint);
        updatePlayerChoice(playerSelection);
        updateComputerChoice(computerSelection);
    }
    if (points == -1) {
        updatePlayerChoice(playerSelection);
        updateComputerChoice(computerSelection);
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                points = playerSelect(button.className, computerSelection);
                if(playerPoint == 5 || computerPoint == 5) {
                    declareWinner();
                }
            });
        });
        
        if (points == 1) {
            playerPoint += 1;
            updatePlayerScore(playerPoint);
            updatePlayerChoice(playerSelection);
            updateComputerChoice(computerSelection);
        }
        if (points == 0) {
            computerPoint += 1;
            updateComputerScore(computerPoint);
            updatePlayerChoice(playerSelection);
            updateComputerChoice(computerSelection);
        }
    }

    console.log("Player: " + playerPoint)
    console.log("Computer: " + computerPoint)
    
}
function updatePlayerScore(score) {
    
    playerScore.textContent = playerPoint;
}
function updateComputerScore(score) {
    
    computerScore.textContent = computerPoint;
}
function updatePlayerChoice(player) {
    playerChoice.textContent = "Player chooses " + player;
}
function updateComputerChoice(cpu) {
    compChoice.textContent = "Computer chooses " + cpu;
}

function restartGame() {
    modal.style.display = "none";
    playerPoint = 0;
    computerPoint = 0;
    playerSelection = "";
    points = 0;
    playerChoice.textContent = "";
    compChoice.textContent = "";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    matchResult.textContent = "";
    y.textContent = "";
    x.textContent = "";
}

function declareWinner() {
    modal.style.display = "block";
    if (computerPoint > playerPoint) {
        endGameMsg.textContent = "You lose!"
    }
    else {
        endGameMsg.textContent = "You win!"
    }

    retry.addEventListener('click', () => {
        restartGame();
    });

}

