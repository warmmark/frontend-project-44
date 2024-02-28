import readlineSync from 'readline-sync';
import greeting, { randomNum } from './index.js';

export default function isEven() {
  const userName = greeting();
  let correct = 0;
  while (correct < 3) {
    const random = randomNum();
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    let correctansw = '';
    if (random % 2 === 0) {
      correctansw = 'yes';
    } else {
      correctansw = 'no';
    }
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
