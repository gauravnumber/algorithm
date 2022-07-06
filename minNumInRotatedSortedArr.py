def minNumInRotatedSortedArr(nums):
	l, r = 0, len(nums) - 1
	res = nums[0]

	while l <= r:
		if nums[l] < nums[r]:
			res = min(res, nums[l])
			break

		m = (l + r) // 2
		res = min(res, nums[m])

		if nums[l] <= nums[m]:
			l = m + 1
		else: 
			r = m - 1
	return res

print(minNumInRotatedSortedArr([6, 7, 8, 9, 3, 4, 5]))
