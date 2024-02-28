import greeting, { gameLogic, randomNum } from './index.js';

function askAndAnswer() {
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
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const correctansw = askAndAnswer();
  gameLogic(correctansw, userName);
}
