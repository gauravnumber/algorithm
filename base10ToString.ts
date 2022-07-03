function base10ToString(n: number) {
  let binaryString: string = "";

  function base10ToStringHelper(n: number) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      base10ToStringHelper(Math.floor(n / 2));
      base10ToStringHelper(n % 2);
    }
  }

  base10ToStringHelper(n);

  return binaryString;
}

console.log(base10ToString(232));

// for (let i = 0; i < 32; i++) {
//   console.log(base10ToString(i));
// }
