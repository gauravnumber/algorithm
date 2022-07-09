const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      if (canConstruct(target.slice(word.length), wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
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
    "eeeeee",
    "eeeeeee",
    "eeeeeeee",
    "eeeeeeeee",
    "eeeeeeeeee",
    "eeeeeeeeeee",
  ]),
); // => false
