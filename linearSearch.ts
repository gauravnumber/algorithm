function linearSearch(array: number[], n: number) {
  for (let i = 0, il = array.length; i < il; i++) {
    if (array[i] == n) return true;
  }

  return false;
}

console.log(linearSearch([1, 2, 3, 4], 3));
console.log(linearSearch([1, 2, 3, 4], 5));
