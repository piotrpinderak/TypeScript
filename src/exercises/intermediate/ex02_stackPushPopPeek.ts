class Stack<T> {
    private items: T[] = [];

    push(value: T): void {
        this.items.push(value);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length -1];
    }
}


const stack = new Stack<number>();

stack.push(10);
stack.push(45);
stack.pop();
const roof = stack.peek();

console.log(`Top =`, roof)