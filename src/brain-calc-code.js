import { gameLogic, randomNum, randomOperand } from './index.js';

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
  const correctansw = askAndAnswer();
  gameLogic(correctansw);
}
