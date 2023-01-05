// .bind binds the function pemanently.
// you can pass an object rference to bind for this keyword
// or can bind argument/s of a function to a permanent value

function product(a, b) {
  return a * b;
}

// rturns a new funtion, binding one of the parameters as 2 permanently
// frst argument is null since we don't need to bind to any this.
const double = product.bind(null, 2);

console.log(double(3)); // => 6

// since the first param is bound permanently to 2, it just takes first argument to multiply by 2 and discards 6
console.log(double(3, 6)); // => 6

// bind explanation using this
function square() {
  return this.size * this.size;
}

console.log(square()); // => NaN

// bounded smallSqaure with an object
const smallSquare = square.bind({ size: 2 });

console.log(smallSquare()); // => 4

const obj = { size: 4 };

// binded to an existing object
const bigSqaure = square.bind(obj);

console.log(bigSqaure()); // => 16
