class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    //callbacks array which would be executed based on whether the promise is Fulfilled,Rejected or Settled
    this.onFulfilledHandlers = [];
    this.onRejectedHandlers = [];
    this.finallyHandlers = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledHandlers.forEach((cb) => cb(value));
        this.finallyHandlers.forEach((cb) => cb());
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.onRejectedHandlers.forEach((cb) => cb(reason));
        this.finallyHandlers.forEach((cb) => cb());
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const handleResult = (next) => (value) => {
        try {
          const result = next ? next(value) : value;
          if (this.state === "fulfilled") {
            resolve(result);
          } else {
            reject(result);
          }
        } catch (error) {
          reject(error);
        }
      };
      if (this.state === "fulfilled") {
        handleResult(onFulfilled)(this.value);
      } else if (this.state === "rejected") {
        handleResult(onRejected)(this.value);
      } else {
        this.onFulfilledHandlers.push(handleResult(onFulfilled));
        this.onRejectedHandlers.push(handleResult(onRejected));
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onCompleted) {
    return new CustomPromise((resolve, reject) => {
      const handleFinally = () => {
        try {
          onCompleted();
          resolve(this.value);
        } catch (error) {
          reject(error);
        }
      };
      if (this.state !== "pending") {
        handleFinally();
      } else {
        this.finallyHandlers.push(handleFinally);
      }
    });
  }
}

const getRandomNumber = (time) =>
  new CustomPromise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 1000);

    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        reject(`${randomNumber} is divisible by 5`);
      } else {
        resolve(randomNumber);
      }
    }, time);
  });

getRandomNumber(0)
  .then((res) => {
    console.log("then response: ", res);
    return "chain 1";
  })
  .then((res) => {
    console.log("promise chaining: ", res);
    return "chain 2";
  })
  .catch((err) => console.error("catch error: ", err))
  .then((res) => console.log("promise chaining: ", res))
  .finally(() => console.log("finally end chain"));
