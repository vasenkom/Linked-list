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
    let newNode = Node(value);
    length++;

    if (headNode == null) {
      headNode = newNode;
      return headNode;
    } else {
      newNode.nextNode = headNode;
      headNode = newNode;
    }
  }

  // append(value) adds a new node to the end of the list
  function append(value) {
    if (headNode == null) {
      prepend(value);
    } else {
      let pointer = headNode;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = Node(value);
      length++;
    }
  }

  // size returns the total number of nodes in the list
  function size() {
    if (headNode == null) {
      return null;
    }
    return length;
  }

  // head returns the first node in the list
  function head() {
    return headNode.value;
  }

  // tail returns the last node in the list
  function tail() {
    if (headNode == null) return null;
    let pointer = headNode;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  }

  // at(index) returns the node at the given index
  function at(index) {
    if (index < 0 || index >= length) return null;
    let pointer = headNode;
    for (let n = 0; n < index; n++) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  }

  // pop removes the last element from the list
  function pop() {
    if (length == 0) {
      return null;
    }

    let newLastNode = headNode;
    for (let i = 0; i < length - 2; i++) {
      newLastNode = newLastNode.nextNode;
    }

    newLastNode.nextNode = null;
    length--;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false
  function contains(value) {
    let pointer = headNode;
    while (pointer.nextNode !== null) {
      if (value == pointer.value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    // check the tail node as well
    return pointer.value === value ? true : false;
  }

  // find(value) returns the index of the node containing value, or null if not found
  function find(value) {
    let pointer = headNode;
    let index = 0;
    while (pointer.nextNode !== null) {
      if (value == pointer.value) {
        return index;
      }
      pointer = pointer.nextNode;
      index++;
    }
    // check the tail node as well
    return pointer.value === value ? index : null;
  }

  // toString represents your LinkedList objects as strings
  function toString() {
    let pointer = headNode;
    let string = "";
    while (pointer.nextNode !== null) {
      string += "(" + pointer.value + ") ->";
      pointer = pointer.nextNode;
    }
    string += "(" + pointer.value + ") -> null";
    return string;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index
  function insertAt(value, index) {
    let newNode = Node(value);
    let pointer = headNode;
    for (let y = 0; y < index - 1; y++) {
      pointer = pointer.nextNode;
    }
    newNode.nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
  }

  //   removeAt(index) that removes the node at the given index
  function removeAt(index) {
    let pointer = headNode;
    if (length == 0) {
      return null;
    } else {
      for (let y = 0; y < index; y++) {
        pointer = pointer.nextNode;
      }
      let wantToDelete = at(index - 1);
      wantToDelete.nextNode = pointer.nextNode;
      length--;
    }
  }

  return {
    prepend,
    append,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

module.exports = { Node, LinkedList };
