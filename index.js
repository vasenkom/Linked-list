// Node is a factory, containing a value property and a link to the nextNode, set both as null by default.
function Node(input) {
  return { value: input || null, nextNode: null };
}

// LinkedList is a factory, which will represent the full list
function LinkedList() {
  let headNode = null;
  let length = 0;

  // prepend(value) adds a new node to the start of the list
  function prepend(value) {
    let newNode = new Node(value);
    length++;
    if (headNode == null) {
      headNode = newNode;
      return headNode;
    }
    let pointer = head;

    // traversing
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
    return newNode;
  }

  // append(value) adds a new node to the end of the list
  function append(value) {}
}

module.exports = {
  prepend,
  Node,
};
