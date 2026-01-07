// Exercise 19: Palindrome check

function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
