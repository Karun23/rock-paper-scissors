const btns = document.querySelectorAll(".btn");
const outputMessage = document.querySelector(".outputMessage");
const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");

let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  while((playerScore < 5 && computerScore < 5)) {
  if (playerSelection === computerSelection) {
    return "It's a tie! " + "Computer chose: " + computerSelection;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    playerScoreElement.textContent = "Player: " + playerScore;
    return "Player won! " + "Computer chose: " + computerSelection;

  } else {
    computerScore++;
    computerScoreElement.textContent = "Computer: " + computerScore;
    return "Computer won! " + "Computer chose: " + computerSelection;
  }
}

if(playerScore === 5) {
  return "Player WINS!";
} else {
  return "Computer WINS";
  
}
}

function playGame(playerChoice) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerChoice, computerSelection);
  outputMessage.innerText = result;
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.choice;
    playGame(playerChoice);
  });
});
