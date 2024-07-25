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
