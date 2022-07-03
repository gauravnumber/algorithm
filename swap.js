const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  console.log(nums);
};

swap([1, 2, 3, 4], 1, 2);
