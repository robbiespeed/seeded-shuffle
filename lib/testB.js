'use strict';

var _mainJs = require('./main.js');

var array = ['A', 'B', 'C', 'D'];
var seed = 0;
var seedMax = 1;

for (var i = array.length; i > 1; i--) {
  seedMax = seedMax * i;
}
console.log('Max unique seeds:', seedMax);

while (seed < seedMax) {
  console.log('Array shuffled with seed [', seed, ']:', (0, _mainJs.shuffle)(array, seed));
  seed++;
}