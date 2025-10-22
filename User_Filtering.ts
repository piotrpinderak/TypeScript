/**
 * Create a function that:
 *
 * - Accepts an array of User objects
 * - Each User has: name (string), age (number), active (boolean)
 * - Filters only active users
 * - Filters only users older than 18
 * - Returns an array of names (string[])
 *
 * Test data:
 * [
 *   { name: "Jan", age: 25, active: true },
 *   { name: "Anna", age: 17, active: true },
 *   { name: "Marek", age: 40, active: false },
 *   { name: "Ola", age: 22, active: true },
 *   { name: "Ela", age: 18, active: true }
 * ]
 * → ["Jan", "Ola"]
 */

// Interface defining a user
interface User {
  name: string;
  age: number;
  active: boolean;
}

// Function that filters and returns names of eligible users
function getEligibleUserNames(users: User[]): string[] {
  return users
    .filter((user) => user.active && user.age > 18)
    .map((user) => user.name);
}

// Test data
const testUsers: User[] = [
  { name: "Jan", age: 25, active: true },
  { name: "Anna", age: 17, active: true },
  { name: "Marek", age: 40, active: false },
  { name: "Ola", age: 22, active: true },
  { name: "Ela", age: 18, active: true },
];

// Display result
console.log(getEligibleUserNames(testUsers));

/**
* reduce() version
*
array.reduce((accumulator, currentValue) => {
  // operation
  return updatedAccumulator;
}, initialValue);
*
*
*/

interface User {
  name: string;
  age: number;
  active: boolean;
}

function getEligibleUserNamess(users: User[]): string[] {
  return users.reduce((acc: string[], user) => {
    if (user.active && user.age > 18) {
      acc.push(user.name);
    }
    return acc;
  }, []);
}

// Test data
const testUserss: User[] = [
  { name: "Janusz", age: 25, active: true },
  { name: "Anna", age: 17, active: true },
  { name: "Marek", age: 40, active: false },
  { name: "Olga", age: 22, active: true },
  { name: "Ela", age: 18, active: true },
];

console.log(getEligibleUserNamess(testUserss)); //
