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
  return "";
};

//Getting The User's Input
const getUserNumber = () => {
  const number = prompt("What Do You Want To Do?");
  return Number(number.trim());
};
//handler Functions

const getRandomIntInRange = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};
//
let userAnswer = null;
let rightAnswer = null;
const checkAnswer = () => {
  if (userAnswer === rightAnswer) {
    console.log("Congratulations! That Is Correct!");
  } else {
    console.log("WRONG!Better Luck Next Time!");
  }
};

//Event handlers
const handleGuessingGame = () => {
  console.log(`Starting Guessing Game...`);
  console.log(`Guess a Number From 1-10`);
  userAnswer = prompt("");
  rightAnswer = getRandomIntInRange(1, 11);
  checkAnswer();
  console.log(`I Guessed The Number ${rightAnswer}`);
};
//
const handleWordsOfWisdom = () => {
  const quotes = [`"We cannot solve problems with the kind of thinking we employed when we came up with them." — Albert Einstein`,
    `“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`,
    `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain`,
`When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt`,
  `When you change your thoughts, remember to also change your world.”—Norman Vincent Peale`,
    `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`,
    `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren`,
      `Never let your emotions overpower your intelligence. – Drake`,
    `Nothing lasts forever but at least we got these memories. – J. Cole`,
    `Don’t you know your imperfections is a blessing? – Kendrick Lamar`,
    `Reality is wrong, dreams are for real. – Tupac`,
    `There is no substitute for hard work. – Thomas Edison`,
    `What consumes your mind controls your life- Unknown`,
    `Strive for greatness. – Lebron James`,
    `Wanting to be someone else is a waste of who you are. – Kurt Cobain`,
    `The time is always right to do what is right. – Martin Luther King Jr.`,
    `Let the beauty of what you love be what you do. – Rumi`,
    `May your choices reflect your hopes, not your fears. – Nelson Mandela`,
    `A happy soul is the best shield for a cruel world. – Atticus`, 
      `Life becomes easier when you learn to accept the apology you never got. – R. Brault`,
    `Happiness depends upon ourselves. – Aristotle`,
    `Turn your wounds into wisdom. – Oprah Winfrey`,
      `Change the game, don’t let the game change you. – Macklemore`,
    `The true meaning of life is to plant trees, under whose shade you do not expect to sit. – Nelson Henderson`,
    `Embrace the glorious mess that you are. – Elizabeth Gilbert`,
    `Normality is a paved road: it’s comfortable to walk but no flowers grow. – Vincent van Gogh`,
  ]

  let index = Math.floor(Math.random() * (quotes.length))
  console.log(quotes[index])
};
//
const handleCheerYouOn = () => {
  const cheers = ['YOU GOT THIS', 'LETSSS GOO!', "WOHOOO"];
  let randomCheer = Math.floor(Math.random() * cheers.length)
  console.log(cheers[randomCheer])
}
//Route to Event Handlers
const routeToEvent = () => {
  const option = getUserNumber();
  if (typeof option != "number") return sayGoodbye();
  if (option === 1) {
    handleGuessingGame();
  }
  if (option === 2) {
    handleWordsOfWisdom();
  }
  if (option === 3) {
    handleCheerYouOn();
  }
};


;
//Main Function
const main = () => {
  const name = welcomeAndGetName();
  console.log(name);
  showOptions();
  routeToEvent();
}
main();
