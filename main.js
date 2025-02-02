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
        else if ((humanChoice == "Rock" && computerChoice == "Scissors") ||
            (humanChoice == "Scissors" && computerChoice == "Paper") ||
            (humanChoice == "Paper" && computerChoice == "Rock")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    
        return;
    }

    function getResult() {
        if (humanScore == computerScore) {
            console.log("Draw!");
        }
        if (humanScore > computerScore) {
            console.log("You win the game!");
        }
        else {
            console.log("You lose the game!");
        }

        return;
    }

    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    getResult();

    return;
}

function getRematchOption() {
    let humanOption = prompt("Rematch? (yes/no)");

    if (humanOption !== "yes" && humanOption !== "no") {
        return getRematchOption();
    }

    return humanOption === "yes" ? true : false;
}

let gameRunning = true;

while (gameRunning) {
    playGame();
    console.log("Rematch?");
    gameRunning = getRematchOption();
}
