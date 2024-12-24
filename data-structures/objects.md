# Javascript objects

## Basics of JavaScript Objects

### Q: What is the difference between an object and a primitive data type in JavaScript?

**A:** An object in JavaScript is a collection of key-value pairs, where each key is a string (or Symbol) and each value can be any data type, including other objects. Objects are used to store collections of data and more complex entities.

Primitive data types, on the other hand, are the most basic data types in JavaScript. They include `undefined`, `null`, `boolean`, `number`, `string`, `bigint`, and `symbol`. Primitive values are immutable, meaning they cannot be altered, and they are compared by value.

In summary, objects are mutable and can store multiple values as properties, while primitive data types are immutable and represent a single value.

---

### Q: How do you create an object in JavaScript? Explain different methods.

**A:** There are several ways to create an object in JavaScript:

1. **Object Literal Notation:**

   ```javascript
   const obj = {
     key1: "value1",
     key2: "value2",
   };
   ```

2. **Using the `Object` Constructor:**

   ```javascript
   const obj = new Object();
   obj.key1 = "value1";
   obj.key2 = "value2";
   ```

3. **Using `Object.create()`:**

   ```javascript
   const proto = {
     key1: "value1",
   };
   const obj = Object.create(proto);
   obj.key2 = "value2";
   ```

4. **Using a Class:**

   ```javascript
   class MyClass {
     constructor(key1, key2) {
       this.key1 = key1;
       this.key2 = key2;
     }
   }
   const obj = new MyClass("value1", "value2");
   ```

5. **Using a Function Constructor:**
   ```javascript
   function MyConstructor(key1, key2) {
     this.key1 = key1;
     this.key2 = key2;
   }
   const obj = new MyConstructor("value1", "value2");
   ```

Each method has its own use cases and can be chosen based on the specific requirements of the code.

---

### Q: What is the purpose of `Object.assign()`? Provide an example.

**A:** `Object.assign()` is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

Example:

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
console.log(target); // { a: 1, b: 4, c: 5 }
```

In this example, the properties from the `source` object are copied to the `target` object. The `b` property in the `target` object is overwritten by the `b` property from the `source` object.

---

### Q: How do you check if a property exists in an object?

**A:** There are several ways to check if a property exists in an object in JavaScript:

1. **Using the `in` Operator:**

   ```javascript
   const obj = { key1: "value1" };
   console.log("key1" in obj); // true
   console.log("key2" in obj); // false
   ```

2. **Using the `hasOwnProperty` Method:**

   ```javascript
   const obj = { key1: "value1" };
   console.log(obj.hasOwnProperty("key1")); // true
   console.log(obj.hasOwnProperty("key2")); // false
   ```

3. **Using `Object.hasOwn` Method (ES2022):**

   ```javascript
   const obj = { key1: "value1" };
   console.log(Object.hasOwn(obj, "key1")); // true
   console.log(Object.hasOwn(obj, "key2")); // false
   ```

4. **Using Property Access:**

   ```javascript
   const obj = { key1: "value1" };
   console.log(obj.key1 !== undefined); // true
   console.log(obj.key2 !== undefined); // false
   ```

Each method has its own use cases. The `in` operator checks both own properties and inherited properties, while `hasOwnProperty` and `Object.hasOwn` check only own properties.

---

### Q: What are the different ways to access object properties?

**A:** There are two main ways to access object properties in JavaScript:

1. **Dot Notation:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   console.log(obj.key1); // "value1"
   console.log(obj.key2); // "value2"
   ```

2. **Bracket Notation:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   console.log(obj["key1"]); // "value1"
   console.log(obj["key2"]); // "value2"
   ```

Dot notation is generally preferred for its simplicity and readability. Bracket notation is useful when the property name is dynamic or not a valid identifier (e.g., contains spaces or special characters).

---

### Q: What is the difference between dot notation and bracket notation in accessing object properties?

**A:** The main differences between dot notation and bracket notation are:

1. **Syntax:**

   - Dot notation uses a dot (`.`) to access properties: `object.property`.
   - Bracket notation uses square brackets (`[]`): `object["property"]`.

2. **Property Names:**

   - Dot notation requires the property name to be a valid identifier (e.g., no spaces or special characters).
   - Bracket notation can use any string as a property name, including variables.

3. **Dynamic Access:**
   - Dot notation cannot be used for dynamic property names.
   - Bracket notation allows dynamic property names.

Examples:

```javascript
const obj = { "key 1": "value1", key2: "value2" };

