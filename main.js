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

    const roundResultDisplay = document.querySelector("#round-result");

    const roundResult = document.createElement('p');
    const gameScore = document.createElement('p');

    roundResultDisplay.appendChild(roundResult);
    roundResultDisplay.appendChild(gameScore);

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

    const gameResultDisplay = document.querySelector('#game-result')
    const gameResult = document.createElement('p');

    gameResultDisplay.appendChild(gameResult);

    function getResult() {
        if (humanScore == computerScore) {
            gameResult.textContent = "Draw!";
        }
        else if (humanScore > computerScore) {
            gameResult.textContent = "You win the game!"
        }
        else {
            gameResult.textContent = "You lose the game!";
        }

        return;
    }

    const playerChoices = document.querySelector("#choices");

    playerChoices.addEventListener('click', (event) => {
        let playerSelection = event.target.id;
        let computerSelection = getComputerChoice();

        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            playRound(playerSelection, computerSelection);
        }

        if (humanScore == 5 || computerScore == 5) {
            getResult();
        }
    });

    return;
}

playGame();