// .apply is similar to .call
// but instead of positional arguments(as in case of .call), we use array as argument here.
// in the below fuction which returns max from an array using Math.max function
// Math.max accepts positional arguments(1,2,2,4,5,6) only but with .apply we can pass array and internally it will be converted to positional arguments

function getMax(arr) {
  return Math.max.apply(null, arr);
}

const numbers = [3, 5, 2, 1, 4, 6, 8, 7, 9];

console.log(getMax(numbers)); // => 9
