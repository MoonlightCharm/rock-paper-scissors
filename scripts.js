function getComputerChoice () {
    if (Math.floor(Math.random() * 100) <= 33) {
        console.log("Rock");
    } else if (Math.floor(Math.random() * 100) >= 66) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}
getComputerChoice();

function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let humanChoice = prompt("Please choose between Rock, Paper or Scissors: ").toLowerCase();
    
    while (!validChoices.includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please choose between Rock, Paper or Scissors: ").toLowerCase();
    }
    
    console.log(humanChoice);
}

getHumanChoice();

