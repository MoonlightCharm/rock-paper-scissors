let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3);
    if (randomValue === 0) {
        return "rock";
    } else if (randomValue === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let choice = prompt("Please choose between Rock, Paper or Scissors: ").toLowerCase();
    
    while (!validChoices.includes(choice)) {
        choice = prompt("Invalid choice. Please choose between Rock, Paper or Scissors: ").toLowerCase();
    }
    
    return choice;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose!");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else {
        console.log("You win!");
        humanScore++;
    }
    console.log("Your score: " + humanScore)
    console.log("Computer score: " + computerScore)
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("Congratulations, you are the winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins! Better luck next time.");
    } else {
        console.log("It's a draw!");
    }
}

playGame();
