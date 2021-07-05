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