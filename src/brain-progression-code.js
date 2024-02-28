import { gameLogic, randomNum } from './index.js';

function generateProgression() {
  const lengthOfProgression = randomNum(5, 11);
  const start = randomNum();
  const difference = randomNum();
  let current = start;
  const progression = [start];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    current += difference;
    progression.push(current);
  }
  const numOfMissed = randomNum(1, lengthOfProgression);
  const correctansw = progression[numOfMissed];
  progression[numOfMissed] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return `${correctansw}`;
}

export default function missedInProgression() {
  const sentence = 'What number is missing in the progression?';
  gameLogic(generateProgression, sentence);
}
