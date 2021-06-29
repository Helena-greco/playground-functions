/* eslint-disable no-unused-vars */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let word = string.split(' ');
  return word;
}

// Desafio 4
function concatName(array) {
  let result = [array[array.length - 1], array[0]];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let highestNum = numbers[0];
  let numberOfTimes = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNum) {
      highestNum = numbers[index];
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (highestNum === numbers[index2]) {
      numberOfTimes += 1;
    }
  }
  return numberOfTimes;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
