/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// Desafio 10
function techList(ListOfTechs, name) {
  let list = [];
  let techListSort = ListOfTechs.sort();
  for (let tech of techListSort) {
    list.push({
      tech,
      name,
    });
  }
  if (list.length === 0) {
    return 'Vazio!';
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of phoneNumber) {
    if (phoneNumber[index] < 0 || phoneNumber[index] > 9 || compareNumbers() >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function compareNumbers(numbers) {
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = 1; index2 < numbers.length; index += 1) {
      if (numbers[index2] === numbers[index]) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(compareNumbers([2, 5, 5, 6, 7]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
