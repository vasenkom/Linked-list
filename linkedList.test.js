const { Node, LinkedList } = require("./index");

test("Test if nodes are being added to List", () => {
  const list = LinkedList();
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
  const list = LinkedList();
  list.append("dog");
  list.append("cat");
  list.prepend("owl");
  expect(list.toString()).toBe("(owl) ->(dog) ->(cat) -> null");
});

test("test if function size correctly returns the length of the list", () => {
  const list = LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("snake");
  list.append("turtle");
  expect(list.size()).toBe(4);
});

test("test if function size correctly returns the length of the list if no nodes are added", () => {
  const list = LinkedList();
  expect(list.size()).toBe(null);
});

test("test if function head returns the first node in the list and tail returns the last node in the list", () => {
  const list = LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("snake");
  list.append("turtle");
  expect(list.head()).toBe("dog");
  expect(list.tail()).toBe("turtle");
});

test("test if at(index) returns the node at the given index", () => {
  const list = LinkedList();
  list.append("cake");
  list.append("pizza");
  list.append("pasta");
  list.append("salad");
  expect(list.at(1)).toBe("pizza");
  expect(list.at(0)).toBe("cake");
});

test("test if pop removes the last element from the list", () => {
  const list = LinkedList();
  list.append("cake");
  list.append("pizza");
  list.append("pasta");
  list.append("salad");
  list.pop();
  expect(list.toString()).toBe("(cake) ->(pizza) ->(pasta) -> null");
});

test("check if contains(value) returns true if the passed in value is in the list and otherwise returns false", () => {
  const list = LinkedList();
  list.append("chicken");
  list.append("star");
  list.append("tea");
  expect(list.contains("tea")).toBe(true);
  expect(list.contains("cat")).toBe(false);
});

test("test if insertAt(value, index) inserts a new node with the provided value at the given index", () => {
  const list = new LinkedList();
  list.append("chicken");
  list.append("cat");
  list.append("dog");
  list.insertAt("tomato", 2);
  expect(list.toString()).toBe("(chicken) ->(cat) ->(tomato) ->(dog) -> null");
});

test("test if removeAt(index) removes the node at the given index", () => {
  const list = new LinkedList();
  list.append("chicken");
  list.append("cat");
  list.append("mouse");
  list.append("dog");
  list.append("hamster");
  list.removeAt(3);
  expect(list.toString()).toBe(
    "(chicken) ->(cat) ->(mouse) ->(hamster) -> null"
  );
});
