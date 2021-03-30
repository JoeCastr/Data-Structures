const stackClasses = require('./stack');
const { Node, Stack } = stackClasses;

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');

test('new Node(5) creates a Node with data === 5', () => {
  const exampleNode = new Node(5);
  expect(exampleNode.data).toBe(5);
});

test('adding nodeD to the front of an empty stack assigns the front property to nodeD', () => {
  const testStack = new Stack();
  testStack.push(nodeD);
  expect(testStack.front.data).toBe('D');
});

test('adding nodeD to the front of an empty stack assigns the back property to nodeD', () => {
  const testStack = new Stack();
  testStack.push(nodeD);
  expect(testStack.back.data).toBe('D');
});

test('In a two-node stack (C and D), pop() assigns the front property to nodeD', () => {
  const testStack = new Stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.pop();
  expect(testStack.front.data).toBe('D');
});

test('In a two-node stack (C and D), pop() assigns the back property to nodeD', () => {
  const testStack = new Stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.pop();
  expect(testStack.back.data).toBe('D');
});

test('In a three-node stack (B, C, and D), pop() assigns the back property to nodeD', () => {
  const testStack = new Stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.push(nodeB);
  testStack.pop();
  expect(testStack.back.data).toBe('D');
});

test('In a three-node stack (B, C, and D), push(nodeA) assigns the front property to nodeA', () => {
  const testStack = new Stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.push(nodeB);
  testStack.push(nodeA);
  expect(testStack.front.data).toBe('A');
});
