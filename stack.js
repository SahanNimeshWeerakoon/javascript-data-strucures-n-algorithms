// sequential collection with LIFO
// abstract data type (defined from the behaviour, rather than a mathematical model).
// uses = undo operations, breadcrumbs of web, call stack in js runtime, expression conversion


class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`${element} is added to the position ${this.count}`);
        this.count++;

        return this.count - 1;
    }

    pop() {
        const removedItem = this.items[this.count-1];
        console.log(`${removedItem} is removed from position ${this.count}`);
        this.count--;
        return removedItem;
    }

    peek() {
        console.log(`Last elemen on the stack is ${this.items[this.count-1]} which is at the position ${this.count}`);
        return this.items[this.count-1]
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    print() {
        return this.items.join(' ');
    }
}