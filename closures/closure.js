"use strict";
/*
 *closure is just a combination of a function bundled together with references to its surrounding state that is the lexical scope
 */

/**
 basic example
 

function x() {
  var num = 7;
  function y() {
    console.log(num);
  }
  num = 100; //this updates the value of num to 100 hence the value returned will be 100;
  return y;
}

const z = x();
// console.log(z);
z();


function z() {
  var b = 500;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }

    y();
  }

  x();
}

z();


-----------------use of Closures -------------------

- Module Design Pattern
- Currying
- Functions like once 
- Memoize
- Maintaining state
- setTimeouts
- Iterators
- Data Encapsulation
- Event handlers

-----------------use of Closures -------------------

-----------------Disadvantages----------------------

- Memory Usage
- Prevents Garbage collections
- Memory leak

-----------------Disadvantages----------------------

<-----------------------Interview problems ------------------->
1.SeTimeout problem

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 5000);
}
//6,6,6,6,6,6 --> using let fixes the issue-- as let is block scoped and every time the set timeout craetes a new copy of the variable i

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 5000);
}

for(var i = 1;i<=5;i++){
    function close(i){
        setTimeout(() => {
            console.log(i);
          }, i * 5000);
    }
    close(i)
}

2. Data hiding and encapsulation:


function counter() {
  var count = 0;
  return function incrementCount() {
    count++;
    console.log(count);
  };
}

var counter1 = counter();

counter1();
counter1();


function Counter() {
    var count = 0;
    this.incrementCount = function () {
        count++;
        console.log(count);
    };
    this.decrementCount = function () {
        count--;
        console.log(count);
    };
}

var counter1 = new Counter();

counter1.incrementCount();
counter1.incrementCount();
counter1.decrementCount();


3. what will be logged in the console

let count = 0;
(function printCount() {
  if (count == 0) {
    let count = 1; //shadowing
    console.log(count); //1
  }
  //count =0
  console.log(count);
})();



4. write a function that would allow to do this

function createBase(base) {
  return function (num) {
    return base + num;
  };
}

var addSix = createBase(6);

console.log(addSix(10)); // returns 16

 5. Time Optimization-- 
using closures time is optimized because the computation is done only once, 
hence everytime it uses the closure it performs a[index] -- O(1)


function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

console.time("find");
const closure = find();
console.timeEnd("find");

console.time("6");
closure(6);
console.timeEnd("6");

console.time("12");
closure(12);
console.timeEnd("12");


// 6. Module Pattern
const Module = (function () {
  function privateMethod() {
    console.log("private");
  }
  // 
  // alternate way
  // return {
  //   publicMethod: function () {
  //     console.log("public");
  //   },
  // };
  // 

  function publicMethod() {
    console.log("public");
  }
  return { publicMethod };
})();

Module.publicMethod();
//Module.privateMethod(); //gives error as it is not returned


// 7. make the function run only once
let view;

function runOnce() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already ran once");
    } else {
      console.log("Running Once");
      called++;
    }
  };
}

let run = runOnce();

run();
run();
run();
run();


//8. Once polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);

const obj = {
  message: "Hello from the object",
};

const greet = once(function () {
  console.log(this.message);
});

greet.call(obj);
greet.call(obj);
greet.call(obj);
greet.call(obj);

*/

//10. Memoize Polyfill

function myMemoize(fn, ctx) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(ctx || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9475, 5456));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(9475, 5456));
console.timeEnd("Second call");
