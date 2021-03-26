const linkedListClasses = require('./linked-list');
const { node, linkedList } = linkedListClasses;
// const linkedListNodeInstance = new linkedListClasses.Node();

let nodeA = new node("A");
let nodeB = new node("B");
let nodeC = new node("C");
let nodeD = new node("D");

test('new node(5) creates a node with data === 5', () => {
  const exampleNode = new node(5);
  expect(exampleNode.data).toBe(5);
});

test('new linkedList(nodeA, nodeB, nodeC, nodeD) creates a list with countNodes(nodeA) === 4', () => {
  const exampleList = new linkedList(nodeA, nodeB, nodeC, nodeD);
  expect(exampleList.countNodes(nodeA)).toBe(4);
});

test('find a node with data value "C" returns an object', () => {
  const exampleList = new linkedList(nodeA, nodeB, nodeC, nodeD);
  let testFunction = exampleList.returnNodeWith("C", nodeA)
  let result = typeof testFunction === 'object';
  expect(result).toBe(true);
});

test('find a node with data value "C" returns an object with data property === "C"', () => {
  const exampleList = new linkedList(nodeA, nodeB, nodeC, nodeD);
  let testFunction = exampleList.returnNodeWith("C", nodeA)
  let result = testFunction.data === "C"
  expect(result).toBe(true);
})