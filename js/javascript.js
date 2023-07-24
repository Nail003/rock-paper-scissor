console.log(tellWinner("Rock", getComputerChoice()));

// Helper Functions

function tellWinner(playerChoice, computerChoice) {
    let winCondition1 =
        playerChoice === "Rock" && computerChoice === "Scissors";
    let winCondition2 =
        playerChoice === "Scissors" && computerChoice === "Paper";
    let winCondition3 = playerChoice === "Paper" && computerChoice === "Rock";

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
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[randomNumber(0, 2)];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
