// Exercise 21: Sort array ascending

function sortArray(arr: number[]): number[] {
  return [...arr].sort((a, b) => a - b);
}

console.log(sortArray([5, 2, 9, 1, 5, 6]));