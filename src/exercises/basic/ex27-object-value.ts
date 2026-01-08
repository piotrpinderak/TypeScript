//Object.entries()
function printObject(obj: Record<string, any>) {
    const entries = Object.entries(obj);

    for(const [key, value] of entries) {
        console.log(`${key} : ${value}`);
    }
}

const person = { name: "Alice", age: 25, city: "New York" };
printObject(person);

// for ... in

function printObjectA(obj: Record<string, any>) {
    for(const key in obj) {
        const value = obj[key];
        console.log(`${key} : ${value}`);
    }
}

const personA = { name: "Alice", age: 25, city: "New York", car: "VW", V: "3.0L" };
printObjectA(personA);