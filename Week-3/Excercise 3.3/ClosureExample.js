function createIncrement() {
  // initializes count to 0
  let count = 0;

  // increment has access to count as it is in lexical scope
  // increment increases the value of count by 1 on each call
  function increment() {
    count++;
  }

  // message is initialized to Count is 0
  let message = `Count is ${count}`;

  // logs the value of message
  function log() {
    console.log(message);
  }

  return [increment, log];
}

// destructure the array of two functions to increment and log
const [increment, log] = createIncrement();

increment(); // incrments count to 1

increment(); // incrments count to 2

increment(); // incrments count to 3

log(); // What is logged? -> Count is 0
// since message was initialized to Count is 0 and was never changed again on incrment
