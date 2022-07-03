// not finished
function minNumInRotatedSortedArr(nums) {
	let l = 0, r = nums.length - 1
	let min = Infinity

	while (l <= r) {
		let mid = Math.floor((l + r) / 2)

		if (nums[l] <= nums[mid]) {
			if (nums[l] < min)
		}
	}
}