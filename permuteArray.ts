function swap(strArr: string[], index1: number, index2: number) {
  let temp: string = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
}

function permute(strArr: string[], begin: number, end: number) {
  if (begin == end) console.log(strArr);
  else {
    for (let i = begin; i < end + 1; i++) {
      // swap(strArr, begin, i);
      [strArr[begin], strArr[i]] = [strArr[i], strArr[begin]];
      permute(strArr, begin + 1, end);
      // swap(strArr, begin, i);
      [strArr[begin], strArr[i]] = [strArr[i], strArr[begin]];
    }
  }
}

function permuteArray(strArr: string[]) {
  permute(strArr, 0, strArr.length - 1);
}

console.log(permuteArray(["A", "C", "D"]));
// console.log(permuteArray(["A", "B", "C"]));
