game();

function game() {
    // Initial score and total rounds
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 3;

    // Run game
    for (let i = 0; i < rounds; i++) {
        // Get player and computer inputs
        let playerChoice = prompt(
            "Type either 'rock', 'paper' or 'scissors' to make your choice"
        );
        let computerChoice = getComputerChoice();

        // Check winner
        let gameResult = tellWinner(playerChoice, computerChoice);

        // Display win-loss message
        console.log(gameResult.message);

        // Update score
        if (gameResult.result === "won") playerScore++;
        if (gameResult.result === "loss") computerScore++;
    }

    // Display score at the end
    console.log(`%cPlayer score is ${playerScore}`, "color: lightgreen");
    console.log(`%cComputer score is ${computerScore}`, "color: red");
}

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
        return {
            result: "won",
            message: `\x1B[32mYou won!! ${playerChoice} \x1B[97mbeats \x1B[31m${computerChoice}`,
        };
    }

    // For draw
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
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
