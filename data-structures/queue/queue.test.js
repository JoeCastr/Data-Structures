const queueClasses = require('./queue');
const { node, queue } = queueClasses;

let nodeA = new node("A");
let nodeB = new node("B");
let nodeC = new node("C");
let nodeD = new node("D");

test('new node(5) creates a node with data === 5', () => {
  const exampleNode = new node(5);
  expect(exampleNode.data).toBe(5);
});

test('adding nodeD to the front of the queue assigns the front property to nodeD', () => {
  let testQueue = new queue();
  testQueue.enqueue(nodeD);
  expect(testQueue.front.data).toBe("D");
})

test('adding nodeD to the front of the queue assigns the back property to nodeD', () => {
  let testQueue = new queue();
  testQueue.enqueue(nodeD)
  expect(testQueue.back.data).toBe("D");
})

test('In a two-node queue (C and D), removing nodeD from the front of the queue assigns the front property to nodeC', () => {
  let testQueue = new queue();
  testQueue.enqueue(nodeD);
  testQueue.enqueue(nodeC);
  testQueue.dequeue();
  expect(testQueue.front.data).toBe("C");
});

test('In a two-node queue (C and D), removing nodeD from the front of the queue assigns the back property to nodeC', () => {
  let testQueue = new queue();
  testQueue.enqueue(nodeD);
  testQueue.enqueue(nodeC);
  testQueue.dequeue();
  expect(testQueue.back.data).toBe("C");
});
