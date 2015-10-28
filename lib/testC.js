'use strict';

var _mainJs = require('./main.js');

console.time('test');

var countMax = process.argv[3] || 100;
var showResults = process.argv[4] || false;

var array = ['A', 'B', 'C', 'D', 'E', 'F'];
var seed = process.argv[2];
var wasSeedProvided = !!seed;

var count = 0;

if (showResults) {
  while (count < countMax) {
    (0, _mainJs.shuffle)(array, seed);
    console.log('Array:', array);
    count++;
  }
} else {
  while (count < countMax) {
    (0, _mainJs.shuffle)(array, seed);
    count++;
  }
}

console.timeEnd('test');

if (!showResults) {
  console.log('Array shuffled:', array);
}
if (wasSeedProvided) {
  console.log('Shuffled', countMax, 'times with seed of [', seed, ']');
} else {
  console.log('Shuffled', countMax, 'times with random seeds');
}