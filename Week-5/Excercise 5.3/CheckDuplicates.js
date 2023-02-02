const checkDuplicates = (arr) => {
  return new Set(arr).size < arr.length;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 2, 2, 5, 5, 7];
const str = "Hello World!";

console.log(checkDuplicates(arr1));
console.log(checkDuplicates(arr2));
console.log(checkDuplicates(str));
