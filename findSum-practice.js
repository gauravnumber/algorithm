const findSum = (nums, target) => {
  const table = {};
  for (var i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    // console.log(nums[i] in table)
    // if (table[nums[i]]) {
    // if (nums[i] in table) {
    if (table.hasOwnProperty(nums[i])) {
      return [table[nums[i]], i];
    } else {
      table[difference] = i;
    }

    // console.log(table)
  }

  return -1;
};

// console.log(findSum([2, 4, 5, 6], 9))
console.log(findSum([2, 4, 1, 6], 6)); // => [0, 1]
console.log(findSum([2, 4, 1, 7], 9)); // => [0, 3]
