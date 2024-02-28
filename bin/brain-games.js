#!/usr/bin/env node

import { getname, greeting } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = getname();

console.log(greeting(userName));
