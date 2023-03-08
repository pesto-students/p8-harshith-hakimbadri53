class Stack {
  constructor() {
    this.st = [];
  }

  push(value) {
    this.st.push(value);
  }
  pop() {
    this.st.pop();
  }
  length() {
    return this.st.length;
  }
  peek() {
    return this.st[this.length() - 1];
  }
  search(elementToFind) {
    return this.st.includes(elementToFind);
  }
  isEmpty() {
    return this.length() === 0;
  }
}

module.exports = Stack;
