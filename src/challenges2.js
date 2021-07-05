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

}

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
