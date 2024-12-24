Here’s a list of **50 frequent intermediate-level JavaScript object questions** to help deepen your understanding:

---

### **Basics of JavaScript Objects**

1. What is the difference between an object and a primitive data type in JavaScript?

   - Objects are collections of key-value pairs, while primitives are single values (e.g., string, number). Objects can hold more complex data and functions.

2. How do you create an object in JavaScript? Explain different methods.

   - Using object literal: `const obj = {};`
   - Using `new Object()`: `const obj = new Object();`
   - Using a constructor function or class: `function Obj() { this.prop = value; }` or `class Obj { constructor() { this.prop = value; } }`.

3. What is the purpose of `Object.assign()`? Provide an example.

   - Copies properties from one or more source objects to a target object.
   - Example: `Object.assign(target, source1, source2);`

4. How do you check if a property exists in an object?

   - Using `in` operator: `'property' in obj`
   - Using `hasOwnProperty()`: `obj.hasOwnProperty('property')`

5. What are the different ways to access object properties?

   - Dot notation: `obj.property`
   - Bracket notation: `obj['property']`

6. What is the difference between dot notation and bracket notation in accessing object properties?

   - Dot notation is simpler and more readable.
   - Bracket notation allows access using variables and special characters.

7. How can you loop over an object’s properties?

   - Using `for...in` loop.
   - Using `Object.keys()`, `Object.values()`, or `Object.entries()` with `forEach()`.

8. What is the difference between `for...in` and `Object.keys()`?

   - `for...in` iterates over all enumerable properties, including inherited ones.
   - `Object.keys()` returns an array of the object's own enumerable properties.

9. How do you clone an object in JavaScript?

   - Using `Object.assign()`: `const clone = Object.assign({}, obj);`
   - Using spread operator: `const clone = { ...obj };`

10. What is the difference between shallow copy and deep copy in JavaScript objects?
    - Shallow copy copies only the first level of the object, nested objects are shared.
    - Deep copy copies all levels, creating independent objects (can be done using libraries like Lodash or custom functions).

---

### **Object Prototypes and Inheritance**

11. What is the prototype chain in JavaScript?

    - A mechanism by which objects inherit properties and methods from other objects. Each object has a prototype, and the chain ends with `null`.

12. How do you create an object without a prototype?

    - Using `Object.create(null)`.

13. What is the difference between `Object.create()` and a constructor function?

    - `Object.create()` creates a new object with a specified prototype.
    - Constructor functions create objects using the `new` keyword and can include initialization code.

14. How can you set or change an object’s prototype?

    - Using `Object.setPrototypeOf(obj, prototype)`.

15. What is the purpose of the `hasOwnProperty()` method?

    - Checks if a property is a direct property of the object, not inherited from the prototype chain.

16. What happens if a property is not found on an object?

    - JavaScript looks up the prototype chain until it finds the property or reaches `null`.

17. How do you inherit properties from another object in JavaScript?

    - Using `Object.create(prototype)` or `class` inheritance.

18. What is the difference between a constructor function and the `class` syntax?

    - `class` syntax is syntactic sugar over constructor functions, providing a cleaner and more concise way to create objects and handle inheritance.

19. What are the differences between `__proto__` and `prototype`?

    - `__proto__` is the actual object that is used in the lookup chain to resolve methods and properties.
    - `prototype` is a property of constructor functions used to set `__proto__` of instances.

20. How do you override a method in a subclass?
    - Define the method in the subclass with the same name as in the parent class.

---

### **Object Manipulation**

21. How do you merge two objects in JavaScript?

    - Using `Object.assign(target, source)`.
    - Using spread operator: `{ ...obj1, ...obj2 }`.

22. What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?

    - `Object.keys()` returns an array of property names.
    - `Object.values()` returns an array of property values.
    - `Object.entries()` returns an array of key-value pairs.

23. How can you convert an object to an array in JavaScript?

    - Using `Object.keys()`, `Object.values()`, or `Object.entries()`.

24. How do you freeze an object in JavaScript? What does it prevent?

    - Using `Object.freeze(obj)`. Prevents adding, removing, or modifying properties.

25. What is the purpose of `Object.seal()` and how is it different from `Object.freeze()`?

    - `Object.seal()` prevents adding or removing properties but allows modification.
    - `Object.freeze()` prevents all changes.

26. How do you make a property non-enumerable?

    - Using `Object.defineProperty(obj, 'property', { enumerable: false })`.

27. How can you make a property non-configurable?

    - Using `Object.defineProperty(obj, 'property', { configurable: false })`.

28. How do you delete a property from an object?

    - Using `delete obj.property`.

29. What is the difference between `delete obj.prop` and `obj.prop = undefined`?

    - `delete obj.prop` removes the property.
    - `obj.prop = undefined` sets the property value to `undefined` but keeps the property.

