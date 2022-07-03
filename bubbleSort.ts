function bubbleSort(array: number[]): number[] {
  for (let i = 0, il = array.length; i < il; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        // Swapping
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

// console.log(bubbleSort([62, 13, 902, 31, 4, 25]));
console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
