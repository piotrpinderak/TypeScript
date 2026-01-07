// Exercise 11: Sum array

function sumArray(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));