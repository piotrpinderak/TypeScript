// Exercise 26: Contains value

function containsValue<T>(arr: T[], value: T): boolean {
  return arr.includes(value);
}

console.log(containsValue([10, 20, 30, 40, 50], 30));
