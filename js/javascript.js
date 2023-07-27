let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const resultHeading = document.querySelector("#result");
const playerScoreHeading = document.querySelector("#playerScore");
const computerScoreHeading = document.querySelector("#computerScore");

buttons.forEach((btn) => btn.addEventListener("click", onButtonClick));

// Event Handlers
function onButtonClick(e) {
    if (e.target.textContent === "Reset") {
        resetGame();
        return;
    }

    const playerChoice = e.target.textContent;
    const computerChoice = getComputerChoice();

    const result = getResults(playerChoice, computerChoice);

    updateAnnouncement(result.message);
    updateScore(result);
    updateScoreBoard();

    if (playerScore >= 5) {
        updateAnnouncement("Congratulations!! You Won!!");
        gameOver();
        return;
    }
    if (computerScore >= 5) {
        updateAnnouncement("You lost!! Game Over!!");
        gameOver();
        return;
    }
}

// Helper Functions
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
    updateAnnouncement("Best of 5 wins");
    gameOver();
}

function gameOver() {
    buttons.forEach((btn) => btn.classList.toggle("gameOver"));
}

function updateAnnouncement(message) {
    resultHeading.textContent = message;
}

function updateScore(result) {
    if (result.result === "won") playerScore++;
    if (result.result === "loss") computerScore++;
}

function updateScoreBoard() {
    playerScoreHeading.textContent = playerScore;
    computerScoreHeading.textContent = computerScore;
}

function getResults(playerChoice, computerChoice) {
    /**
     * Computes whether the player won or loss the match or it was a draw
     * Returns an object (key-value pair) of the form {result: "...", message: "..."}
     * result has three values of "win", "draw" and "loss" w.r.t player
     * message contains the appropriate message according to the current result
     */
    playerChoice = playerChoice.toUpperCase();

    let playerWinCondition1 =
        playerChoice === "ROCK" && computerChoice === "SCISSORS";
    let playerWinCondition2 =
        playerChoice === "SCISSORS" && computerChoice === "PAPER";
    let playerWinCondition3 =
        playerChoice === "PAPER" && computerChoice === "ROCK";

    // Player wins
    if (playerWinCondition1 || playerWinCondition2 || playerWinCondition3) {
        return {
            result: "won",
            message: `You won!! ${playerChoice} beats ${computerChoice}`,
        };
    }

    // Draw
    if (playerChoice === computerChoice) {
        return {
            result: "draw",
            message: `Draw!! Both choses ${playerChoice}`,
        };
    }

    // Player losses
    return {
        result: "loss",
        message: `You loss!! ${playerChoice} does not beat ${computerChoice}`,
    };
}

function getComputerChoice() {
    /**
     * This function returns a random string of either "ROCK", "PAPER" or "SCISSORS"
     */
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[randomNumber(0, 2)];
}

function randomNumber(min, max) {
    /**
     * Function that returns a random number between the specified range
     * Both min and max are included
     * For example randomNumber(1, 10) will return a number between 1 to 10
     */
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
