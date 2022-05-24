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