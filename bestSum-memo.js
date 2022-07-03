const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let sortCombination = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers, memo);

    if (remainderResult !== null) {
      const combination = [...remainderResult, num];
      if (
        sortCombination === null || combination.length < sortCombination.length
      ) {
        sortCombination = combination;
      }
    }
  }

  memo[targetSum] = sortCombination;
  return sortCombination;
};

console.log(bestSum(7, [4, 3, 7]));
console.log(bestSum(15, [4, 5, 7]));
console.log(bestSum(30, [2, 10, 7]));
console.log(bestSum(300, [21, 19, 17]));
