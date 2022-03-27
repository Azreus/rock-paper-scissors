let results = document.querySelector(".results");

let playerScoreDiv = document.querySelector(".player-score");
let playerScore = 0;
playerScoreDiv.textContent = `Player score: ${playerScore}`;
let computerScoreDiv = document.querySelector(".computer-score");
let computerScore = 0;
computerScoreDiv.textContent = `Computer score: ${computerScore}`;

const buttons = document.querySelectorAll(".selection");
buttons.forEach(button => button.addEventListener('click', (e) => {
  if (playerScore == 5 || computerScore == 5) {
    resetScore();
  }
  results.textContent = playRound(e.target.textContent, computerPlay());
 }
));

// Randomly generates a number (0, 1, or 2) and returns an answer based on that
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  switch(random) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

// Returns an outcome based on win/lose/tie conditions, using user and computer generated inputs as arguments
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Paper" && computerSelection == "Rock" ||
  playerSelection == "Rock" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Paper") 
  {
    playerScore++;
    playerScoreDiv.textContent = `Player score: ${playerScore}`;
    if (playerScore == 5) {
      return "You were first to 5. You win!";
    } 
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper" ||
  playerSelection == "Paper" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Rock")
  {
    computerScore++;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    if (computerScore == 5) {
      return "The computer got to 5 first. You lose.";
    }
    return `You lose. ${computerSelection} beats ${playerSelection}.`;
  }
  else if (playerSelection == computerSelection) { return "It's a tie!"; }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDiv.textContent = `Player score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer score: ${computerScore}`;
}

// Capitalises the first letter and makes the rest of the characters lowercase
function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}