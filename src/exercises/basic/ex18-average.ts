// Exercise 18: Average of array

function calculateAverage(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50]));
