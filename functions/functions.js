"use strict";
console.log("<<-----------------Functions------------------>>");

/**
 * <----------------------------------------------->
 * Function Declaration, Expression, Arrow Function
 * <----------------------------------------------->

// Function Declaration : function keyword followed by function name
function greet() {
    console.log("Hello World from declaration");
}
// Function Expression : annonymous function assigned to a variable
const greet2 = function () {
    console.log("Hello World from expression");
};
// Arrow Function : ES6 feature, shorter syntax basically annonymous function stored in a variable without its own this keyword
const greet3 = () => {
    console.log("Hello World from arrow function");
};
const greet4 = (name) => {
    console.log(`Hello ${name} from arrow function with parameters`);
};
const greet5 = (name, age) => {
    console.log(
    `Hello ${name} from arrow function with multiple parameters and age is ${age}`
  );
};
//default parameters
const greet6 = (name = "Guest") => {
    console.log(`Hello ${name} from arrow function with default parameters`);
};
//functions with return statement
const greet7 = function (name = "Guest") {
    return `Hello ${name} from function with return statement`;
};
// greet7(); //Hello Guest from function with return statement
const greet8 = (name = "Guest") =>
    `Hello ${name} from arrow function with return statement`; //short hand return statement

//IIFE : Immediately Invoked Function Expression -- annoymous function called immediately after its definition -- used to avoid polluting global scope 

(function () {
  console.log("Function is running inside IIFE");
})();

* <----------------------------------------------->
* Function Declaration, Expression, Arrow Function
* <----------------------------------------------->

* <----------------------------------------------->
* Call Apply Bind
* <----------------------------------------------->
//call : it is used to call the function with different context/this
const obj = {
    name: "John",
    greet: function () {
        console.log(`Hello ${this.name}`);
    },
};

// obj.greet(); //Hello John

const obj2 = {
    name: "Doe",
};

// obj2.greet = obj.greet; //borrowing greet function from obj

// obj2.greet(); //Hello Doe
// obj.greet.call(obj2); //Hello Doe -- call method is used to call the function with different context/this

const obj3 = {
    name: "Smith",
    greet: function (message) {
        console.log(`${message} ${this.name}`);
  },
};

// obj3.greet("Hello"); //Hello Smith
// obj3.greet.call(obj2, "Hello"); //Hello Doe

// apply : it is used to call the function with different context/this and arguments as an array -- not used much after intoduction of spread operator

// obj3.greet.apply(obj, ["Hey"]); //Hey John

// bind : it is used to bind the function with different context/this and return the new function -- it does not call the function

const person = {
    name: "Mike",
    age: 25,
    greet: function () {
        console.log(`Hello ${this.name} and your age is ${this.age}`);
    },
};

const person2 = {
    name: "Tom",
    age: 30,
};

const greetPerson2 = person.greet.bind(person2);
// greetPerson2(); //Hello Tom and age is 30

function myGreetings(message, name) {
    console.log(`${message} ${name || this?.name}`);
    console.log("this : ", this);
}

const user = {
    name: "Alice",
    age: 25,
};

// myGreetings(); // undefined undefined

const greetUser = myGreetings.bind(user, "Hey, Good Morning!");
// greetUser(); //Hey, Good Morning! Alice

 * <----------------------------------------------->
 * Call Apply Bind
 * <----------------------------------------------->

 * <----------------------------------------------->
 * Hoisting
 * <----------------------------------------------->
 * 

//Function declaration is hoisted with the function definition
hoist();
function hoist() {
    console.log("Hoisted");
}

//Function expression is not hoisted with the function definition, it is hoisted as undefined in case of var and hoisted to temporal dead zone in case of let and const

// hoist2(); //ReferenceError: Cannot access 'hoist2' before initialization
const hoist2 = function () {
    console.log("Hoisted2");
};

// hoist3(); //ReferenceError: Cannot access 'hoist3' before initialization -- hoist3 and hoist2 is hoisted in temporal dead zone and not accessible before initialization
let hoist3 = function () {
    console.log("Hoisted3");
};

// hoist4(); //TypeError: hoist4 is not a function -- hoist4 is hoisted as undefined
var hoist4 = function () {
    console.log("Hoisted4");
};

* <----------------------------------------------->
* Hoisting
* <----------------------------------------------->

 * <----------------------------------------------->
 * Closure
 * <----------------------------------------------->

function outer() {
  var innerVarialbe = 7;
  function inner() {
    console.log(innerVarialbe);
  }
  return inner;
}

outer()(); //7 -- first () returns inner function and second () calls the inner function

function Counter(value) {
  let _count = value;

  function increment() {
    return ++_count;
  }
  function decrement() {
    return --_count;
  }
  function reset() {
    _count = value;
    return _count;
  }
  return {
    increment,
    decrement,
    reset,
  };
}

function myMemoize(fn) {
  const res = {};
  return function (...args) {
    let argumentsCache = JSON.stringify(args);
    if (!res[argumentsCache]) {
      res[argumentsCache] = fn.call(this, ...args);
    }
    return res[argumentsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

// console.time("First call");
// console.log(clumsyProduct(9475, 5456));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(clumsyProduct(9475, 5456));
// console.timeEnd("Second call");

// console.time("First call");
// console.log(memoizedClumsyProduct(9475, 5456));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoizedClumsyProduct(9475, 5456));
// console.timeEnd("Second call");

//once
function once(func, ctx) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(ctx || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b)); 

 * <----------------------------------------------->
 * Closure
 * <----------------------------------------------->
 * 
 * <----------------------------------------------->
 * Higher Order Function
 * <----------------------------------------------->
 */
