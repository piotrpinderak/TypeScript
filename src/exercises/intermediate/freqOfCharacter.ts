function charFrequency(str: string): Record<string, number> {
  const freq: Record<string, number> = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }
  return freq;
}

// Get argument from console
const input = process.argv[2]; // 3rd arg of array is 1st arg of user

if (!input) {
  console.log("Use example: npx tsx freqOfCharacter.ts exampleWord");
} else {
  console.log(charFrequency(input));
}