// Dot notation
console.log(obj.key2); // "value2"

// Bracket notation
console.log(obj["key 1"]); // "value1"
const prop = "key2";
console.log(obj[prop]); // "value2"
```

In summary, dot notation is simpler and more readable, while bracket notation is more flexible and allows for dynamic property access.

---

### Q: How can you loop over an object’s properties?

**A:** There are several ways to loop over an object's properties in JavaScript:

1. **`for...in` Loop:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
       console.log(key, obj[key]);
     }
   }
   ```

   The `for...in` loop iterates over all enumerable properties of an object, including inherited properties. Using `hasOwnProperty` ensures that only the object's own properties are processed.

2. **`Object.keys()` Method:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   Object.keys(obj).forEach((key) => {
     console.log(key, obj[key]);
   });
   ```

   `Object.keys()` returns an array of the object's own enumerable property names. You can then use `forEach` to iterate over the array.

3. **`Object.entries()` Method:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   Object.entries(obj).forEach(([key, value]) => {
     console.log(key, value);
   });
   ```

   `Object.entries()` returns an array of the object's own enumerable property `[key, value]` pairs. You can then use `forEach` to iterate over the array.

4. **`Object.getOwnPropertyNames()` Method:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   Object.getOwnPropertyNames(obj).forEach((key) => {
     console.log(key, obj[key]);
   });
   ```

   `Object.getOwnPropertyNames()` returns an array of all properties (including non-enumerable properties) found directly in a given object.

Each method has its own use cases and can be chosen based on the specific requirements of the code.

---

### Q: What is the difference between `for...in` and `Object.keys()`?

**A:** The main differences between `for...in` and `Object.keys()` are:

1. **Enumeration of Properties:**

   - `for...in` iterates over all enumerable properties of an object, including inherited properties.
   - `Object.keys()` returns an array of the object's own enumerable property names, excluding inherited properties.

2. **Output Type:**

   - `for...in` directly iterates over the property names.
   - `Object.keys()` returns an array of property names, which can then be iterated over using array methods like `forEach`.

3. **Performance:**
   - `Object.keys()` can be more performant because it only deals with the object's own properties and returns an array that can be efficiently iterated.
   - `for...in` may be slower because it also checks the prototype chain for inherited properties.

Examples:

```javascript
const obj = { key1: "value1", key2: "value2" };

// Using for...in
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

// Using Object.keys()
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

In summary, `for...in` is useful when you need to iterate over all enumerable properties, including inherited ones, while `Object.keys()` is preferred when you only need the object's own properties.

---

### Q: How do you clone an object in JavaScript?

**A:** There are several ways to clone an object in JavaScript:

1. **Using `Object.assign()` Method:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   const clone = Object.assign({}, obj);
   console.log(clone); // { key1: "value1", key2: "value2" }
   ```

2. **Using Spread Operator (`...`):**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   const clone = { ...obj };
   console.log(clone); // { key1: "value1", key2: "value2" }
   ```

