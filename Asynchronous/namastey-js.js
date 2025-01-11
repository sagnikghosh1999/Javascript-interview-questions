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
*/

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

//Promises API
//1. Promise.ALL
