// 1. What is hoisting?
console.log(a);
var a;
console.log(b);
let b;
// 2. difference between a normal function and arrow function?
let obj = {
  x: 20,
  a: function a() {
    console.log(this.x);
  },
  b: () => {
    console.log(this.x);
  },
};

//3. What are polyfills, write a polyfill for map functionality
const customMap = (iter, customFunction) => {
  const result = [];
  for (el of iter) {
    result.push(customFunction(el));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

function print(val) {
  console.log(val * 2);
}

customMap(arr, print);
// need to convert this funtion in such a way that we can access directly as a property of array, using inheritance/prototype.
//so need to work on polyfills

// comments - be more vocal about the thought process and approach you are following to solve the code
//so that even if you can't reach the solution it might help interviewer know that you know things
