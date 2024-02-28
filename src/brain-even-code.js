import readlineSync from 'readline-sync';

export default function isEven() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const random = Math.floor(Math.random() * (100 - 1)) + 1;
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
