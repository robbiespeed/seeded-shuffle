import {shuffle, reverseShuffle, createSeed} from './main.js';

let array = ['A', 'B', 'C', 'D', 'E', 'F'];
let seed = process.argv[2] || createSeed(array.length);

console.log('Array:', array);

console.log('Array shuffled with seed [', seed, ']:',  shuffle(array, seed));
