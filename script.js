const newGame = document.getElementById("new-game");
const rollDice = document.getElementById("roll-dice");
const hold = document.getElementById("hold");
const dice = document.getElementById("dice");
console.log(dice);

dice.addEventListener("click", () => {
  const randomNumber = Math.ceil(Math.random() * 6);

  switch (randomNumber) {
    case 1:
      console.log("1 point");
      break;
    case 2:
      console.log("2 points");
      break;
    case 3:
      console.log("3 points");
      break;
    case 4:
      console.log("4 points");
      break;
    case 5:
      console.log("5 points");
      break;
    case 6:
      console.log("6 points");
      break;
    default:
      break;
  }
});
const sounds = (sound) => {
  const audio = new Audio();
  audio.src = "./Dice.mp3";
  audio.play();
};

dice.addEventListener("click", sounds);
