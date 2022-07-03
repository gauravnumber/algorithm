// not working
#include "iostream"
#include "conio"
using namespace std;

int rotatedBinarySearchTarget(int nums[], int target) {
	int l = 0;
	// int length = sizeof(nums)/sizeof(nums[0]);
	int length = *(&nums + 1) - nums;
	int r = length - 1;
	// cout<<r;
	return r;
}

int main(int argc, char const *argv[])
{
	clrscr();
	int nums[] = {6, 7, 8, 1, 2, 3};
	cout<<rotatedBinarySearchTarget(nums, 2)<<endl;
	return 0;
}