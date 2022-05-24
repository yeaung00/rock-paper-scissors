function computerPlay() {
    let play = Math.floor((Math.random() * 3) + 1);
    if (play == 1) {
        console.log("rock");
        return "rock";
    }
    if (play == 2) {
        console.log("paper");
        return "paper";
    }
    if (play == 3) {
        console.log("scissor");
        return "scissor";
    }
}

function playerSelect(playerSelection, computerSelection) {
    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            console.log("You win")
            return 1;
        }
        else {
            console.log("You lose")
            return 0;
        }
    }
    if (computerSelection == "paper") {
        if (playerSelection == "scissor") {
            console.log("You win")
            return 1;
        }
        else {
            console.log("You lose")
            return 0;
        }
    }
    if (computerSelection == "scissor") {
        if (playerSelection == "rock") {
            console.log("You win")
            return 1;
        }
        else {
            console.log("You lose")
            return 0;
        }
    }
}

function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    let points = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("Choose between rock, paper, or scissors.");
        while (playerSelection != "rock" || "paper" || "scissors") {
            playerSelection = prompt("The input value is not accepted. Choose between rock, paper, or scissors.");
        }
        points = playerSelect(playerSelection, computerSelection);

        if (points == 1) {
            playerPoint += 1;
        }
        if (points == 0) {
            computerPoint += 1;
        }
    }
    
    console.log(playerPoint +':'+computerPoint)
    if (computerPoint > playerPoint) {
        console.log("Computer wins!")
    }
    else {
        console.log("You win!")
    }
}

game();