/**
 * Find position of sum of given number.
 * @param arr number[]
 * @param weight number
 * @return positon number[]
 * @example
 *  => Input [1, 2, 3, 4, 5],  weight 9
 *  => Output [3, 4]
 */
function findSum(arr: number[], weight: number): number[] | -1 {
  for (let i = 0, il = arr.length; i < il; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] + arr[j] === weight) {
        return [j, i];
      }
    }
  }

  return -1;
}

console.log(findSum([1, 2, 3, 7, 5], 5));
// console.log(findSum([1, 2, 3, 7, 5], 7));
// console.log(findSum([1, 2, 3, 4, 5], 9));
console.log(findSum([2, 4, 1, 6], 6));
