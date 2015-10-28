console.time('test');

import {shuffle, reverseShuffle, createSeed} from './main.js';

const countMax = process.argv[3] || 100;
const showResults = process.argv[4] || false;

let array = [ 'A', 'B', 'C', 'D', 'E', 'F'];
let seed = process.argv[2];
let wasSeedProvided = !!seed;

let count = 0;

if (showResults) {
  while (count < countMax) {
    shuffle(array, seed);
    console.log('Array:', array);
    count++;
  }
}
else {
  while (count < countMax) {
    shuffle(array, seed);
    count++;
  }
}

console.timeEnd('test');

if(!showResults) {
  console.log('Array shuffled:', array);
}
if (wasSeedProvided) {
  console.log('Shuffled', countMax, 'times with seed of [', seed, ']');
}
else {
  console.log('Shuffled', countMax, 'times with random seeds');
}
