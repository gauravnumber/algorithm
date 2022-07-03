const countConstruct = (target, wordBank, memo = {}) => {
  if (target in wordBank) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWaysForRest = countConstruct(suffix, wordBank, memo);

      totalCount += numWaysForRest;
      // memo[target] = numWaysForRest
    }
  }

  memo[target] = totalCount;

  // console.log(`memo`, memo)
  return totalCount;
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
  ]),
); // => 0
