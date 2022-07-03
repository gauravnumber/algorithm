const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum + 1; i++) {
    if (table[i]) {
      for (const num of numbers) {
        const combination = [...table[i], num];

        if (!table[i + num] || combination.length < table[i + num].length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(7, [4, 3, 7]));
console.log(bestSum(15, [4, 5, 7]));
console.log(bestSum(300, [21, 19, 17]));
console.log(bestSum(1000, [201, 20, 17]));
