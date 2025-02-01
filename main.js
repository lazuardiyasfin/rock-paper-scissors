function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber == 0? "rock" :
        randomNumber == 1? "paper" :
        "scissors";
}