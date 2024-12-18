"use strict";
console.log("<---------Arrays--------->");

// <--creating of Array ----------------------------------------------------------------------------->

// --creating of Array
// - using array literals
// Empty array
let emptyArray = [];

// Array with elements
let fruits = ["apple", "banana", "cherry"];

// Array with different types of elements
let mixedArray = [42, "hello", true, { name: "John" }, [1, 2, 3]];

const playerData = [
  {
    firstName: "Rohit",
    lastName: "Sharma",
    type: "batsman",
    runsScored: 10480,
    highestScore: 264,
    matchesPlayed: 251,
    wickets: 8,
    bestFigures: "2/27",
    age: 37,
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    type: "batsman",
    runsScored: 12898,
    highestScore: 183,
    matchesPlayed: 280,
    wickets: 4,
    bestFigures: "1/13",
    age: 35,
  },
  {
    firstName: "KL",
    lastName: "Rahul",
    type: "keeper",
    runsScored: 4871,
    highestScore: 112,
    matchesPlayed: 72,
    wickets: 0,
    bestFigures: "-",
    age: 32,
  },
  {
    firstName: "Rishabh",
    lastName: "Pant",
    type: "keeper",
    runsScored: 2123,
    highestScore: 159,
    matchesPlayed: 33,
    wickets: 0,
    bestFigures: "-",
    age: 26,
  },
  {
    firstName: "Shubman",
    lastName: "Gill",
    type: "batsman",
    runsScored: 2581,
    highestScore: 208,
    matchesPlayed: 43,
    wickets: 0,
    bestFigures: "-",
    age: 24,
  },
  {
    firstName: "Hardik",
    lastName: "Pandya",
    type: "allrounder",
    runsScored: 1665,
    highestScore: 92,
    matchesPlayed: 87,
    wickets: 73,
    bestFigures: "4/38",
    age: 30,
  },
  {
    firstName: "Ravindra",
    lastName: "Jadeja",
    type: "allrounder",
    runsScored: 2756,
    highestScore: 87,
    matchesPlayed: 197,
    wickets: 212,
    bestFigures: "5/36",
    age: 35,
  },
  {
    firstName: "Jasprit",
    lastName: "Bumrah",
    type: "bowler",
    runsScored: 58,
    highestScore: 10,
    matchesPlayed: 78,
    wickets: 155,
    bestFigures: "5/27",
    age: 30,
  },
  {
    firstName: "Mohammed",
    lastName: "Shami",
    type: "bowler",
    runsScored: 178,
    highestScore: 25,
    matchesPlayed: 101,
    wickets: 195,
    bestFigures: "5/51",
    age: 34,
  },
  {
    firstName: "Kuldeep",
    lastName: "Yadav",
    type: "bowler",
    runsScored: 153,
    highestScore: 19,
    matchesPlayed: 81,
    wickets: 152,
    bestFigures: "6/25",
    age: 29,
  },
  {
    firstName: "Yuzvendra",
    lastName: "Chahal",
    type: "bowler",
    runsScored: 65,
    highestScore: 18,
    matchesPlayed: 72,
    wickets: 121,
    bestFigures: "6/42",
    age: 33,
  },
  {
    firstName: "Suryakumar",
    lastName: "Yadav",
    type: "batsman",
    runsScored: 2092,
    highestScore: 117,
    matchesPlayed: 53,
    wickets: 0,
    bestFigures: "-",
    age: 33,
  },
  {
    firstName: "Ishan",
    lastName: "Kishan",
    type: "keeper",
    runsScored: 796,
    highestScore: 210,
    matchesPlayed: 27,
    wickets: 0,
    bestFigures: "-",
    age: 25,
  },
];

