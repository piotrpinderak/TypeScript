// Exercise 12: Leap year

function isLeapYear(year: number): boolean {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

const year = 2024;
console.log(`${year} is ${isLeapYear(year) ? "leap" : "not leap"}`);