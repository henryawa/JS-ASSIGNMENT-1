let playerWins = 0;
let computerWins = 0;

const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

const userPlay = () => {
  let input = prompt("What will you play?");
  input = input.toLowerCase();
  let newInput = input.charAt(0).toUpperCase() + input.slice(1);
  return newInput;
};

const playRound = () => {
  let playerChoice = userPlay();

  const computerChoice = computerPlay();
  if (playerChoice == computerChoice) {
    console.log(`Draw! You both played ${computerChoice}`);
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    playerWins += 1;
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
  } else if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Rock")
  ) {
    computerWins += 1;
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
  } else {
    console.log("Invalid expression");
    playRound();
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerWins > computerWins) {
    console.log(`You Win! Score is ${playerWins} : ${computerWins}`);
  } else if (playerWins < computerWins) {
    console.log(`You Lose! Score is ${playerWins} : ${computerWins}`);
  } else {
    console.log(`Its a Draw! Score is ${playerWins} : ${computerWins}`);
  }
};
