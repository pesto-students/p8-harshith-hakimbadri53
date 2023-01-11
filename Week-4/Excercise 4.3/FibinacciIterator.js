const fibonacciIterable = (n) => ({
  //making the returned object iterable by adding] [Symbol.iterator]
  [Symbol.iterator]: function () {
    let i = 1,
      prev = 0,
      next = 1;
    return {
      // iterator function
      next() {
        if (i++ <= n) {
          let result = prev;
          prev = next;
          next += temp;
          return { value: result, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

for (let el of fibonacciIterable(9)) {
  console.log(el);
}
