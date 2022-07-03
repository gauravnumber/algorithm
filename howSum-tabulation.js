const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum + 1; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

console.log(howSum(7, [4, 3, 7]));
console.log(howSum(15, [4, 5, 7]));
console.log(howSum(30, [2, 10, 7]));
