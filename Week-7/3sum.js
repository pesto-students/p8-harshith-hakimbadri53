const arr = [-1, -4, 2, 1];
const target = -3;
// a+b+c = x

const get3Some = (arr, target) => {
  // sorting the array
  arr.sort((a, b) => a - b);
  // setting closestSum to a large number
  let closestSum = Infinity;
  // setting closestDiff to a large number
  let closestDiff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    // we are using two pointer approach, set 1 pointer to next of i, and onw pointer to last element
    let ptr1 = i + 1,
      ptr2 = arr.length - 1;

    while (ptr1 < ptr2) {
      let sum = arr[i] + arr[ptr1] + arr[ptr2];
      let diff = Math.abs(sum - target);
      // if diff is 0, target is met
      if (diff === 0) {
        return sum;
      }

      // checking if the diff is smaller than the previous closestDiff
      if (diff < closestDiff) {
        closestSum = sum;
        closestDiff = diff;
      }

      // if sum is greater then we lower ptr2 to look for a smaller closestSum
      // else if its smaller then we increase ptr1.
      if (sum > target) {
        ptr2--;
      } else {
        ptr1++;
      }
    }
  }

  return closestSum;
};

console.log(get3Some(arr, target));
