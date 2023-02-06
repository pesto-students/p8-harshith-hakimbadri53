// Given an one-dimensional unsorted array A containing N integers.
// You are also given aninteger B, find if there exists a pair of elements in the array whose difference is B.
// Return 1 if any such pair exists else return 0.

// Input 1: A = [5, 10, 3, 2, 50, 80] B = 78,  Output 1: 1
// Explanation 1: Pair (80, 2) gives a difference of 78
// Input 2: A = [-10, 20] B = 30, Output 2: 1
// Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30
const arr = [20, -10];
const difference = 30;

const isPairWithDifference = (arr, diff) => {
  let result = 0;
  const set = new Set(arr);

  // diff can only be zero when there are duplicate elements
  if (diff === 0) {
    if (set.size !== arr.length) return 1;
    return 0;
  }

  for (let el of set) {
    // we are looking for a-b = x
    // which also means a = b+x
    if (set.has(el + diff)) {
      result = 1;
      break;
    }
  }
  return result;
};

console.log(isPairWithDifference(arr, difference));

// Time complexity O(N)
// Space complexity O(N)
