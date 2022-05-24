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
            console.log("You win");
            return 1;
        }

        if (playerSelection == "rock") {
            console.log("Draw, play again.");
            return -1;
        }

        else {
            console.log("You lose");
            return 0;
        }
    }
    if (computerSelection == "paper") {
        if (playerSelection == "scissor") {
            console.log("You win");
            return 1;
        }

        if (playerSelection == "paper") {
            console.log("Draw, play again.");
            return -1;
        }

        else {
            console.log("You lose");
            return 0;
        }
    }
    if (computerSelection == "scissor") {
        if (playerSelection == "rock") {
            console.log("You win");
            return 1;
        }
        if (playerSelection == "scissors") {
            console.log("Draw, play again.");
            return -1;
        }
        else {
            console.log("You lose");
            return 0;
        }
    }
}

function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    let computerSelection = "";
    let playerSelection = "";
    let points = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("Choose between rock, paper, or scissors.");
        console.log("Player chooses " + playerSelection);
        console.log("Computer chooses " + computerSelection);
        points = playerSelect(playerSelection, computerSelection);

        if (points == 1) {
            playerPoint += 1;
        }
        if (points == 0) {
            computerPoint += 1;
        }
        if (points == -1) {
            computerSelection = computerPlay();
            playerSelection = prompt("Choose between rock, paper, or scissors.");
            console.log("Player chooses " + playerSelection);
            console.log("Computer chooses " + computerSelection);
            points = playerSelect(playerSelection, computerSelection);
            if (points == 1) {
                playerPoint += 1;
            }
            if (points == 0) {
                computerPoint += 1;
            }
        }
    }
    
    console.log("Player: " + playerPoint)
    console.log("Computer: " + computerPoint)
    if (computerPoint > playerPoint) {
        console.log("Computer wins!")
    }
    else {
        console.log("You win!")
    }
}

game();