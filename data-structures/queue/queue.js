class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let nodeA = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(data) {
    data.next = this.front

    if ((!this.front) && (!this.back)) {
      this.front = data;
      this.back = data;
    }

    this.front = data;
  };

  dequeue() {
    let current = this.front;

    while (current.next.next != null) {
      current = current.next
    }

    delete this.back;
    this.back = current;
  };
}

module.exports = {
  node: Node,
  queue: Queue
}