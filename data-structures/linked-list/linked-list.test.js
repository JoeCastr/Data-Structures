const linkedListClasses = require('./linked-list');
const { node, linkedList } = linkedListClasses;
// const linkedListNodeInstance = new linkedListClasses.Node();

test('creates a node with data === 5', () => {
  const exampleNode = new node(5)
  expect(exampleNode.data).toBe(5)
});