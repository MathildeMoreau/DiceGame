const newGame = document.getElementById("new-game");
const rollDice = document.getElementById("roll-dice");
const hold = document.getElementById("hold");
const holdPlayer1 = document.getElementById("hold-score-1");
const holdPlayer2 = document.getElementById("hold-score-2");
const dice = document.getElementById("dice");
const currentScore1 = document.getElementById("current-score-1");
const currentScore2 = document.getElementById("current-score-2");
const winner = document.getElementById("winner");
const player1input = document.getElementById("player1input");
const player2input = document.getElementById("player2input");
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let player1 = true;
let player2 = false;

// SETTING NEW GAME
newGame.addEventListener("click", () => {
  scorePlayer1 == 0;
  scorePlayer2 == 0;
  holdPlayer1.innerHTML = 0;
  holdPlayer2.innerHTML = 0;
  winner.innerHTML = "";
});

// SETTING THE CHANGE OF IMAGE ON THE DICE AND SCORES
document.querySelectorAll("#dice, #roll-dice").forEach((el) => {
  el.addEventListener("click", () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    const slaps = (slap) => {
      const audio = new Audio();
      audio.src = "./dice1.mp3";
      audio.play();
    };

    switch (randomNumber) {
      case 1:
        dice.src = "./images/dice-six-faces-one.svg";
        if (player1 === true) {
          scorePlayer1 *= 0;
        } else {
          scorePlayer2 *= 0;
        }
        player1 = !player1;
        slaps();
        break;
      case 2:
        dice.src = "./images/dice-six-faces-two.svg";
        if (player1 === true) {
          scorePlayer1 += 2;
        } else {
          scorePlayer2 += 2;
        }
        break;
      case 3:
        dice.src = "./images/dice-six-faces-three.svg";
        if (player1 === true) {
          scorePlayer1 += 3;
        } else {
          scorePlayer2 += 3;
        }
        break;
      case 4:
        dice.src = "./images/dice-six-faces-four.svg";
        if (player1 === true) {
          scorePlayer1 += 4;
        } else {
          scorePlayer2 += 4;
        }
        break;
      case 5:
        dice.src = "./images/dice-six-faces-five.svg";
        if (player1 === true) {
          scorePlayer1 += 5;
        } else {
          scorePlayer2 += 5;
        }
        break;
      case 6:
        dice.src = "./images/dice-six-faces-six.svg";
        if (player1 === true) {
          scorePlayer1 += 6;
        } else {
          scorePlayer2 += 6;
        }
        break;
      default:
        break;
    }
    currentScore1.textContent = scorePlayer1;
    currentScore2.textContent = scorePlayer2;
  });
});

// SETTING THE HOLD BUTTON AND TOGGLE THE PLAYER
hold.addEventListener("click", () => {
  const total1 =
    parseInt(holdPlayer1.innerHTML) + parseInt(currentScore1.innerHTML);
  const total2 =
    parseInt(holdPlayer2.innerHTML) + parseInt(currentScore2.innerHTML);
  holdPlayer1.innerHTML = total1;
  holdPlayer2.innerHTML = total2;
  currentScore1 == 0;
  scorePlayer1 *= 0;
  currentScore1.innerHTML = 0;
  currentScore2 == 0;
  scorePlayer2 *= 0;
  currentScore2.innerHTML = 0;

  const click = (clic) => {
    const audio = new Audio();
    audio.src = "./hold.mp3";
    audio.play();
  };
  click();
  player1 = !player1;

  // END THE GAME AT 100 POINTS
  if (total1 >= 10) {
    winner.innerHTML = `
    <h1> Congratulations ${player1input.value} ! </h1>
    <img src='./images/giphy.gif' />;
    `;
  } else if (total2 >= 10) {
    winner.innerHTML = `
    <h1> Congratulations ${player2input.value} ! </h1>
    <img src='./images/giphy.gif' />;
    `;
  }
});

// SETTING THE SOUNDS

const sounds = (sound) => {
  const audio = new Audio();
  audio.src = "./Dice.mp3";
  audio.play();
};

document.querySelectorAll("#dice, #roll-dice").forEach((el) => {
  el.addEventListener("click", sounds);
});
