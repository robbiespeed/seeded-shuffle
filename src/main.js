export function createSeed (length) {
  let seed = Math.random();

  while (length > 1) {
    seed = seed * (length--);
  }
  seed = Math.floor(seed);
  return seed;
}

export function shuffle (array, seed) {
  let length = array.length;
  seed = seed || seed === 0 ? Math.floor(seed) : createSeed(length);
  let count = 0;
  let shuffleTo;
  let temp;
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

export function reverseShuffle (array, seed) {
  let length = array.length;
  seed = seed || seed === 0 ? Math.floor(seed) : createSeed(length);
  let count = length - 2;
  let shuffleArray = [];

  for (let i = length; i > 1; i--) {
    let position = seed % i;
    shuffleArray.push(position);
    seed = (seed - position) / i;
  }

  while (count !== -1) {
    let shuffleTo = shuffleArray[count];
    let temp = array[count];
    array[count] = array[count + shuffleTo];
    array[count + shuffleTo] = temp;
    count--;
  }
  return array;
}

export default {shuffle, reverseShuffle, createSeed}
