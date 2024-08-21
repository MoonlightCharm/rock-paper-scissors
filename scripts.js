let humanScore = 0;
let computerScore = 0;
let playerSelection = "";

const humanScoreCounter = document.querySelector(".human-score");
const computerScoreCounter = document.querySelector(".computer-score");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

btnRock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection, getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    playerSelection = "paper";
    playRound(playerSelection, getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound(playerSelection, getComputerChoice());
});

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

function playRound(humanChoice, computerChoice) {
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
    humanScoreCounter.textContent = `Your score: ${humanScore}`;
    computerScoreCounter.textContent = `Computer score: ${computerScore}`;

    if (humanScore === 5) {
        setTimeout(() => {
            alert("Congratulations, you are the winner!");
            resetGame();
        }, 50); // Delay the alert slightly to allow the DOM to update
    } else if (computerScore === 5) {
        setTimeout(() => {
            alert("The computer wins! Better luck next time.");
            resetGame();
        }, 50); // Delay the alert slightly to allow the DOM to update
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreCounter.textContent = `Your score: ${humanScore}`;
    computerScoreCounter.textContent = `Computer score: ${computerScore}`;
}