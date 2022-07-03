// function bestSum(nums, target, memo = {}) {
//   if (memo.hasOwnProperty(target)) return memo[target];
//   if (target === 0) return [];
//   if (target < 0) return null;

//   let shortCombination = [];

//   for (let num of nums) {
//     const diff = target - num;
//     const diffRemainder = bestSum(nums, diff, memo);

//     if (diffRemainder) {
//       const combination = [...diffRemainder, num];

//       if (
//         shortCombination.length === 0 ||
//         combination.length < shortCombination.length
//       ) {
//         shortCombination = combination;
//       }
//     }
//   }

//   memo[target] = shortCombination;
//   return shortCombination;
// }

function bestSum(nums, target) {
  let res = Array(target + 1).fill(null);
  res[0] = [];

  for (let i = 0; i < target + 1; i++) {
    if (res[i] !== null) {
      for (let num of nums) {
        const combination = [...res[i], num];

        if (!res[i + num] || res[i + num].length > combination.length) {
          res[i + num] = combination;
        }
      }
    }
  }

  // console.log(res);
  return res[target];
}
console.log(bestSum([5, 2, 2, 2, 1], 10));
