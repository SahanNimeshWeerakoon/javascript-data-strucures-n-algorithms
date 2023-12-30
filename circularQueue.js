class circularQueue {
    constructor(size) {
        this.items = [];
        this.size = size;
        this.front = 0;
        this.rear = 0;
    }

    isFull() {
        return this.size === (this.rear-this.front);
    }
}