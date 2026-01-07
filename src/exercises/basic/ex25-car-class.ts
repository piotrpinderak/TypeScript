// Exercise 25: Car class

class Car {
  constructor(
    public brand: string,
    public year: number
  ) {}
}

const myCar = new Car("Toyota", 2020);

console.log(`Brand: ${myCar.brand}, Year: ${myCar.year}`);
