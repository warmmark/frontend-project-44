#!/usr/bin/env node

import { greeting } from '../src/cli.js';

export default function brainGamesStart(name) {
  console.log('Welcome to the Brain Games!');
  return greeting(name);
}
