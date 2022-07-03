function sqrtDouble(number: number) {
  let threshold = 0.1,
    start = 0,
    end = number,
    mid;

  while (end - start > threshold) {
    mid = (start + end) / 2;

    if (mid * mid > number) end = mid;
    else start = mid;
  }

  return mid;
}

// /console.log(sqrtDouble(987));
console.log(sqrtDouble(9));
// console.log(sqrtDouble(8));
