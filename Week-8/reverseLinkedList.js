const LinkedList = require("./LinkedList");

const reverseLinkedList = (ll) => {
  let current = ll.head;
  ll.tail = ll.head;
  let prev = null;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  ll.head = prev;
  return ll;
};

const ll = new LinkedList([]);

const reversedLl = reverseLinkedList(ll);

reversedLl.print();
console.log(reversedLl);

// TC - O(N)
// SC - O(1)
