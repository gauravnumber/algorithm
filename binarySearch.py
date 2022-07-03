def binary(nums, target):
	l, r = 0, len(nums) - 1

	while l <= r:
		mid = (l + r)//2

		if nums[mid] == target:
			return mid

		if nums[mid] < target:
			l = mid + 1
		else:
			r = mid - 1

	return -1

print(binary([1, 2, 3, 4, 6, 8, 9], 4))