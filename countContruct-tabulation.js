const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < target.length + 1; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  // console.log(`table`, table)
  return table[target.length];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purp"])); // => 3
console.log(countConstruct("leetcode", ["leet", "code"])); // => 1
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // => 1
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
); // => 0
