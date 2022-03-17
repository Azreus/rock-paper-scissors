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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Paper" && computerSelection == "Rock" ||
  playerSelection == "Rock" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Paper") 
  {
    return `You win! ${playerSelection} beats ${computerSelection}`; 
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper" ||
  playerSelection == "Paper" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Rock")
  {
    return `You lose... ${computerSelection} beats ${playerSelection}`;  
  }
  else { return "It's a tie!"; }
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let playerInputA = prompt("Rock, paper, or scissors?");
let playerInput = capitaliseFirstLetter(playerInputA);



console.log(playRound(playerInput, computerPlay()));