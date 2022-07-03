const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill().map(() => []);
  table[0] = [[]];

  for (let i = 0; i < target.length + 1; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const result = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...result);
      }
    }
  }

  return table[target.length];
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purp"])); // => [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ]
console.log(allConstruct("leetcode", ["leet", "code"])); // => [ [ 'leet', 'code' ] ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // => [ [ 'abc', 'def' ] ]
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeeee"])) // => 0
