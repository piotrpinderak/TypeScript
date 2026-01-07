// Exercise 14: Largest number in array

function largestNumber(arr: number[]): number {
  return Math.max(...arr);
}

console.log(largestNumber([10, 25, 5, 30, 15]));