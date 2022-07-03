function binarySearch(array: number[], n: number) {
  let lowIndex = 0,
    highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);

    if (array[midIndex] == n) return midIndex;
    else if (n > array[midIndex]) lowIndex = midIndex + 1;
    else highIndex = midIndex - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 4, 5, 6], 7));
// console.log(binarySearch([1, 2, 4, 5, 6], 4));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
// console.log(binarySearch([1, 2, 3, 4, 5], 4));
// console.log(binarySearch([1, 2, 3, 4], 4));
