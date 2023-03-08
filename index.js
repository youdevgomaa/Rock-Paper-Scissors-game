const ComputerChoice = document.getElementById("computer_choice");
const UserChoice = document.getElementById("user_choice");
const Result = document.getElementById("result");
const Choices = document.querySelectorAll("button");
let UChoice;
let CChoice;
Choices.forEach((Choice) =>
  Choice.addEventListener("click", (e) => {
    UChoice = e.target.id;
    UserChoice.innerHTML = UChoice;
    GenrateComputerChoice();
    Compare();
  })
);

const GenrateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * Choices.length + 1);
  if (randomNumber === 1) {
    CChoice = "rock";
  } else if (randomNumber === 2) {
    CChoice = "paper";
  } else {
    CChoice = "scissors";
  }
  ComputerChoice.innerHTML = CChoice;
};

const Compare = () => {
  if (CChoice === UChoice) {
    Result.innerHTML = "It's a draw!";
  }
  if ((CChoice === "paper") & (UChoice === "scissors")) {
    Result.innerHTML = "You Win!";
  }
  if ((CChoice === "paper") & (UChoice === "rock")) {
    Result.innerHTML = "You Lost!";
  }
  if ((CChoice === "scissors") & (UChoice === "paper")) {
    Result.innerHTML = "You Lost!";
  }
  if ((CChoice === "scissors") & (UChoice === "rock")) {
    Result.innerHTML = "You Win!";
  }
  if ((CChoice === "rock") & (UChoice === "paper")) {
    Result.innerHTML = "You Win!";
  }
  if ((CChoice === "rock") & (UChoice === "scissors")) {
    Result.innerHTML = "You Lost!";
  }
};
