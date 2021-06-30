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
// Ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  let word = string.split(' ');
  return word;
}

// Desafio 4
// Ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
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
}

// Desafio 7
/* * O comando Math.abs foi utilizado para calcular a distância de um número pelo outro, sendo colocado entre parênteses. ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */

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

/* * o comando .replace foi utilizado para substituir o valor de uma variável por outro em uma nova variável, começando primeiro pelo valor inicial, separado por vírgula e após o valor substituído. O valor em questão encontra-se entre barras para separar o caractere da frase em si e utiliza-se o 'g' para uma pesquisa global no valor. ** Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace */

function encode(stringLetter) {
  let newPhrase = stringLetter.replace(/a/g, '1');
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
