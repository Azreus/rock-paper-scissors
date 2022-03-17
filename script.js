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
  // Win conditions
  if (playerSelection == "Paper" && computerSelection == "Rock" ||
  playerSelection == "Rock" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Paper") 
  {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  // Lose conditions
  else if (playerSelection == "Rock" && computerSelection == "Paper" ||
  playerSelection == "Paper" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Rock")
  {
    return `You lose. ${computerSelection} beats ${playerSelection}.`;
  }
  // Tie condition
  else if (playerSelection == computerSelection) { return "It's a tie!"; }
}

// Plays 5 rounds of rock-paper-scissors
function game() {
  for (let i = 0; i < 5; i++) {
    let playerInputA = prompt("Rock, paper, or scissors?");
    let playerInput = capitaliseFirstLetter(playerInputA);
    console.log(playRound(playerInput, computerPlay()));
  }
}

// Capitalises the first letter and makes the rest of the characters lowercase
function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Starts the game
game();