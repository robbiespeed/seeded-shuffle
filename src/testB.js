import {shuffle, reverseShuffle, createSeed} from './main.js';

let array = [ 'A', 'B', 'C', 'D'];
let seed = 0;
let seedMax = 1;

for (let i = array.length; i > 1; i--) {
  seedMax = seedMax * i;
}
console.log('Max unique seeds:', seedMax);

while (seed < seedMax) {
  console.log('Array shuffled with seed [', seed, ']:',  shuffle(array, seed));
  seed++;
}
