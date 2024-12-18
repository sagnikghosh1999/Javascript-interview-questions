"use strict";

// currying is a technique of functional programming where a function with multiple parameter is converted to a function series taking single parameters each

/*
const add = (a, b, c) => a + b + c;

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const addCurry = (a) => (b) => (c) => a + b + c;

// console.log(add(1, 2, 3));
console.log(addCurry(1)(2)(3));

------Practical example------



function sendEmail(to) {
    return function (subject) {
        return function (mailBody) {
            return `Email sent to ${to} with subject ${subject}: ${mailBody}`;
        };
    };
}

const sendEmail = (to) => (subject) => (mailBody) =>
    `Email sent to ${to} with subject ${subject}: ${mailBody}`;

const step1 = sendEmail("sagnikghosh@gmail.com");
const step2 = step1("dummy subject");
const step3 = step2("Random mail body!");
console.log(step3);

// 1. implement currying --- BFE.dev

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...nextArgs) {
        return curried.apply(this, [...args, ...nextArgs]);
    };
}
};
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'


// 2. Infinite Currying -- recursive approach

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(1)(2)(3)(4)());
console.log(sum(1)(2)(3)());

*/
