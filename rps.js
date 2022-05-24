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