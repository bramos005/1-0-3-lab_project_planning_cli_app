const prompt = require("prompt-sync")();
//welcoming User
const welcomeAndGetName = () => {
  console.log("Welcome!");
  const name = prompt("What is your name?");
  console.log(`Hello ${name.trim()},nice to meet you!`);
  return name.trim();
};

//Program Closing Statement
const sayGoodbye = () => {
  console.log(`Goodbye!`);
};

//List of Options
const showOptions = () => {
  console.log(
    `Here are your options:
     1 - play a guessing game
     2 - words of wisdom
     3 - cheer you on!
     Any other key-exit`
  );
};

//Getting The User's Input
const getUserNumber = () => {
  const number = prompt("What Do You Want To Do?");
  return Number(number.trim());
};
//handler Functions

const getRandomIntInRange = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
};
const checkAnswer = () => {
  let userAnswer = null;
  let rightAnswer = null;
  if (userAnswer === rightAnswer) {
    console.log("Congratulations! That Is Correct!");
  } else {
    console.log("WRONG!Better Luck Next Time!");
  }
};

//Event handlers
const handleGuessingGame = () => {
  const easyMode = () => {
    let rightAnswer = getRandomIntInRange(1, 11);
  };
  console.log(`Starting Guessing Game...`);
  setTimeout(() => console.log(`Select A Difficulty:`), 2000);
  console.log(
    `1-Easy Mode(Guess A Number From 1-10)
        2-Normal Mode(Guess A Number From 1-25)
        3-Hard Mode(Guess A Number From 1-100)`
  );
  const mode = prompt("");
  switch (mode) {
    case 1:
      console.log(`Guess a Number From 1-10`);
      userAnswer = prompt("");
      rightAnswer = getRandomIntInRange(1, 11);
      checkAnswer();
     
      console.log(`I Guessed The Number ${rightAnswer}`),
      
     
      console.log(`Do You Want To Play Again?`)
  }
};
const handleWordsOfWisdom = () => {};
const handleCheerYouOn = () => {};

//Route to Event Handlers
const option = getUserNumber();
const routeToEvent = () => {
  switch (option) {
    case 1:
      handleGuessingGame();
      break;
    case 2:
      handleWordsOfWisdom();
      break;
    case 3:
      handleCheerYouOn();
      break;
  }
  sayGoodbye();
};

//Main Function
const main = () => {
  const name = welcomeAndGetName();
  name;
  showOptions();
  getUserNumber();
  routeToEvent()
  ;
};

main();
