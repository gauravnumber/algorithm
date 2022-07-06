class Solution {
	public int minNumInRotatedSortedArr(int[] nums) {
		int l = 0, r = nums.length - 1;
		int res = nums[0];

		while (l <= r) {
			if (nums[l] < nums[r]) {
				res = Math.min(res, nums[l]);
				break;
			}

			int m = (l + r) / 2;
			res = Math.min(res, nums[m]);

			if (nums[l] <= nums[m]) 
				l = m + 1;
			else 
				r = m - 1;
 		}

 		return res;
	}

	public static void main(String[] args) {
		int[] nums = {6, 7, 8, 9, 2, 3};
		Solution s = new Solution();
		System.out.println(s.minNumInRotatedSortedArr(nums));
	}
}