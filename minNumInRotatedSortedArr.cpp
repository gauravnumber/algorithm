#include "iostream"
#include "vector"

using namespace std;

int minNumInRotatedSortedArr(vector<int> nums) {
	int l = 0;
	int r = nums.size() - 1;
	// int res = nums.back();
	int res = nums.front();
	// int res = nums.at(0);

	while (l <= r) {
		if (nums.at(l) < nums.at(r)) {
			res = min(res, nums.at(l));
			break;
		}

		int m = (l + r) / 2;
		res = min(res, nums.at(m));

		if (nums.at(l) <= nums.at(m)) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}

	return res;
}

int main(int argc, char const *argv[])
{
	vector<int> nums = {5, 6, 7, 8, 2, 3, 4};
	int res = minNumInRotatedSortedArr(nums);
	cout<<res<<endl;
	return 0;
}

