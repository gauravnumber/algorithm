const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < target.length + 1; i++) {
    if (table[i]) {
      for (const word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(canConstruct("leetcode", ["leet", "code"])); // => true
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // => true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ]),
); // => false
console.log(canConstruct("skateboard", ["bo", "rd", "ate"])); // => false
