const stackClasses = require('./stack');
const { node, stack } = stackClasses;

let nodeA = new node("A");
let nodeB = new node("B");
let nodeC = new node("C");
let nodeD = new node("D");

test('new node(5) creates a node with data === 5', () => {
  const exampleNode = new node(5);
  expect(exampleNode.data).toBe(5);
});

test('adding nodeD to the front of an empty stack assigns the front property to nodeD', () => {
  let testStack = new stack();
  testStack.push(nodeD);
  expect(testStack.front.data).toBe("D");
})

test('adding nodeD to the front of an empty stack assigns the back property to nodeD', () => {
  let testStack = new stack();
  testStack.push(nodeD)
  expect(testStack.back.data).toBe("D");
})

test('In a two-node stack (C and D), pop() assigns the front property to nodeD', () => {
  let testStack = new stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.pop();
  expect(testStack.front.data).toBe("D");
});

test('In a two-node stack (C and D), pop() assigns the back property to nodeD', () => {
  let testStack = new stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.pop();
  expect(testStack.back.data).toBe("D");
});

test('In a three-node stack (B, C, and D), pop() assigns the back property to nodeD', () => {
  let testStack = new stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.push(nodeB);
  testStack.pop();
  expect(testStack.back.data).toBe("D")
});

test('In a three-node stack (B, C, and D), push(nodeA) assigns the front property to nodeA', () => {
  let testStack = new stack();
  testStack.push(nodeD);
  testStack.push(nodeC);
  testStack.push(nodeB);
  testStack.push(nodeA);
  expect(testStack.front.data).toBe("A")
});