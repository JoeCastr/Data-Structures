class Node {
  constructor(data) {
    this.data = data;
    this.next;
  }
}

class LinkedList {
  constructor(...nodes) {
    for (let index = 0; index < nodes.length - 1; index += 1) {
      let current = nodes[index];
      let next = nodes[index + 1];

      current.next = next;
    }
  }

  countNodes(head) {
    let count = 1;
    let current = head;

    while (current.next) {
      count += 1;
      count(current.next)
    }

    return count;
  }
}