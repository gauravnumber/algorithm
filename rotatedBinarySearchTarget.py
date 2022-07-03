def rotatedBinarySearchTarget(nums, target):
	l, r = 0, len(nums) - 1

	while l <= r:
		mid = (l + r) // 2

		if nums[mid] == target: return mid

		if nums[l] <= nums[mid]:
			if nums[l] > target or nums[mid] < target:
				l = mid + 1
			else:
				r = mid - 1
		else:
			if nums[r] < target or nums[mid] > target:
				r = mid - 1
			else:
				l = mid + 1
	return -1


print(rotatedBinarySearchTarget([4, 5, 6, 1, 2, 3], 2))