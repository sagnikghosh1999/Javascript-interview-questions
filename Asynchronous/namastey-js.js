//Callbacks can handle asynchronous javascript
/*
setTimeout(() => {
  console.log("Logged After 5sec");
}, 5000);



function createOrder(cart, cb) {
  //some async activity
  console.log(cart);
  //calling the callback
  cb();
}

function makePayment(cb) {
  console.log("Payment made");
  cb();
}

function redirect() {
  console.log("Redirected to success page");
}

//Pyramid of doom -- Callback hell -- inversion of control
createOrder(cart, function () {
  makePayment(function () {
    redirect();
  });
});

// Better approach is using Promises

//Promises are a special type of Javascript object that represents the eventual completion of a asynchronous operation-

cart = ["a", "b", "c"];
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    //some async activity
    console.log(cart);
    resolve();
  });
}

function makePayment() {
  return new Promise((resolve, reject) => {
    console.log("Payment made");
    resolve();
  });
}

function redirect() {
  console.log("Redirected to success page");
}

// Using Promises to avoid callback hell
createOrder(cart)
  .then(function () {
    return makePayment();
  })
  .then(function () {
    redirect();
  });


const cart = ["a", "b", "c"];

const createOrder = function (cart) {
  function validateCart(cart) {
    return true;
  }
  const pr = new Promise(function (resolve, reject) {
    //create order
    if (!validateCart(cart)) {
      reject(new Error("Cart is not valid"));
    }
    const orderId = 12345;
    if (orderId) resolve(orderId);
  });
  return pr;
};

const makePayment = function (orderId) {
  console.log("OrderId : ", orderId);
  return new Promise(function (resolve) {
    resolve("Payment Successful");
  });
};

createOrder(cart)
  .then((orderId) => orderId)
  .then(function (orderId) {
    return makePayment(orderId);
  })
  .then((data) => {
    console.log(data);
  });

  */
//Promises API
//1. Promise.ALL -->when all promises succeeds or any one fails

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1 resolved ");
    reject("P1 failed ");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 resolved ");
    reject("P2 failed ");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 resolved ");
    reject("P3 failed ");
  }, 2000);
});

// Promise.all
console.time("all");
// Promise.all resolves when all promises resolve, or rejects if any promise rejects
Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .then(() => console.timeEnd("all"));

//  Promise.allSettled
console.time("all-settled");
// Promise.allSettled resolves when all promises settle (either resolve or reject)
Promise.allSettled([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .then(() => console.timeEnd("all-settled"));
/**
 * [
    {
        "status": "fulfilled",
        "value": "P1 resolved "
    },
    {
        "status": "fulfilled",
        "value": "P2 resolved "
    },
    {
        "status": "rejected",
        "reason": "P3 failed "
    }
  ]
 */

//  Promise.race
console.time("race");
// Promise.race resolves or rejects as soon as one of the promises resolves or rejects
Promise.race([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .then(() => console.timeEnd("race"));

//  Promise.any
console.time("any");
// Promise.any resolves as soon as one of the promises resolves, or rejects if all promises reject
Promise.any([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err.errors)) // AggregateError: All promises were rejected
  .then(() => console.timeEnd("any"));
