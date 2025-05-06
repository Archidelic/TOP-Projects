//playGame();

let myBtn = document.querySelectorAll("button");
console.log(myBtn);

myBtn.forEach((element) => {
  element.addEventListener("click", () => {
    playRound(element.innerText, getComputerChoice());
  });
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "Rock";
  } else if (computerChoice == 1) {
    computerChoice = "Paper";
  } else if (computerChoice == 2) {
    computerChoice = "Scissors";
  } else {
    console.log("erro");
  }
  console.log("computer choice: " + computerChoice);
  return computerChoice;
}
//const computerSelection = getComputerChoice();

// function getHumanChoice() {
//   let humanChoice = prompt("Qual a tua mão?");
//   const firstLetter = humanChoice.charAt(0);
//   const firstLetterCap = firstLetter.toUpperCase();
//   const remainingLetters = humanChoice.slice(1);
//   humanChoice = firstLetterCap + remainingLetters;
//   console.log("human choice: " + humanChoice);
//   return humanChoice;
// }
// const humanSelection = getHumanChoice();

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   const rounds = 4;
//   let roundNumber = 0;

// while (roundNumber <= rounds) {

// const humanChoice = getHumanChoice();
//const computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);
function restart() {
  humanScore = 0;
  computerScore = 0;
}
let humanScore = 0;
let computerScore = 0;
resultMessage = document.getElementById("resultMessage");
totalScore = document.getElementById("totalScore");
winner = document.getElementById("winner");

function playRound(humanChoice, computerChoice) {
  winner.textContent = "";
  if (humanChoice === computerChoice) {
    resultMessage.textContent = `It's a draw, ${computerChoice} it's the same as ${humanChoice}`;
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    resultMessage.textContent = `PC wins, ${computerChoice} cuts ${humanChoice}`;
    computerScore += 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    resultMessage.textContent = `PC wins, ${computerChoice} breaks ${humanChoice}`;
    computerScore += 1;
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    resultMessage.textContent = `PC wins, ${computerChoice} wrap ${humanChoice}`;
    computerScore += 1;
  } else if (
    humanChoice == "Scissors" ||
    humanChoice == "Rock" ||
    humanChoice == "Paper"
  ) {
    resultMessage.textContent = "You win!";
    humanScore += 1;
  } else {
  }
  totalScore.textContent = `Humano: ${humanScore} Computador: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      winner.textContent = "You are the Winner!";
      restart();
    } else if (computerScore === 5) {
      winner.textContent = "PC is the Winner!";
      restart();
    }
  }
}

//   }
//   roundNumber++;
//   console.log(roundNumber);
// }
