class Node {
  constructor(val, next = null) {
    this.data = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val) {
    if (val instanceof Array) {
      if (val.length === 0) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        return;
      }
      let temp = new Node(val[0]);
      this.head = temp;
      this.size = 1;
      for (let i = 1; i < val.length; i++) {
        const newNode = new Node(val[i]);
        temp.next = newNode;
        temp = temp.next;
        this.size++;
      }
      this.tail = temp;
      return;
    }
    if (val) {
      this.head = new Node(val);
      this.tail = this.head;
      this.size = 1;
      return;
    } else {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }
  }

  length() {
    return this.size;
  }

  append(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  appendAtBegin(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insert(val, index) {
    if (index > this.size) {
      console.log("Index Out of Bound");
      return;
    }
    if (index === this.size) {
      this.append(val);
      return;
    }
    if (index === 0) {
      this.appendAtBegin(val);
      return;
    }
    const newNode = new Node(val);

    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }

  print() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

module.exports = LinkedList;
