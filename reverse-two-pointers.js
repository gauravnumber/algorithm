const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const reverse = (nums) => {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }

  return nums;
};

console.log(reverse([1, 2, 3, 4, 5]));
