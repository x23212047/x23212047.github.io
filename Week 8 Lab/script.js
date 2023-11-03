function playGame(playerChoice) {
    const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];//Computer choice to be random
    const result = getGameResult(playerChoice, computerChoice);//call the olayers choice
    //create
    document.getElementById("result").textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
}

function getGameResult(playerChoice, computerChoice) {
    //if both player and computer have same choice, its a tie
    if(playerChoice === computerChoice) {
        return "It's a tie!";

    //if the player beats the computer the player wins
    }else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||//using logical operators
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper"))
    {
        return "You win!";
    //if the player does not beat the computer, computer wins
    }else{
        return "Computer wins!";
    }
}