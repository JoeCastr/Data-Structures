class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.front = null;
    this.back = null;
  }

  push(data) {
    data.next = this.front;

    if ((!this.front) && (!this.back)) {
      this.front = data;
      this.back = data;
    }

    this.front = data;
  };

  pop() {
    let newFront = this.front.next;
    delete this.front;
    this.front = newFront
  };
}

module.exports = {
  node: Node,
  stack: Stack
}