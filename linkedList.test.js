const { Node, addLast, addFirst } = require("./index");

test("should add a node to the start of a non-empty list", () => {
  let initialNode = Node(1); // create a node with value 1 (1)
  initialNode.link = Node(2); // add a link to a node with a value 2 (1 -> 2)
  let valueOfNewHead = 0;
  let newHead = addFirst(initialNode, valueOfNewHead); // add a new head with value 0 (0 -> 1 -> 2)
  expect(newHead.value).toBe(valueOfNewHead); // check if value set correct
  expect(newHead.link).toBe(initialNode); // check if new head node is correctly linked to the previous head node
});
