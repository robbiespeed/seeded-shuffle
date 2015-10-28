"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSeed = createSeed;
exports.shuffle = shuffle;
exports.reverseShuffle = reverseShuffle;

function createSeed(length) {
  var seed = Math.random();

  while (length > 1) {
    seed = seed * length--;
  }
  seed = Math.floor(seed);
  return seed;
}

function shuffle(array, seed) {
  var length = array.length;
  seed = seed || seed === 0 ? Math.floor(seed) : createSeed(length);
  var count = 0;
  var shuffleTo = undefined;
  var temp = undefined;
  while (count !== length - 1 && seed) {
    shuffleTo = seed % (length - count);
    seed = (seed - shuffleTo) / (length - count);
    temp = array[count];
    array[count] = array[count + shuffleTo];
    array[count + shuffleTo] = temp;
    count++;
  }
  return array;
}

function reverseShuffle(array, seed) {
  var length = array.length;
  seed = seed || seed === 0 ? Math.floor(seed) : createSeed(length);
  var count = length - 2;
  var shuffleArray = [];

  for (var i = length; i > 1; i--) {
    var position = seed % i;
    shuffleArray.push(position);
    seed = (seed - position) / i;
  }

  while (count !== -1) {
    var shuffleTo = shuffleArray[count];
    var temp = array[count];
    array[count] = array[count + shuffleTo];
    array[count + shuffleTo] = temp;
    count--;
  }
  return array;
}

exports["default"] = { shuffle: shuffle, reverseShuffle: reverseShuffle, createSeed: createSeed };