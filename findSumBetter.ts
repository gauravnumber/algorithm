function findSumBetter(arr: number[], weight: number): number[] | -1 {
  let hashtable: {
    [field: number]: number;
  } = {};

  for (let i = 0, il = arr.length; i < il; i++) {
    let currentElement: number = arr[i],
      difference: number = weight - currentElement;

    // console.log(hashtable);
    // if (hashtable[currentElement]) {
    // if (currentElement in hashtable) {
    if (hashtable.hasOwnProperty(currentElement)) {
      return [hashtable[currentElement], i];
    } else {
      hashtable[difference] = i;
    }
  }

  return -1;
}

console.log(findSumBetter([1, 2, 3, 7, 5], 12)); // => [3, 4]
console.log(findSumBetter([1, 2, 3, 7, 5], 7)); // => [1, 4]
console.log(findSumBetter([1, 2, 3, 4, 5], 9)); // => [3, 4]
console.log(findSumBetter([2, 4, 1, 6], 6)); // => [0, 1]
console.log(findSumBetter([2, 4, 1, 7], 9)); // => [0, 3]
