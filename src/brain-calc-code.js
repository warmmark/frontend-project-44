import readlineSync from 'readline-sync';
import greeting, { randomNum, randomOperand } from './index.js';

function askAndAnswer() {
  const num1 = randomNum();
  const num2 = randomNum();
  const random = randomOperand();
  let correctansw = '';
  if (random === 1) {
    console.log(`Question: ${num1} + ${num2}`);
    correctansw = `${num1 + num2}`;
  } else if (random === 2) {
    console.log(`Question: ${num1} - ${num2}`);
    correctansw = `${num1 - num2}`;
  } else if (random === 3) {
    console.log(`Question: ${num1} * ${num2}`);
    correctansw = `${num1 * num2}`;
  }
  return correctansw;
}

export default function calc() {
  const userName = greeting();
  let correct = 0;
  while (correct < 3) {
    const correctansw = askAndAnswer();
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
