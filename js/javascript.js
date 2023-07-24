console.log(tellWinner("Rock", getComputerChoice()));

// Helper Functions

function tellWinner(playerChoice, computerChoice) {
    playerChoice = playerChoice.toUpperCase();
    let winCondition1 =
        playerChoice === "ROCK" && computerChoice === "SCISSORS";
    let winCondition2 =
        playerChoice === "SCISSORS" && computerChoice === "PAPER";
    let winCondition3 = playerChoice === "PAPER" && computerChoice === "ROCK";

    // Player wins
    if (winCondition1 || winCondition2 || winCondition3) {
        return `You won!! ${playerChoice} beats ${computerChoice}`;
    }

    // For draw
    if (playerChoice === computerChoice) {
        return `Draw!! Both choses ${playerChoice}`;
    }

    // Player losses
    return `You loss!! ${computerChoice} beats ${playerChoice}`;
}

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[randomNumber(0, 2)];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
