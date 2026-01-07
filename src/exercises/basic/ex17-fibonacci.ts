// Exercise 17: Fibonacci sequence

function fibonacci(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const seq = [0, 1];
  for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
  return seq;
}

console.log(fibonacci(10));
