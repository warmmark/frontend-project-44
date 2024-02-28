import { gameLogic, randomNum } from '../index.js';

function askIfEven() {
  const random = randomNum();
  console.log(`Question: ${random}`);
  let correctansw = '';
  if (random % 2 === 0) {
    correctansw = 'yes';
  } else {
    correctansw = 'no';
  }
  return correctansw;
}

export default function isEven() {
  const sentence = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLogic(askIfEven, sentence);
}
