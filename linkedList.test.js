const { Node, LinkedList } = require("./index");

test("Test if nodes are being added to List", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");
  expect(list.toString()).toBe(
    "(dog) ->(cat) ->(parrot) ->(hamster) ->(snake) ->(turtle) -> null"
  );
});

test("test if function prepend adds a new node to the start of the list", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.prepend("owl");
  expect(list.toString()).toBe("(owl) ->(dog) ->(cat) -> null");
});

test("test if function size correctly returns the length of the list", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("snake");
  list.append("turtle");
  expect(list.size()).toBe(4);
});

test("test if function size correctly returns the length of the list if no nodes are added", () => {
  const list = new LinkedList();
  expect(list.size()).toBe(null);
});

test("test if function head returns the first node in the list and tail returns the last node in the list", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("snake");
  list.append("turtle");
  expect(list.head()).toBe("dog");
  expect(list.tail()).toBe("turtle");
});

test("test if at(index) returns the node at the given index", () => {
  const list = new LinkedList();
  list.append("cake");
  list.append("pizza");
  list.append("pasta");
  list.append("salad");
  expect(list.at(1)).toBe("pizza");
  expect(list.at(0)).toBe("cake");
});
