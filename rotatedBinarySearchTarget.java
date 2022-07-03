class Solution {
	public int rotatedBinarySearchTarget(int[] nums, int target) {
		int l = 0;
		int r = nums.length - 1;
		int mid;

		while (l <= r) {
			mid = (l + r) / 2;

			if (nums[mid] == target) return mid;

			if (nums[l] <= nums[mid]) {
				if (nums[l] > target || nums[mid] < target) {
					l = mid + 1;
				} else {
					r = mid - 1;
				}
			} else {
				if (nums[r] < target || nums[mid] > target) {
					r = mid - 1;
				} else {
					l = mid + 1;
				}
			}
		}

		return -1;
	}

	public static void main(String[] args) {
		int[] nums = {4, 5, 6, 1, 2, 3};
		Solution s = new Solution();

		System.out.println(s.rotatedBinarySearchTarget(nums, 6));
	}
}