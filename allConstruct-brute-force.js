const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffixWay = target.slice(word.length);
      const possibleWay = allConstruct(suffixWay, wordBank);
      const possibleWayResult = possibleWay
        .map((subresult) => [word, ...subresult]);

      result.push(...possibleWayResult);
    }
  }

  return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purp"])); // => 3
console.log(allConstruct("leetcode", ["leet", "code"])); // => 1
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // => 1
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ]),
); // => 0
