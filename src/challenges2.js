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
function generatePhoneNumber(telephoneNumber) {
  if (telephoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let phoneNum = compareNumber(telephoneNumber);
  if (phoneNum === 'Array com tamanho incorreto.'
  || phoneNum === 'não é possível gerar um número de telefone com esses valores') {
    return phoneNum;
  }
  return createNumber(telephoneNumber);
}

function compareNumber(numbers) {
  for (let num of numbers) {
    if (num < 0 || num > 9 || counter(numbers, num) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function counter(array, number) {
  let count = 0;
  for (let numero of array) {
    if (numero === number) {
      count += 1;
    }
  }
  return count;
}

function createNumber(phoneNumber) {
  let num = ['('];
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (index === 2) {
      num += ') ';
      num += phoneNumber[index];
    } else if (index === 7) {
      num += '-';
      num += phoneNumber[index];
    } else {
      num += phoneNumber[index];
    }
  }
  return num;
}

console.log(createNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC) {
    return false;
  } if (lineA < Math.abs(lineB - lineC)) {
    return false;
  } 
  return true;
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
