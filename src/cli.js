import readlineSync from 'readline-sync';

export default function greeting() {
    const userName = readlineSync.question('May I have your name? ');
    return `Hello, ${userName}!`;
}