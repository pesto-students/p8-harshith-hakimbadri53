// Problem 6.3 Sort array of 0's,1's and 2's
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder.
// Example 1:Input:N = 5
// arr[]= {0 2 1 2 0}
// Output:0 0 1 2 2
// Explanation: 0's 1's and 2's are segregated into ascending order.
// Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

const sortArray = (arr) => {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};

const arr = [0, 2, 1, 2, 0];

console.log(sortArray(arr));

// Time complexity O(N)
// Space complexity O(1)
