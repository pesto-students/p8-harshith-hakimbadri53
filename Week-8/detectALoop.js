const LinkedList = require("./LinkedList");

// created a method to add a loop at desired position
LinkedList.prototype.addLoop = function (x) {
  if (x <= 0 || x > this.size) {
    return;
  }
  let temp = this.head;
  for (let i = 0; i < x - 1; i++) {
    temp = temp.next;
  }
  this.tail.next = temp;
};

const detectALoop = (ll) => {
  let temp = ll.head;
  let counter = 0;
  while (temp !== null) {
    if (counter >= ll.size) {
      return true;
    }
    temp = temp.next;
    counter++;
  }
  return false;
};

const detectALoopWithTwoPointer = (ll) => {
  let slowPtr = ll.head;
  let fastPtr = ll.head;
  let counter = 0;
  while (slowPtr !== null && fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      return true;
    }
  }
  return false;
};

const ll = new LinkedList([1, 3, 4, 12, 123, 123, 123, 34, 56]);

ll.addLoop(4);

console.log(detectALoop(ll));
console.log(detectALoopWithTwoPointer(ll));

// TC - O(N)
// SC - O(1)
