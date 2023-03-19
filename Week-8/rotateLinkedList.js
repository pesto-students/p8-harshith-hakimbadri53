const LinkedList = require("./LinkedList");

const rotateLinkedList = (ll, k) => {
  for (let i = 0; i < k; i++) {
    ll.tail.next = ll.head;
    ll.head = ll.head.next;
    ll.tail = ll.tail.next;
    ll.tail.next = null;
  }

  return ll;
};

const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8]);

const rotatedLl = rotateLinkedList(ll, 4);

rotatedLl.print();
console.log(rotatedLl);

// TC - O(N)
// SC - O(1)
