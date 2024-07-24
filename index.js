// LinkedList is a factory, which represents the full list
function LinkedList() {
  let head = null;

  addLast(head, value);
  addFirst(head, value);
}

// Node is a factory, containing a value property and a link to the nextNode, set both as null by default
function Node(value) {
  return { value, link: null };
}

// Adds a new node to the end of the list
function addLast(head, value) {
  let newNode = new Node(value);
  if (head == null) {
    head = newNode;
  } else {
    let current = head;
    while (current.link !== null) {
      current = current.link;
    }
    current.link = newNode;
    return newNode;
  }
}

// Adds a new node to the start of the list
function addFirst(head, value) {
  let newNode = new Node(value);
  newNode.link = head;
  return newNode;
}

module.exports = {
  Node,
  addLast,
  addFirst,
};
