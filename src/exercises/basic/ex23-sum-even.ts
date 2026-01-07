// Exercise 23: Sum even numbers

function sumEven(arr: number[]): number {
  return arr.filter(n => n % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));
