// Exercise 24: Count vowels

function countVowels(str: string): number {
  const vowels = new Set(["a", "e", "i", "o", "u", "y"]);
  let count = 0;

  for (const ch of str.toLowerCase()) {
    if (vowels.has(ch)) count++;
  }

  return count;
}

console.log(countVowels("hello world"));
