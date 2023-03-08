const Stack = require("./Stack");

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  // this O(N) method for enqueue ensures the FIFO principle is maintained for queue
  // pushing the first entered element always on top to pop while dequeue
  enqueue(value) {
    // Move all elements from s1 to s2
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.peek());
      this.s1.pop();
    }
    // Push item into s1
    this.s1.push(value);

    // Push everything back to s1
    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.peek());
      this.s2.pop();
    }
  }
  //TC - O(N)
  //SC - O(1)

  dequeue() {
    // if first stack is empty
    if (this.s1.isEmpty()) {
      return -1;
    }
    // Return top of s1
    else {
      const value = this.s1.peek();
      this.s1.pop();
      return value;
    }
  }
  //TC - O(1)
  //SC - O(1)
}

const queueUsingStack = (arr) => {
  const q = new Queue();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      q.enqueue(arr[i + 1]);
      i++;
    } else if (arr[i] === 2) {
      console.log(q.dequeue());
    }
  }
  return q;
};

const arr = [1, 1, 1, 2, 1, 4, 2, 2, 2];

queueUsingStack(arr);
