function sqrtIntNaive(number: number): number {
  if (number === 0 || number === 1) return number;
  let i = 1,
    square = 1;

  while (square < number) {
    if (square === number) return i;
    i++;

    square = i * i;
  }

  return i;
}

// console.log(sqrtIntNaive(2));
// console.log(sqrtIntNaive(49));
console.log(sqrtIntNaive(64));
