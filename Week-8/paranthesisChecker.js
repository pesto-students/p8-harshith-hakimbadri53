// loop through char of string
// if the char is one of opening brackets push in the stack
// else check if the closing bracket matches the opening bracket at top, if yes pop and continue else return false
// if the stack is empty at last, return true else false

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
}

const checkOpeningBracket = (bracket) => {
  if (bracket === "{" || bracket === "[" || bracket === "(") {
    return true;
  } else {
    return false;
  }
};
const checkClosingBracket = (bracket, stackTop) => {
  if (stackTop === "(" && bracket === ")") {
    return true;
  }
  if (stackTop === "[" && bracket === "]") {
    return true;
  }
  if (stackTop === "{" && bracket === "}") {
    return true;
  } else {
    return false;
  }
};
const parenthesisChecker = (arr) => {
  const stack = new Stack();
  for (let el of arr) {
    if (checkOpeningBracket(el) || stack.length() === 0) {
      stack.push(el);
    } else if (checkClosingBracket(el, stack.peek())) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length() === 0;
};

const arr = "((()))(";
console.log(parenthesisChecker(arr));

// Time Complexity -  O(N)
// Space Complexity -  O(N)
