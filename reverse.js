// const swap = (str, i , j) => {
// 	str = str.split("")
// 	const temp = str[i]
// 	str[i] = str[j]
// 	str[j] = temp
// 	str = str.join("")

// 	console.log(str)
// }

// swap("abcd", 0, 3)

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const reverse = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n / 2; i++) {
    swap(nums, i, n - 1 - i);
  }

  return nums;
};

console.log(reverse([1, 2, 3, 4]));
