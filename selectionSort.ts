function selectionSort(array: number[]): number[] {
  let len = array.length,
    min;

  for (let i = 0; i < len; i++) {
    min = i;

    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) min = j;
    }

    if (i != min) [array[i], array[min]] = [array[min], array[i]];
  }

  return array;
}

// console.log(selectionSort([62, 13, 902, 31, 4, 25]));
console.log(selectionSort([6, 1, 2, 3, 4, 5]));
