const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

// console.log(canSum(7, [3, 4, 7]))  // => true
// console.log(canSum(7, [3, 2, 1, 1]))   // => true
console.log(canSum(300, [7, 14])); // => false
