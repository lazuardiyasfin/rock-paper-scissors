function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber == 0? "rock" :
        randomNumber == 1? "paper" :
        "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt().toLowerCase();
    
    if (humanChoice != "rock" && 
        humanChoice != "paper" && 
        humanChoice != "scissors") {
        return getHumanChoice();
    }

    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    
        if (humanChoice == computerChoice) {
            console.log(`It's tie! Both players throws ${humanChoice}`);
        }
        else if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "scissors" && computerChoice == "paper") ||
            (humanChoice == "paper" && computerChoice == "rock")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    
        return;
    }

    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    return;
}

playGame();