30. How do you define getters and setters in an object?
    - Using `Object.defineProperty()` or within object literal using `get` and `set` keywords.

---

### **Object Context and Methods**

31. What is the `this` keyword in the context of an object?

    - Refers to the object on which a method is called.

32. How does the value of `this` change based on how a function is called?

    - Depends on the call context: method call, function call, constructor call, or `call`/`apply`/`bind`.

33. What is the purpose of `bind()`, `call()`, and `apply()`? Provide examples.

    - `bind()` creates a new function with `this` bound to a specific value.
    - `call()` calls a function with a specific `this` value and arguments.
    - `apply()` calls a function with a specific `this` value and an array of arguments.
    - Example:
      ```javascript
      function greet(greeting) {
        console.log(greeting + ", " + this.name);
      }
      const person = { name: "Alice" };
      const boundGreet = greet.bind(person);
      boundGreet("Hello"); // Hello, Alice
      greet.call(person, "Hi"); // Hi, Alice
      greet.apply(person, ["Hey"]); // Hey, Alice
      ```

34. How can you define a method inside an object?

    - Using function expression or shorthand method syntax:
      ```javascript
      const obj = {
        method() {
          console.log("Hello");
        },
      };
      ```

35. What happens if you return an object from a constructor function?

    - The returned object replaces the instance created by the constructor.

36. How do arrow functions handle the `this` keyword differently than regular functions?

    - Arrow functions do not have their own `this` context; they inherit `this` from the enclosing scope.

37. What is the difference between methods defined inside and outside the constructor function?

    - Inside: Each instance gets its own copy.
    - Outside (prototype): Shared among all instances.

38. How do you use destructuring to extract properties from an object?

    - Using `{ prop1, prop2 } = obj`:
      ```javascript
      const obj = { a: 1, b: 2 };
      const { a, b } = obj;
      ```

39. What is method chaining? Provide an example.

    - Calling multiple methods on the same object consecutively.
    - Example:
      ```javascript
      class Calculator {
        constructor(value = 0) {
          this.value = value;
        }
        add(val) {
          this.value += val;
          return this;
        }
        subtract(val) {
          this.value -= val;
          return this;
        }
        multiply(val) {
          this.value *= val;
          return this;
        }
        divide(val) {
          this.value /= val;
          return this;
        }
      }
      const result = new Calculator(10)
        .add(5)
        .subtract(3)
        .multiply(4)
        .divide(2).value; // 24
      ```

40. How can you create private properties or methods in an object?
    - Using closures or `WeakMap`:
      ```javascript
      function createPerson(name) {
        let _name = name;
        return {
          getName() {
            return _name;
          },
          setName(newName) {
            _name = newName;
          },
        };
      }
      const person = createPerson("Alice");
      console.log(person.getName()); // Alice
      person.setName("Bob");
      console.log(person.getName()); // Bob
      ```

---

### **Advanced Topics**

41. What is an object literal, and how is it different from other object creation methods?

    - An object literal is a simple way to create objects using `{}`.
    - Other methods include `new Object()`, constructor functions, and `Object.create()`.

42. What are computed property names in JavaScript objects? Provide an example.

    - Property names defined using expressions.
    - Example:
      ```javascript
      const propName = "name";
      const obj = { [propName]: "Alice" };
      ```

43. How do you handle circular references in objects when serializing them to JSON?

    - Use a custom replacer function in `JSON.stringify()`:
      ```javascript
      const obj = {};
      obj.self = obj;
      const jsonString = JSON.stringify(obj, (key, value) =>
        key === "self" ? undefined : value
      );
      ```

44. What are the differences between `Object.preventExtensions()`, `Object.seal()`, and `Object.freeze()`?

    - `Object.preventExtensions()`: Prevents adding new properties.
    - `Object.seal()`: Prevents adding/removing properties, allows modification.
    - `Object.freeze()`: Prevents all changes.

45. How do you dynamically add or modify properties in an object?

    - Using dot notation or bracket notation:
      ```javascript
      obj.prop = value;
      obj["prop"] = value;
      ```

46. How can you implement immutability in objects?

    - Using `Object.freeze()` or libraries like Immutable.js.

47. What are Symbols in JavaScript, and how are they used in objects?

    - Unique and immutable data types used as object property keys:
      ```javascript
      const sym = Symbol("key");
      const obj = { [sym]: "value" };
      ```

48. How do you ensure a property is only accessible internally in an object?

    - Using closures or `WeakMap`.

49. What are the differences between `Object.fromEntries()` and `Object.entries()`?

    - `Object.entries()`: Converts an object to an array of key-value pairs.
    - `Object.fromEntries()`: Converts an array of key-value pairs to an object.

50. How do you use the `in` operator in JavaScript to check for properties?
    - Using `'property' in obj` (checks if the property exists in the object or its prototype chain).

---
