// Exercise 13: Person interface

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Alice",
  age: 25,
};

console.log(`Name: ${person.name}, Age: ${person.age}`);