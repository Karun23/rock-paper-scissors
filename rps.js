function getComputerChoice() {
 let arr = ["rock","paper", "scissors"];
 const randomIndex = Math.floor(Math.random() * arr.length);
 const randomElement = arr[randomIndex];
 return randomElement;

}

function PlayRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie! " + "computer entered: " + computerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "Player won! " + "computer entered: " + computerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player won! " + "computer entered: " + computerSelection;
      } else {
      return "Computer won! " + "computer entered: " + computerSelection;
    }
  }


  function PlayGame() {
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter your choice:");
        const result = PlayRound(playerSelection, computerSelection);
        console.log(result);
    }
}

document.getElementById("playGame").addEventListener("click", PlayGame);
