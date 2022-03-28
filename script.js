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
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close-btn");
const closingBtn = document.getElementById("closing-btn");
const player1part = document.querySelector(".player1");
const player2part = document.querySelector(".player2");
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let player1 = true;
let player2 = false;

function addOpacity() {
  player1part.classList.add("opacity");
  player2part.classList.add("opacity");
}

function reset() {
  scorePlayer1 *= 0;
  scorePlayer2 *= 0;
  currentScore1.innerHTML = 0;
  currentScore2.innerHTML = 0;
}

// CLOSING THE MODAL EXPLAINING THE RULES
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
closingBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// SETTING NEW GAME
newGame.addEventListener("click", () => {
  reset();
  player1 === true;
  holdPlayer1.innerHTML = 0;
  holdPlayer2.innerHTML = 0;
  player1part.classList.remove("opacity");
  player2part.classList.remove("opacity");
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
        if (player1) {
          player2part.classList.add("opacity");
          player1part.classList.remove("opacity");
        } else if (!player1) {
          player1part.classList.add("opacity");
          player2part.classList.remove("opacity");
        }
        slaps();
        break;
      case 2:
        dice.src = "./images/dice-six-faces-two.svg";
        if (player1 === true) {
          scorePlayer1 += 2;
          player2part.classList.add("opacity");
        } else {
          scorePlayer2 += 2;
          player1part.classList.add("opacity");
        }
        break;
      case 3:
        dice.src = "./images/dice-six-faces-three.svg";
        if (player1 === true) {
          scorePlayer1 += 3;
          player2part.classList.add("opacity");
        } else {
          scorePlayer2 += 3;
          player1part.classList.add("opacity");
        }
        break;
      case 4:
        dice.src = "./images/dice-six-faces-four.svg";
        if (player1 === true) {
          scorePlayer1 += 4;
          player2part.classList.add("opacity");
        } else {
          scorePlayer2 += 4;
          player1part.classList.add("opacity");
        }
        break;
      case 5:
        dice.src = "./images/dice-six-faces-five.svg";
        if (player1 === true) {
          scorePlayer1 += 5;
          player2part.classList.add("opacity");
        } else {
          scorePlayer2 += 5;
          player1part.classList.add("opacity");
        }
        break;
      case 6:
        dice.src = "./images/dice-six-faces-six.svg";
        if (player1 === true) {
          scorePlayer1 += 6;
          player2part.classList.add("opacity");
        } else {
          scorePlayer2 += 6;
          player1part.classList.add("opacity");
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
  reset();
  currentScore1 == 0;
  currentScore2 == 0;

  const click = (clic) => {
    const audio = new Audio();
    audio.src = "./hold.mp3";
    audio.play();
  };
  click();
  player1 = !player1;
  if (player1) {
    player1part.classList.remove("opacity");
    player2part.classList.add("opacity");
  } else if (!player1) {
    player2part.classList.remove("opacity");
    player1part.classList.add("opacity");
  }

  // END THE GAME AT 100 POINTS
  if (total1 >= 100) {
    addOpacity();
    winner.innerHTML = `
    <h1> ${player1input.value} you won ! </h1>
    <img src='./images/giphy.gif' class="winning-img"/>
    `;
    reset();
  } else if (total2 >= 100) {
    addOpacity();
    winner.innerHTML = `
    <h1> ${player2input.value} you won ! </h1>
    <img src='./images/giphy.gif' class="winning-img"/>
    `;
    reset();
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
