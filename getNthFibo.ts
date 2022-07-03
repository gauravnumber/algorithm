function getNthFibo(n: number) {
  if (n <= 1) return n;

  let sum = 0,
    last = 1,
    lastlast = 0;

  for (let i = 0; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }

  return sum;
}

for (let i = 0; i < 10; i++) {
  console.log(i, getNthFibo(i));
}
