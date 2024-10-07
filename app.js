let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  //Randomly choosen by computer
  const options = ['rock', 'paper', 'scissors'];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];

}

const drawGame = () => {
  msg.innerText = 'Game was Draw , Play again!';
  msg.style.backgroundColor = "#081b31";

}

const showwinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}


const playGame = (userChoice) => {
  console.log('user choice =', userChoice);
  //generate computer choice
  const compChoice = genCompChoice();
  console.log('comp choice', compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === 'rock') {
      userWin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      userWin = compChoice === 'scissors' ? false : true;
    } else {
      userWin = compChoice === 'rock' ? false : true;
    }
    showwinner(userWin, userChoice, compChoice);
  }
}

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice)
  });
});