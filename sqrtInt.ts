function sqrtInt(number: number) {
  if (number === 0 || number === 0) return number;

  let start = 1,
    end = number,
    ans;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // console.log({ start, mid, end });

    if (mid * mid === start) return mid;
    else if (mid * mid < number) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
      ans = mid;
    }
  }

  return ans;
  // return mid;
}

// console.log(sqrtInt(3));
// console.log(sqrtInt(2));
console.log(sqrtInt(49));
// console.log(sqrtInt(64));
// console.log(sqrtInt(81));
