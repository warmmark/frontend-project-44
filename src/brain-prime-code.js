import { gameLogic, randomNum } from './index.js';

function askIfPrime(num = randomNum()) {
  console.log(`Question: ${num}`);
  let correctansw = 'no';
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  for (let i = 0; i < primes.length; i += 1) {
    if (num === primes[i]) correctansw = 'yes';
  }
  return correctansw;
}

export default function isPrime() {
  const sentence = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameLogic(askIfPrime, sentence);
}
