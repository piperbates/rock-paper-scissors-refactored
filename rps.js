//DOM grab
const rockSelection = document.getElementById("rock");
const paperSelection = document.getElementById("paper");
const scissorsSelection = document.getElementById("scissors");
const resultsBox = document.getElementById("results-box");
const scoreBox = document.getElementById("score-box");
const gamesPlayed = document.getElementById("games-played");

let playerMove;
let computerMove;
let score = 0;
let games = 0;

let winStatement = 1;
let loseStatement = -1;
let drawStatement = 0;

rockSelection.addEventListener("click", () => {
  playerMove = "rock";
  playGame();
});
paperSelection.addEventListener("click", () => {
  playerMove = "paper";
  playGame();
});
scissorsSelection.addEventListener("click", () => {
  playerMove = "scissors";
  playGame();
});

function playGame() {
  games = games +1;
  randomNumberGen();
  resultsBox.innerText = `You played ${playerMove}, the computer played ${computerMove}.`;

  if (calculateWinner() === -1) {
    resultsBox.innerText += "You lose";
    score = score -1;
  } else if (calculateWinner() === 0) {
    resultsBox.innerText += "You draw";

  } else if (calculateWinner() === 1) {
    resultsBox.innerText += "You win";
    score = score +1;
  }

  
  gamesPlayed.innerText=`Games played: ${games}`
  updateScoreboard();
}

function updateScoreboard(){
  scoreBox.innerText = `Score: ${score}`;
}

function randomNumberGen() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerMove = "rock";
  } else if (randomNumber === 1) {
    computerMove = "paper";
  } else if (randomNumber === 2) {
    computerMove = "scissors";
  }
}

function calculateWinner() {
  //If player plays rock
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      return drawStatement;
    } else if (computerMove === "paper") {
      return loseStatement;
    } else if (computerMove === "scissors") {
      return winStatement;
    }
  }

  //if player plays paper
  else if (playerMove === "paper") {
    if (computerMove === "paper") {
      return drawStatement;
    } else if (computerMove === "scissors") {
      return loseStatement;
    } else if (computerMove === "rock") {
      return winStatement;
    }
  }

  //if player plays scissors
  else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      return drawStatement;
    } else if (computerMove === "rock") {
      return loseStatement;
    } else if (computerMove === "paper") {
      return winStatement;
    }
  } else {
    return;
  }
}
