import readlineSync from 'readline-sync';

export function getname() {
  return readlineSync.question('May I have your name? ');
}

export function greeting(userName) {
  return `Hello, ${userName}!`;
}