/*
console.log(fruits);

// -using new Array() constructor:
const arr = new Array(); //empty array
console.log(arr);

const numbers = new Array(1, 2, 3, 4); //[1, 2, 3, 4] specific elements
console.log(numbers);

const array = new Array(5); //empty array with predefined length -- use with caution
console.log(array);
console.log(array.length);

//using Array.of() -- similar to the constructor but acts similar with single argument
let arr1 = Array.of(5); // [5] (a single-element array)
console.log(arr1);

let arr2 = Array.of(1, 2, 3, 4); // [1, 2, 3, 4]
console.log(arr2);

//-using Array.from() creates array from iterable objects like string/nodelists/sets/maps...
let str = "hello";
let letters = Array.from(str); // ["h", "e", "l", "l", "o"]
console.log(letters);

function example() {
  let argsArray = Array.from(arguments);
  console.log(argsArray); // [1, 2, 3]
}
example(1, 2, 3);

//using spread operators
let fruitsCopy = [...fruits];
console.log(fruitsCopy);

let letters1 = [...str];
console.log(letters1);

//Array.prototype.fill()
const arr3 = new Array(5).fill("hello");
console.log(arr3);
const arr4 = new Array(5).fill().map((_, i) => i + 1);
console.log(arr4);

//object.assign();
const original = [...fruits];
const cpy = Object.assign([], original);
console.log(cpy);

<------------------------------------------------------------------------------->

console.log(emptyArray);
console.log(fruits);
console.log(mixedArray);

javascript arrays are 
- dynamic: grow in size
- heterogeneous: any data type
- indexed: 0 based indexng
- objects with special properties



console.log(fruits[0], fruits[2]);
console.log(fruits.length);

// adding removing elements
<------------------------------------------------------------------------------->

// push adds the element at the end returns length of the new array
console.log(fruits.push("lemon"));
// push adds the element at the start returns length of the new array
console.log(fruits.unshift("mango"));
//pop removes the last element and returns the removed element
console.log(fruits.pop());
//shift removes the first element and returns the removed element
console.log(fruits.shift());

<------------------------------------------------------------------------------->
// looping over the arrays
<------------------------------------------------------------------------------->

// --general for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// -- for of loop
for (const fruit of fruits) {
  console.log(fruit);
}

<------------------------------------------------------------------------------->

<-----Entries in arrays----->
- returns a new iterator object

// console.log(fruits.entries());

for (const [a, b] of mixedArray.entries()) {
  //   console.log(i); //i is of [index :number,arrayElement]
  console.log(typeof a, b);
}

const iterator = fruits.entries();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
<-----Entries in arrays----->

<------------------------------------------------------------------------------->
forEach -> loops through the array and executes a function
function printData(data) {
    console.log(data);
}

// fruits.forEach((element) => console.log(element));
fruits.forEach(printData);

<------------------------------------------------------------------------------->
// looping over the arrays
<------------------------------------------------------------------------------->

<------------------------------------------------------------------------------->
//Searching in Arrays 
<------------------------------------------------------------------------------->

//includes- checks if element is there or not 
console.log(fruits.includes("banana"));
console.log(fruits.includes("mango"));

// indexOf checks and returns the index of a element
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("mango")); //-1 when not available

//find -- takes a callback function, returns the first array element when the callback returns truthy value

function cb(ele) {
    return ele.length >= 5;
}
console.log(fruits.find(cb));
//findIndex --returns the index instead
console.log(fruits.findIndex(cb));


<------------------------------------------------------------------------------->
//Searching in Arrays 
<------------------------------------------------------------------------------->

<------------------------------------------------------------------------------->
Map Reduce filters
<------------------------------------------------------------------------------->

1. map --> Creates a new array by applying a function to each element.
const newFruits = fruits.map(function (fruit, i, fruits) {
  return `${fruit} ${i} ${fruits}`;
});

console.log(newFruits);

2.filter-->Creates a new array with elements that satisfy a condition.
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

function cb(fruit) {
  return fruit !== "apple";
}

let filteredFruits = fruits.filter(cb);
console.log(filteredFruits);

3.Reduce --> returns a single value that reduces down to one value

const totalRuns = playerData.reduce(function (acc, curr) {
  return (acc += curr.runsScored);
}, 0);

console.log(totalRuns);

const totalWickets = playerData.reduce((acc, curr) => {
  return (acc += curr.wickets);
}, 0);
console.log(totalWickets);

const avgRuns = playerData.reduce((acc, curr, _, arr) => {
  return (acc += curr.runsScored / arr.length);
}, 0);

const groupedByAgePlayers = playerData.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age].push(`${curr.firstName} ${curr.lastName}`);
  } else {
    acc[curr.age] = [`${curr.firstName} ${curr.lastName}`];
  }
  return acc;
}, {});

console.log(groupedByAgePlayers);

<------------------------------------------------------------------------------->
//Map Reduce filters
<------------------------------------------------------------------------------->
*/
