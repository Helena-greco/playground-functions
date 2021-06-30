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

// Desafio 3
/** Source: https://blog.betrybe.com/javascript/javascript-split/ */
function splitSentence(string) {
  let word = string.split(' '); // .split foi utilizado para separar as string com espaço, como determinado entre parênteses.
  return word;
}

// Desafio 4
/** Source: https://www.w3schools.com/jsref/jsref_join.asp */
function concatName(array) {
  let result = [array[array.length - 1], array[0]];
  return result.join(', '); // .join foi utilizado para juntar strings que foram selecionadas pelo seu índice.
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
}

// Desafio 7
/** Source: https://www.w3schools.com/jsref/jsref_abs.asp */
function catAndMouse(mouse, cat1, cat2) { // O comando Math.abs foi utilizado nas linhas 43 e 44 para calcular a distância do gato para o rato, sendo colocado entre parênteses.
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
  fun
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0) {
      status.push('fizzBuzz');
    } else if (index % 5 === 0) {
      status.push('buzz');
    } else if (index % 3 === 0) {
      status.push('fizz');
    } else {
      status.push('bug!');
    }
  }
  return status;
}

// Desafio 9
/** Source: https://www.w3schools.com/jsref/jsref_replace.asp */
function encode(stringLetter) {
  let newPhrase = stringLetter.replace(/a/g, '1'); // foi criada uma nova variável para receber o novo valor que vai ser substituído, foi utilizado o comando .replace nas linhas 72 a 76, e 80 a 84 com o objetivo de substituir as vogais, que foram separadas entre barras para separar o valor dos demais, o 'g' para direcionar uma pesquisa global, feita em toda a string, em números como solicitado, e vice-versa.
  newPhrase = newPhrase.replace(/e/g, '2');
  newPhrase = newPhrase.replace(/i/g, '3');
  newPhrase = newPhrase.replace(/o/g, '4');
  newPhrase = newPhrase.replace(/u/g, '5');
  return newPhrase;
}
function decode(stringNumber) {
  let newPhrase = stringNumber.replace(/1/g, 'a');
  newPhrase = newPhrase.replace(/2/g, 'e');
  newPhrase = newPhrase.replace(/3/g, 'i');
  newPhrase = newPhrase.replace(/4/g, 'o');
  newPhrase = newPhrase.replace(/5/g, 'u');
  return newPhrase;
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
