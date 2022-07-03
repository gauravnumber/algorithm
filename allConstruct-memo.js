const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
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

  memo[target] = result;
  return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purp"])); // => [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ]
console.log(allConstruct("leetcode", ["leet", "code"])); // => [ [ 'leet', 'code' ] ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // => [ [ 'abc', 'def' ] ]
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeeee"])) // => 0
