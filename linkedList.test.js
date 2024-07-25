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
