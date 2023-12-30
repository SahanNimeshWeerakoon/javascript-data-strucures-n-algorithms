// FIFO
// abstract data model (defined from the behaviour. not from the mathematical model)
// uses = printers, cpu tasks, callback stack

class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        let itemToRemove = this.items[this.front];
        this.front++;
        return itemToRemove;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    print() {
        return this.items.toString();
    }
}
