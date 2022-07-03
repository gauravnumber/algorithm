const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < targetSum + 1; i++) {
    if (table[i]) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

// console.log(canSum(7, [3, 4, 7]))  // => true
// console.log(canSum(7, [3, 2, 1, 1]))  // => true
console.log(canSum(76, [7, 14])); // => false
