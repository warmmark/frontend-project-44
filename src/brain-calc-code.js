import greeting, { gameLogic, randomNum, randomOperand } from './index.js';

function askAndAnswer() {
  const num1 = randomNum();
  const num2 = randomNum();
  const random = randomOperand();
  let correctansw = '';
  const operands = ['+', '-', '*'];
  console.log(`Question: ${num1} ${operands[random - 1]} ${num2}`);
  if (random === 1) {
    correctansw = `${num1 + num2}`;
  } else if (random === 2) {
    correctansw = `${num1 - num2}`;
  } else if (random === 3) {
    correctansw = `${num1 * num2}`;
  }
  return correctansw;
}

export default function calc() {
  const userName = greeting();
  console.log('What is the result of the expression?');
  const correctansw = askAndAnswer();
  gameLogic(correctansw, userName);
}
