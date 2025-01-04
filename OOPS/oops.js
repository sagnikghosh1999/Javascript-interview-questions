//Object Oriendted Programming

//Lecture 1
// Classes and Instances
// class is like a blueprint for creating objects, and the object created is an instance of the class.
// class is a template for creating objects

// 1. Abstraction : hiding the complexity and only showing the essential features of the object.
// 2. Encapsulation: keeping the properties private and protected
// 3. Inheritance: a class can inherit properties and methods from parent class
// 4. Polymorphism: many forms, ability to call the same method on different objects and each object responding in different way.

//Javascript has prototypal inheritance

//lecture 2
//Constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  //   };
};
const sagnik = new Person("Sagnik", 1999);
//1. new {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically returns {}
// console.log(sagnik);

//Lecture 3
//Prototypes
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
// sagnik.calcAge();
// console.log(sagnik.__proto__ === Person.prototype); // __proto__ returns the prototype of the constructor function

Person.prototype.species = "Homo Sapiens";
// console.log(sagnik.species);
// console.log(sagnik.hasOwnProperty("species"));
// console.log(sagnik.hasOwnProperty("firstName"));

//Lecture 4
//prototype is not the prototype of the contructor function rather its the prototype of the instances created from the contructor function
// console.dir(Person.prototype.constructor);

//Prototype chain:
const john = new Person("John", 1998);

//Lecture 5
// console.log(sagnik.__proto__);
// console.log(sagnik.__proto__.__proto__);
// console.log(sagnik.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.__proto__ === Array.prototype);

const h1 = document.querySelector("h1");
// console.dir(h1);

///////////////////////////////////////////////////////////
//Challenge 1:
/**
 * 1. car -> speed and make property
 * 2. implement a method accelerate  in km/hr +10
 * 3. brake :-5
 */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.currentSpeed = function () {
  console.log(`The ${this.make} car is going at ${this.speed} km/hr`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// console.log(car1, car2);
// car1.currentSpeed();
// car1.accelerate();
// car1.currentSpeed();
// car1.accelerate();
// car1.currentSpeed();
// car1.brake();
// car1.currentSpeed();
// car1.brake();
// car1.currentSpeed();

///////////////////////////////////////////////////////////

//Lecture 6
// ES6 Classes
// class expression
// const PersonCl = class{

// }

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  greet() {
    console.log(`Hello, my name is ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
// jessica.calcAge();
// console.log(jessica.hasOwnProperty("calcAge"));
// jessica.greet();

//1. Classes are not hoisted
//2. Classes are first class citizens
//3. Classes are executed in strict mode

//Lecture 7
//Getters and Setters
const account = {
  owner: "sagnik",
  movements: [200, 300, 400, 500],
  get latest() {
    return this.movements.at(-1);
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);
// account.latest = 600;
// console.log(account.latest);

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }
  greet() {
    console.log(`Hello, my name is ${this.fullName}`);
  }
  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there");
    console.dir(this);
  }
}

const john2 = new PersonCl2("John Hammond", 1998);
// console.log(john2.fullName);

//Lecture 8
//Static Methods
Person.hey = function () {
  console.log("Hey there");
};

// Person.hey(); //Hey there

// sagnik.hey(); //Error: hey is not a function because hey is a static method and is not inherited by the instances

// PersonCl2.hey(); //Hey there

//Lecture 9
//Object.create
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jonas = Object.create(PersonProto);
// console.log(jonas);
jonas.firstName = "Jonas";
jonas.birthYear = 1991;
// jonas.calcAge();
// console.log(jonas.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1999);
// console.log(sarah);

///////////////////////////////////////////////////////////
//Challenge 2:
/**
 * 1. car -> speed and make property
 * 2. implement a method accelerate  in km/hr +10
 * 3. brake :-5
 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
  brake() {
    this.speed -= 5;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  currentSpeed() {
    console.log(`The ${this.make} car is going at ${this.speed} km/hr`);
  }
}

const car3 = new CarCl("Ford", 120);
// console.log(car3.speedUS);
// car3.accelerate();
// car3.currentSpeed();
// console.log(car3.speedUS);
// car3.speedUS = 50;
// console.log(car3.speedUS);
// car3.currentSpeed();
// car3.accelerate();
// car3.currentSpeed();
// car3.brake();
// car3.currentSpeed();

///////////////////////////////////////////////////////////

//Lecture 10
//Inheritance between classes: Constructor functions

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jane = new Student("Jane", 1995, "Computer Science");
// jane.introduce();
// jane.calcAge();

// console.log(jane instanceof Student);
// console.log(jane instanceof Person);
// console.log(jane instanceof Object);

// console.log(Student.prototype.constructor === Student);
Student.prototype.constructor = Student; //This is necessary because we changed the prototype of Student
// console.log(Student.prototype.constructor === Student);

///////////////////////////////////////////////////////////
//Challenge 3:
/**
 * 1. car -> speed and make property
 * 2. implement a method accelerate  in km/hr +10
 * 3. brake :-5
 * 4. ElectricCar -> make, speed, charge property
 * 5. Implement a method chargeBattery
 * 6. Override accelerate method
 */

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.constructor = ElectricCar;
ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The ${this.make} car is going at ${this.speed} km/hr with a charge of ${this.charge}`
  );
};

const eCar = new ElectricCar("Tesla", 120, 100);

// eCar.accelerate();
// eCar.accelerate();
// eCar.chargeBattery(70);
// eCar.accelerate();
// eCar.accelerate();
// eCar.brake();
// eCar.currentSpeed();

///////////////////////////////////////////////////////////

//Lecture 11
//Inheritance between classes: ES6 Classes

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I am ${2025 - this.birthYear} years old, but as a student I feel like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}

const mike = new StudentCl("Mike", 1996, "Computer Science");
// console.log(mike);
// mike.calcAge();

// lecture 12:
//Inheritance between classes: Object.create

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);

jay.init("Jay", 1997, "Computer Science");
// console.log(jay);
// jay.introduce();
// jay.calcAge();

//Lecture 13:
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  getBalance() {
    return this.movements.reduce((acc, mov) => acc + mov, 0);
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }
  approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Sagnik", "INR", 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getBalance());

//Lecture 14:
// Encapsulation: Private class fields and methods
