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
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let highestNum = Math.max.apply(null, numbers);
  let numberOfTimes = 0;
  for (let num of numbers) {
    if (num === highestNum) {
      numberOfTimes += 1;
    }
  }
  return numberOfTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position > cat2Position) {
    return 'cat2';
  } if (cat2Position > cat1Position) {
    return 'cat1';
  } if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let status = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 !== 0) {
      status.push('fizz');
    } else if (index % 5 === 0 && index % 3 !== 0) {
      status.push('buzz');
    } else if (index % 5 === 0 && index % 3 === 0) {
      status.push('fizzBuzz');
    } else {
      status.push('bug!');
    }
  }
  return status;
}

// Desafio 9
function encode(stringLetter) {
  // seu código aqui
}
function decode(stringNumber) {
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