3. **Using `JSON.parse()` and `JSON.stringify()`:**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   const clone = JSON.parse(JSON.stringify(obj));
   console.log(clone); // { key1: "value1", key2: "value2" }
   ```

4. **Using `structuredClone()` (ES2021):**

   ```javascript
   const obj = { key1: "value1", key2: "value2" };
   const clone = structuredClone(obj);
   console.log(clone); // { key1: "value1", key2: "value2" }
   ```

Each method has its own use cases. `Object.assign()` and the spread operator are shallow clones, meaning they only clone the first level of the object. `JSON.parse()` and `JSON.stringify()` can be used for deep cloning but have limitations with functions and undefined values. `structuredClone()` is a modern method that handles deep cloning more effectively.

---

### Q: What is the difference between shallow copy and deep copy in JavaScript objects?

**A:** The main differences between shallow copy and deep copy are:

1. **Shallow Copy:**

   - A shallow copy creates a new object, but only copies the references of nested objects. This means that changes to nested objects in the copied object will affect the original object.
   - Methods like `Object.assign()` and the spread operator (`...`) create shallow copies.

   Example:

   ```javascript
   const original = { key1: "value1", nested: { key2: "value2" } };
   const shallowCopy = { ...original };
   shallowCopy.nested.key2 = "newValue";
   console.log(original.nested.key2); // "newValue"
   ```

2. **Deep Copy:**

   - A deep copy creates a new object and recursively copies all nested objects. This means that changes to nested objects in the copied object will not affect the original object.
   - Methods like `JSON.parse(JSON.stringify())` and `structuredClone()` (ES2021) can be used for deep copying.

   Example:

   ```javascript
   const original = { key1: "value1", nested: { key2: "value2" } };
   const deepCopy = JSON.parse(JSON.stringify(original));
   deepCopy.nested.key2 = "newValue";
   console.log(original.nested.key2); // "value2"
   ```

In summary, a shallow copy only copies the top-level properties, while a deep copy recursively copies all levels of the object.

---

## Object Prototypes and Inheritance

### Q: What is the prototype chain in JavaScript?

**A:** The prototype chain in JavaScript is a mechanism through which objects inherit properties and methods from other objects. It is a fundamental feature of JavaScript's object-oriented programming.

When you access a property or method on an object, JavaScript first looks for that property or method on the object itself. If it is not found, JavaScript then looks at the object's prototype, and if it is still not found, it continues to look up the prototype chain until it reaches the top, which is `Object.prototype`.

Every JavaScript object has a prototype, which is another object from which it inherits properties and methods. The prototype of an object can be accessed using the `__proto__` property or the `Object.getPrototypeOf()` method.

Example:

```javascript
const obj = { key1: "value1" };
console.log(obj.__proto__ === Object.prototype); // true
```

In this example, `obj` inherits from `Object.prototype`, which is the top of the prototype chain. If you try to access a property or method that does not exist on `obj`, JavaScript will look for it on `Object.prototype`.

The prototype chain allows for the reuse of properties and methods across multiple objects, enabling a form of inheritance in JavaScript.

---

### Q: How do you create an object without a prototype?

**A:** You can create an object without a prototype using `Object.create(null)`. This creates a plain object that does not inherit from `Object.prototype`.

Example:

```javascript
const obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)); // null
```

In this example, `obj` is created without a prototype, meaning it does not inherit any properties or methods from `Object.prototype`. This can be useful when you need a truly plain object without any inherited properties.

---

### Q: What is the difference between `Object.create()` and a constructor function?

**A:** The main differences between `Object.create()` and a constructor function are:

1. **Creation of Objects:**

   - `Object.create()` creates a new object with the specified prototype object and properties. It allows you to directly set the prototype of the new object.
   - A constructor function is used with the `new` keyword to create a new object. The prototype of the new object is set to the `prototype` property of the constructor function.

2. **Syntax:**

   - `Object.create()` syntax:
     ```javascript
     const proto = { key1: "value1" };
     const obj = Object.create(proto);
     ```
   - Constructor function syntax:
     ```javascript
     function MyConstructor(key1) {
       this.key1 = key1;
     }
     const obj = new MyConstructor("value1");
     ```

3. **Inheritance:**

   - `Object.create()` allows for more flexible and fine-grained inheritance by directly specifying the prototype object.
   - Constructor functions use the `prototype` property to set up inheritance, which is less flexible compared to `Object.create()`.

4. **Initialization:**
   - `Object.create()` does not automatically call an initialization function. You need to manually set properties on the new object.
   - Constructor functions can include initialization code to set up the new object.

Examples:

Using `Object.create()`:

```javascript
const proto = {
  greet() {
    console.log("Hello");
  },
};
const obj = Object.create(proto);
obj.greet(); // "Hello"
```

Using a constructor function:

```javascript
function MyConstructor() {}
MyConstructor.prototype.greet = function () {
  console.log("Hello");
};
const obj = new MyConstructor();
obj.greet(); // "Hello"
```

In summary, `Object.create()` provides more control over the prototype of the new object, while constructor functions are a more traditional way to create objects and set up inheritance in JavaScript.

---

### Q: How can you set or change an object’s prototype?

**A:** You can set or change an object's prototype using the following methods:

1. **Using `Object.create()` to Set Prototype at Creation:**

   ```javascript
   const proto = {
     greet() {
       console.log("Hello");
     },
   };
   const obj = Object.create(proto);
   console.log(Object.getPrototypeOf(obj) === proto); // true
   ```

2. **Using `Object.setPrototypeOf()` to Change Prototype:**

   ```javascript
   const proto = {
     greet() {
       console.log("Hello");
     },
   };
   const obj = {};
   Object.setPrototypeOf(obj, proto);
   console.log(Object.getPrototypeOf(obj) === proto); // true
   ```

3. **Using `__proto__` Property (Deprecated):**

   ```javascript
   const proto = {
     greet() {
       console.log("Hello");
     },
   };
   const obj = {};
   obj.__proto__ = proto;
   console.log(obj.__proto__ === proto); // true
   ```

   Note: The `__proto__` property is deprecated and should be avoided in favor of `Object.setPrototypeOf()`.

Each method allows you to set or change the prototype of an object, enabling inheritance and reuse of properties and methods from the prototype object.

---

### Q: What is the purpose of the hasOwnProperty() method?

**A:** The `hasOwnProperty()` method is used to check whether an object has a specific property as its own (not inherited) property. It returns a boolean value indicating whether the object has the specified property as its own property.

Example:

```javascript
const obj = { key1: "value1" };
console.log(obj.hasOwnProperty("key1")); // true
console.log(obj.hasOwnProperty("key2")); // false
```

In this example, `obj.hasOwnProperty("key1")` returns `true` because `key1` is an own property of `obj`. `obj.hasOwnProperty("key2")` returns `false` because `key2` is not an own property of `obj`.

The `hasOwnProperty()` method is useful for distinguishing between own properties and inherited properties, especially when iterating over an object's properties.

---

### Q: What happens if a property is not found on an object?

**A:** If a property is not found on an object, JavaScript will look for the property on the object's prototype. This process continues up the prototype chain until the property is found or the end of the chain is reached (i.e., `Object.prototype`). If the property is not found anywhere in the prototype chain, the result will be `undefined`.

Example:

```javascript
const proto = { key1: "value1" };
const obj = Object.create(proto);

