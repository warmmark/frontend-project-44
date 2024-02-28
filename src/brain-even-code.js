import readlineSync from 'readline-sync';
import greeting, { randomNum } from './index.js';

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
