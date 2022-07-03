function isPalindromeRecursive(word: string) {
  return isPalindromeHelper(word, 0, word.length - 1);
}

function isPalindromeHelper(
  word: string,
  beginPos: number,
  endPos: number,
): boolean {
  if (beginPos >= endPos) return true;
  if (word.charAt(beginPos) != word.charAt(endPos)) return false;
  else return isPalindromeHelper(word, beginPos + 1, endPos - 1);
}

console.log(isPalindromeRecursive("Hi"));
console.log(isPalindromeRecursive("aibohphobia"));
