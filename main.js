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

    const playerChoices = document.querySelector("#choices");

    function handlePlayerChoice(event) {
        let playerSelection = event.target.id;
        let computerSelection = getComputerChoice();

        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            playRound(playerSelection, computerSelection);   
        }
    }

    playerChoices.addEventListener('click', handlePlayerChoice);

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
    
        if (humanScore == 5 || computerScore == 5) {
            showGameOverModal();
        }
    }

    function getResult() {
        return (humanScore == computerScore) ? "Draw!" :
            (humanScore > computerScore) ? "You win!" :
            "You lose!";
    }

    const gameOverModal = document.querySelector("#game-over");
    const gameResult = document.querySelector("#game-over-msg");
    const restartButton = document.querySelector("#restart-btn");
    const overlay = document.querySelector(".overlay");

    function resetGame() {
        gameOverModal.classList.add("hidden");
        overlay.classList.add("hidden");

        roundResultDisplay.replaceChildren();

        playerChoices.removeEventListener('click', handlePlayerChoice);
        restartButton.removeEventListener('click', resetGame);

        playGame();
    }

    function showGameOverModal() {
        gameOverModal.classList.remove("hidden");
        overlay.classList.remove("hidden");

        gameResult.textContent = getResult();

        restartButton.addEventListener('click', resetGame);
    }
}

playGame();