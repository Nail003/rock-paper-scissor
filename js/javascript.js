function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[randomNumber(0, 2)];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

console.log(getComputerChoice());
