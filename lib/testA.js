'use strict';

var _mainJs = require('./main.js');

var array = ['A', 'B', 'C', 'D', 'E', 'F'];
var seed = process.argv[2] || (0, _mainJs.createSeed)(array.length);

console.log('Array:', array);

console.log('Array shuffled with seed [', seed, ']:', (0, _mainJs.shuffle)(array, seed));