function createStack() {
  // pulled out items from the object that was returned to avoid the access to items
  let items = [];
  // returned the rest of the object containing push and pop functions which still have access to items via closure
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined
