import { gameLogic, randomNum } from './index.js';

function askGCD(num1 = randomNum(), num2 = randomNum()) {
  console.log(`Question: ${num1} ${num2}`);
  const maxnum = Math.max(num1, num2);
  const minnum = Math.min(num1, num2);
  let correctansw = 0;
  for (let i = 0; i < minnum; i += 1) {
    if ((maxnum % i === 0) && (minnum % i === 0)) correctansw = i;
  }
  return `${correctansw}`;
}

export default function findGCD() {
  const sentence = 'Find the greatest common divisor of given numbers.';
  gameLogic(askGCD, sentence);
}