console.log(obj.key1); // "value1" (found on prototype)
console.log(obj.key2); // undefined (not found)
```

In this example, `obj.key1` is found on the prototype, so it returns `"value1"`. However, `obj.key2` is not found on the object or its prototype, so it returns `undefined`.

This behavior allows objects to inherit properties and methods from their prototypes, enabling a form of inheritance in JavaScript.

---

### Q: How do you inherit properties from another object in JavaScript?

**A:** In JavaScript, you can inherit properties from another object using the following methods:

1. **Using `Object.create()` Method:**

   ```javascript
   const parent = { key1: "value1" };
   const child = Object.create(parent);
   console.log(child.key1); // "value1"
   ```

   In this example, `child` inherits properties from `parent`. The `child` object has access to `key1` through the prototype chain.

2. **Using Constructor Functions:**

   ```javascript
   function Parent() {
     this.key1 = "value1";
   }

   function Child() {
     Parent.call(this);
   }

   Child.prototype = Object.create(Parent.prototype);
   Child.prototype.constructor = Child;

   const child = new Child();
   console.log(child.key1); // "value1"
   ```

   In this example, `Child` inherits properties from `Parent` using a combination of constructor functions and the prototype chain.

3. **Using ES6 Classes:**

   ```javascript
   class Parent {
     constructor() {
       this.key1 = "value1";
     }
   }

   class Child extends Parent {
     constructor() {
       super();
     }
   }

   const child = new Child();
   console.log(child.key1); // "value1"
   ```

   In this example, `Child` inherits properties from `Parent` using the `extends` keyword and the `super()` function to call the parent class constructor.

Each method allows you to set up inheritance in JavaScript, enabling objects to share properties and methods from a parent object or class.

---

### Q: What is the difference between a constructor function and the class syntax?

**A:** The main differences between a constructor function and the class syntax in JavaScript are:

1. **Syntax:**

   - Constructor functions use the `function` keyword and are invoked with the `new` keyword.
   - Classes use the `class` keyword and have a more concise and readable syntax.

   Example of a constructor function:

   ```javascript
   function Person(name) {
     this.name = name;
   }
   Person.prototype.greet = function () {
     console.log(`Hello, my name is ${this.name}`);
   };
   const person = new Person("Alice");
   person.greet(); // "Hello, my name is Alice"
   ```

   Example of a class:

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }
     greet() {
       console.log(`Hello, my name is ${this.name}`);
     }
   }
   const person = new Person("Alice");
   person.greet(); // "Hello, my name is Alice"
   ```

