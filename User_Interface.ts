/**
 * Create a User interface and a function that:
 * 
 * - Accepts a User object containing name and email
 * - May optionally include an age field (number)
 * - Returns a string: “User {name} with email {email} is {age} years old”
 * - If age is not provided, returns: “User {name} with email {email}”
 * 
 * Test data:
 * { name: "Jan", email: "jan@test.com", age: 30 }
 * { name: "Anna", email: "anna@domain.com" }
 * { name: "Marek", email: "m@x.com", age: 45 }
 * { name: "Ola", email: "ola@mail.pl" }
 * { name: "Ela", email: "ela@wp.pl", age: 22 }
 */

// Interface defining a user
interface User {
  name: string;
  email: string;
  age?: number;
}

// Function that returns a formatted description of the user
function describeUser(user: User): string {
  if (user.age !== undefined) {
    return `User ${user.name} with email ${user.email} is ${user.age} years old`;
  } else {
    return `User ${user.name} with email ${user.email}`;
  }
}

// Test data
const users: User[] = [
  { name: "Jan", email: "jan@test.com", age: 30 },
  { name: "Anna", email: "anna@domain.com" },
  { name: "Marek", email: "m@x.com", age: 45 },
  { name: "Ola", email: "ola@mail.pl" },
  { name: "Ela", email: "ela@wp.pl", age: 22 },
];

// Display results
users.forEach(user => {
  console.log(describeUser(user));
});
