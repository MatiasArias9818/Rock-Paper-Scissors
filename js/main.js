let userScore = 0;
let computerScore = 0;

const html_userScore = document.getElementById("playerscore");
const html_computerScore = document.getElementById("compscore");
const html_rock = document.getElementById("r");
const html_paper = document.getElementById("p");
const html_scissors = document.getElementById("s");
const html_win = document.getElementById("winnername");
const html_text = document.getElementById("actiontext");

html_rock.addEventListener("click", () => {
  game("p");
});
html_paper.addEventListener("click", () => {
  game("r");
});
html_scissors.addEventListener("click", () => {
  game("s");
});

const userMovement = (userChoice) => {
  alert(userChoice);
};

const getIaMovement = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const game = (userChoice) => {
  const ia = getIaMovement();

  switch (ia + userChoice) {
    case "rp":
    case "sr":
    case "ps":
      win();
      break;

    case "pp":
    case "ss":
    case "rr":
      tie();
      break;

    default:
      lose();
  }

  if (userScore === 5 || computerScore === 5) {
    gameOver();
  } else {
    html_text.innerHTML = "Es hora de Jugar!";
  }
};

const win = () => {
  userScore++;
  html_userScore.innerHTML = userScore;
  html_win.innerHTML = "Ganaste!";
};

const tie = () => {
  html_win.innerHTML = "Empataste!";
};

const lose = () => {
  computerScore++;
  html_computerScore.innerHTML = computerScore;
  html_win.innerHTML = "Perdiste!";
};

const gameOver = () => {
  html_userScore.innerHTML = 0;
  html_computerScore.innerHTML = 0;
  html_text.innerHTML = "JUEGO TERMINADO!";
  userScore = 0;
  computerScore = 0;
};
