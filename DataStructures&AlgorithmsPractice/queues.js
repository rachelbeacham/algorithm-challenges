class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {

    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    return this.head !== null ? this.head.data : null;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
    if (this.head === null) {
      this.head = node;
    }
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return data;
  }
}

const queue = new Queue();
const array = [1, 2, 3, 4, 5, 6];
array.forEach((a) => queue.add(a))
console.log(queue);
