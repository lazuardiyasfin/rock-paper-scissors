function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber == 0? "rock" :
        randomNumber == 1? "paper" :
        "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();
    
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

    const resultDisplay = document.querySelector("#result");

    const roundResult = document.createElement('p');
    const gameScore = document.createElement('p');

    resultDisplay.appendChild(roundResult);
    resultDisplay.appendChild(gameScore);

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    
        if (humanChoice == computerChoice) {
            roundResult.textContent = `It's tie! Both players throws ${humanChoice}`;
        }
        else if ((humanChoice == "Rock" && computerChoice == "Scissors") ||
            (humanChoice == "Scissors" && computerChoice == "Paper") ||
            (humanChoice == "Paper" && computerChoice == "Rock")) {
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else {
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }

        gameScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    
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

    const playerChoices = document.querySelector("#choices");

    playerChoices.addEventListener('click', (event) => {
        let playerSelection = event.target.id;
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    });

    getResult();

    return;
}

playGame();