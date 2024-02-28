import readlineSync from 'readline-sync';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function randomNum(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomOperand() {
  return randomNum(1, 4);
}

export function gameLogic(askFunction, sentence) {
  const userName = greeting();
  console.log(sentence);
  let correct = 0;
  while (correct < 3) {
    const correctansw = askFunction();
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctansw) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctansw}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
