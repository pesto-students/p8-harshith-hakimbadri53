const sum = (num1, num2) => {
  return new Promise((resolve, reject) => {
    resolve(num1 + num2);
  });
};

const subtract = (num1, num2) => {
  return new Promise((resolve, reject) => {
    resolve(num1 - num2);
  });
};

const multiply = (num1, num2) => {
  return new Promise((resolve, reject) => {
    resolve(num1 * num2);
  });
};

const asyncAwaitImplementation = async (num1, num2) => {
  console.log("Async/Await Implementation");
  const sumResults = await sum(num1, num2)
    .then((res) => console.log("sumResults: ", res))
    .catch((err) => console.log(err))
    .finally(() => console.log("sum is finished"));

  const subtractResults = await subtract(num1, num2)
    .then((res) => console.log("subtractResults: ", res))
    .catch((err) => console.log(err))
    .finally(() => console.log("subtract is finished"));

  const multiplyResults = await multiply(num1, num2)
    .then((res) => console.log("multiplyResults: ", res))
    .catch((err) => console.log(err))
    .finally(() => console.log("multiply is finished"));
};

function* generatorsImplementation(num1, num2) {
  console.log("Generator Implementation");

  const sumResults = yield sum(num1, num2)
    .then((res) => {
      console.log("Yield sumResults: ", res);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Yield Sum finished"));
  const subtractResults = yield subtract(num1, num2)
    .then((res) => {
      console.log("Yield subtractResults: ", res);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Yield Subtract finished"));
  const multiplyResults = yield multiply(num1, num2)
    .then((res) => {
      console.log("Yield multiplyResults: ", res);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Yield Multiply finished"));
}

// asyncAwaitImplementation(10, 5);

const iter = generatorsImplementation(20, 10);

iter.next();
iter.next();
iter.next();
iter.next();
