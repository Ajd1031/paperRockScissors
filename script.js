function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    console.log("COMPUTERCHOICE:", possibleChoices[choice]);
    return possibleChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    const capitalize = {"rock":"Rock", "paper":"Paper", "scissors":"Scissors"};
    const success = `You Win! ${capitalize[playerChoice]} beats ${capitalize[computerChoice]}`
    const failure = `You Lose! ${capitalize[computerChoice]} beats ${capitalize[playerChoice]}`
    const tie = "It's a tie!"
    console.log("PLAYERCHOICE:", capitalize[playerChoice]);
    
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return success;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return success;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return success;
    } else if (playerChoice === computerChoice) {
        return tie
    } else {
        return failure;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round;

    for (let i = 0; i < 5; i ++) {
        round = playRound("ROCK", getComputerChoice())
        console.log(round);
        if (round.includes("Win")) {
            playerScore = playerScore + 1;
        } else if (round.includes("Lose")) {
            computerScore = computerScore + 1;
        }
        console.log(`You:${playerScore} Computer:${computerScore}`);
    }

    if (playerScore > computerScore) {
        return console.log("You Win! ", `Score: ${playerScore}-${computerScore}`);
    } else {
        return console.log("You Lose!", `Score: ${computerScore}-${playerScore}`);
    }
    
}

game();