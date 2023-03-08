const Stack = require("./Stack");

function nextGreaterElement(arr) {
  const s = new Stack();
  // initialising array with -1
  const result = new Array(arr.length).fill(-1);
  //   traverse the array in reverse
  for (let i = arr.length - 1; i >= 0; i--) {
    // if stack is not empty and the top value of stack is smaller than the current value, we pop it since its no longer of use
    while (s.length() > 0 && s.peek() <= arr[i]) {
      s.pop();
    }
    // after traversing the above if stack is not empty, it means there is some value which is greater than the current value
    // else it stays -1
    if (s.length() > 0) {
      result[i] = s.peek();
    }
    // push the current value to stack to check for next element
    s.push(arr[i]);
  }
  return result;
}

const arr = [1, 2, 3, 4, 3];
console.log(nextGreaterElement(arr));

// Time complexity - O(N)
// Space complexity - O(N)