2. **Inheritance:**

   - Constructor functions use the `prototype` property and `Object.create()` for inheritance.
   - Classes use the `extends` keyword and the `super()` function for inheritance.

   Example of inheritance with constructor functions:

   ```javascript
   function Animal(name) {
     this.name = name;
   }
   Animal.prototype.speak = function () {
     console.log(`${this.name} makes a noise`);
   };

   function Dog(name) {
     Animal.call(this, name);
   }
   Dog.prototype = Object.create(Animal.prototype);
   Dog.prototype.constructor = Dog;

   const dog = new Dog("Rex");
   dog.speak(); // "Rex makes a noise"
   ```

   Example of inheritance with classes:

   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
     }
     speak() {
       console.log(`${this.name} makes a noise`);
     }
   }

   class Dog extends Animal {
     constructor(name) {
       super(name);
     }
   }

   const dog = new Dog("Rex");
   dog.speak(); // "Rex makes a noise"
   ```

3. **Static Methods:**

   - In constructor functions, static methods are added directly to the constructor function.
   - In classes, static methods are defined using the `static` keyword.

   Example of static methods with constructor functions:

   ```javascript
   function Person(name) {
     this.name = name;
   }
   Person.greet = function () {
     console.log("Hello");
   };
   Person.greet(); // "Hello"
   ```

   Example of static methods with classes:

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }
     static greet() {
       console.log("Hello");
     }
   }
   Person.greet(); // "Hello"
   ```

In summary, the class syntax provides a more modern, readable, and concise way to create and manage objects and inheritance in JavaScript, while constructor functions are the traditional way of achieving the same functionality.

---

### Q: What are the differences between `__proto__` and `prototype`?

**A:** The main differences between `__proto__` and `prototype` in JavaScript are:

1. **Definition:**

   - `__proto__` is an internal property of an object that points to its prototype.
   - `prototype` is a property of a constructor function that is used to set the prototype of objects created by that constructor.

2. **Usage:**

   - `__proto__` is used to access or modify the prototype of an existing object.
   - `prototype` is used to define methods and properties that should be inherited by all instances of a constructor function.

3. **Syntax:**
   - `__proto__` is accessed directly on an object instance.
   - `prototype` is accessed on a constructor function.

Examples:

Using `__proto__`:

```javascript
const obj = {};
const proto = {
  greet() {
    console.log("Hello");
  },
};
obj.__proto__ = proto;
obj.greet(); // "Hello"
```

Using `prototype`:

```javascript
function MyConstructor() {}
MyConstructor.prototype.greet = function () {
  console.log("Hello");
};
const obj = new MyConstructor();
obj.greet(); // "Hello"
```

4. **Standardization:**
   - `__proto__` is a legacy feature and its use is generally discouraged in favor of `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.
   - `prototype` is a standard part of the constructor function and is widely used for inheritance.

In summary, `__proto__` is an internal property used to access or modify an object's prototype, while `prototype` is a property of a constructor function used to define properties and methods for instances created by that constructor.

---

### Q: How do you override a method in a subclass?

**A:** To override a method in a subclass, you define a method with the same name in the subclass. This method will replace the method inherited from the parent class.

Example using ES6 classes:

```javascript
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from Child");
  }
}

const child = new Child();
child.greet(); // "Hello from Child"
```

In this example, the `greet` method in the `Child` class overrides the `greet` method in the `Parent` class. When `greet` is called on an instance of `Child`, the overridden method in the `Child` class is executed.

Example using constructor functions:

```javascript
function Parent() {}
Parent.prototype.greet = function () {
  console.log("Hello from Parent");
};

function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.greet = function () {
  console.log("Hello from Child");
};

const child = new Child();
child.greet(); // "Hello from Child"
```

In this example, the `greet` method in the `Child` prototype overrides the `greet` method in the `Parent` prototype. When `greet` is called on an instance of `Child`, the overridden method in the `Child` prototype is executed.

Overriding methods allows subclasses to provide specific implementations while still inheriting properties and methods from the parent class.
