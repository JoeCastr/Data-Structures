const queueClasses = require('./queue');
const { Node, Queue } = queueClasses;

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');

test('new Node(5) creates a node with data === 5', () => {
  const exampleNode = new Node(5);
  expect(exampleNode.data).toBe(5);
});

test('adding nodeD to the front of an empty queue assigns the front property to nodeD', () => {
  const testQueue = new Queue();
  testQueue.enqueue(nodeD);
  expect(testQueue.front.data).toBe('D');
});

test('adding nodeD to the front of an empty queue assigns the back property to nodeD', () => {
  const testQueue = new Queue();
  testQueue.enqueue(nodeD);
  expect(testQueue.back.data).toBe('D');
});

test('In a two-node queue (C and D), removing nodeD from the back of the queue assigns the front property to nodeC', () => {
  const testQueue = new Queue();
  testQueue.enqueue(nodeD);
  testQueue.enqueue(nodeC);
  testQueue.dequeue();
  expect(testQueue.front.data).toBe('C');
});

test('In a two-node queue (C and D), removing nodeD from the back of the queue assigns the back property to nodeC', () => {
  const testQueue = new Queue();
  testQueue.enqueue(nodeD);
  testQueue.enqueue(nodeC);
  testQueue.dequeue();
  expect(testQueue.back.data).toBe('C');
});
