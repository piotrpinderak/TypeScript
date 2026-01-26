class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
      return this.items.length === 0;  
    }
}

const queue = new Queue<number>();

queue.enqueue(444);
queue.enqueue(445);

const removed = queue.dequeue();
console.log(`Dequed:`,removed);
console.log(`Empty = false, Not Empty = true <-->`, queue.isEmpty());