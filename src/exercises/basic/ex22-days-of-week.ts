// Exercise 22: Days of week enum

enum DaysOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const today: DaysOfWeek = DaysOfWeek.Wednesday;

console.log(`Today is: ${today}`);
