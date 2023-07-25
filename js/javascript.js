// Run game
game();

function game() {
    let playerTotalScore = 0;
    let computerTotalScore = 0;
    const TOTAL_ROUNDS = 5;

    // Play multiple rounds till total rounds
    for (let i = 0; i < TOTAL_ROUNDS; i++) {
        // Get player and computer inputs for this round
        let playerChoice = prompt(
            "Type either 'rock', 'paper' or 'scissors' to make your choice"
        );
        let computerChoice = getComputerChoice();

        // Get the results of this match
        let gameResult = getResults(playerChoice, computerChoice);

        // Display win-loss message of this match
        console.log(gameResult.message);

        // Update total score for final score and win message
        if (gameResult.result === "won") playerTotalScore++;
        if (gameResult.result === "loss") computerTotalScore++;
    }

    // Display final score
    console.log(`%cPlayer score is ${playerTotalScore}`, "color: lightgreen");
    console.log(`%cComputer score is ${computerTotalScore}`, "color: red");

    // Tell who won
    if (playerTotalScore > computerTotalScore)
        console.log("\x1B[32mYou have won!! \x1B[35mCongratulations!!");
    if (playerTotalScore <= computerTotalScore)
        console.log("\x1B[31mYou have lost!!");
}

// Helper Functions
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
            message: `\x1B[32mYou won!! ${playerChoice} \x1B[97mbeats \x1B[31m${computerChoice}`,
        };
    }

    // Draw
    if (playerChoice === computerChoice) {
        return {
            result: "draw",
            message: `\x1B[35mDraw!! \x1B[97mBoth choses \x1B[35m${playerChoice}`,
        };
    }

    // Player losses
    return {
        result: "loss",
        message: `\x1B[31mYou loss!! \x1B[32m${playerChoice} \x1B[97mdoes not beat \x1B[31m${computerChoice}`,
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
