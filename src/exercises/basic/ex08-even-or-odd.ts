// Exercise 8: Even or odd

function evenOrOdd(num: number): void {
  const type = num % 2 === 0 ? "even" : "odd";
  console.log(`${num} is ${type}`);
}

evenOrOdd(4);
