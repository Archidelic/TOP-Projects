
playGame();

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random()*3);
  
  if (computerChoice == 0) {
    computerChoice ="Rock";
  } else if (computerChoice == 1){
    computerChoice = "Paper";
  } else if (computerChoice == 2) {
    computerChoice = "Scissors";
  } else {
    console.log ("erro")
  }
  console.log("computer choice: "+ computerChoice);
  return computerChoice;
}
//const computerSelection = getComputerChoice();


function getHumanChoice(){
let humanChoice = prompt("Qual a tua mão?");
const firstLetter = humanChoice.charAt(0);
const firstLetterCap = firstLetter.toUpperCase();
const remainingLetters = humanChoice.slice(1);
humanChoice = firstLetterCap + remainingLetters
console.log("human choice: " + humanChoice);
return humanChoice;
}
//const humanSelection = getHumanChoice();


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rounds = 4;
  let roundNumber = 0;


  while (roundNumber <= rounds) {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
      playRound(humanChoice,computerChoice)

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log ("It's a draw, " + computerChoice + " it's the same as " + humanChoice)
     
    } else if (humanChoice == "Paper" && computerChoice == "Scissors"){
      console.log ("PC wins, " + computerChoice + " cuts " + humanChoice)
      computerScore += 1
    } else if (humanChoice == "Scissors" && computerChoice == "Rock"){
      console.log ("PC wins, " + computerChoice + " breaks " + humanChoice)
      computerScore += 1
    } else if (humanChoice == "Rock" && computerChoice == "Paper"){
      console.log ("PC wins, " + computerChoice + " wrap " + humanChoice)
      computerScore += 1
    } else if (humanChoice == "Scissors" || humanChoice == "Rock" || humanChoice ==  "Paper"){
      console.log ("You win!");
      humanScore +=1
      } else {
        roundNumber--
    }
    
}
  roundNumber++;
  console.log(roundNumber);
}
console.log ("Humano: " + humanScore + " Computador: " + computerScore);

}
