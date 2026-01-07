// Exercise 9: Reverse string

function reverseString(word: string): string {
  return word.split("").reverse().join("");
}

console.log(reverseString("Piotr"));