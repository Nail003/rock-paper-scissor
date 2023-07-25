// Run game
game();

function game() {
    // Total score and total rounds
    let playerScore = 0;
    let computerScore = 0;
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

        // Update score that will be shown after the last round
        if (gameResult.result === "won") playerScore++;
        if (gameResult.result === "loss") computerScore++;
    }

    // Display final score
    console.log(`%cPlayer score is ${playerScore}`, "color: lightgreen");
    console.log(`%cComputer score is ${computerScore}`, "color: red");

    // Tell who won
    if (playerScore > computerScore)
        console.log("\x1B[32mYou have won!! \x1B[35mCongratulations!!");
    if (playerScore <= computerScore) console.log("\x1B[31mYou have lost!!");
}

// Helper Functions
function getResults(playerChoice, computerChoice) {
    playerChoice = playerChoice.toUpperCase();

    // Player win conditions
    let winCondition1 =
        playerChoice === "ROCK" && computerChoice === "SCISSORS";
    let winCondition2 =
        playerChoice === "SCISSORS" && computerChoice === "PAPER";
    let winCondition3 = playerChoice === "PAPER" && computerChoice === "ROCK";

    // Player wins
    if (winCondition1 || winCondition2 || winCondition3) {
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
