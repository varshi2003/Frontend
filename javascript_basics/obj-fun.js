//The Object.assign() method copies properties from one or more source objects to a target object.

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" , dob: "11/02/2003"};

// Assign Source to Target
Object.assign(person1, person2);

console.log(person1);

//usecases of assign
//copying properties from one obj to another

//cloning an obj by using empty obj

let person3 = { name: "Bob", age: 40 };
let clone = Object.assign({}, person3);

console.log(clone);
// Output: { name: "Bob", age: 40 }
console.log(clone === person2);
// Output: false (they are separate objects)

//merging multiple objs
let per1 = { name: "Alice" };
let per2 = { age: 30 };
let per3 = { city: "Paris" };

Object.assign(per1, per2, per3);
console.log(per1);
// Output: { name: "Alice", age: 30, city: "Paris" }

//object.assign() helps with shallow copy - in shalllow copy references are copied and any changes in duplicate/modified array are reflected on original one

//Object.entries()-Object.entries() returns an array of the key/value pairs in an object:
let text = Object.entries(per1);
console.log(text);

//usecases
//Iterating Over Object Properties
// const person = { name: "Alice", age: 25, city: "Paris" };

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }
// // Output:
// // name: Alice
// // age: 25
// // city: Paris

//Converting Objects to Arrays
// const person = { name: "Alice", age: 25, city: "Paris" };

// const entries = Object.entries(person);
// console.log(entries);
// // Output: [["name", "Alice"], ["age", 25], ["city", "Paris"]]

//Filtering Object Properties
// const person = { name: "Alice", age: 25, city: "Paris" };

// const filtered = Object.fromEntries(
//   Object.entries(person).filter(([key, value]) => key !== "city")
// );
// console.log(filtered);
// // Output: { name: "Alice", age: 25 }

//Mapping Object Values
// const salaries = { Alice: 5000, Bob: 7000, Carol: 8000 };

// const updatedSalaries = Object.fromEntries(
//   Object.entries(salaries).map(([name, salary]) => [name, salary * 1.1])
// );
// console.log(updatedSalaries);
// // Output: { Alice: 5500, Bob: 7700, Carol: 8800 }

//Object.fromEntries()
//The fromEntries() method creates an object from a list of key/value pairs.

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);

//Object.values() - returns a single dimension array of the object values
const samPer = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let res = Object.values(samPer);
console.log(res);

//The Object.keys() method returns an array with the keys of an object.
let res1 = Object.keys(samPer);
console.log(res1);

//object destructuring
//Object destructuring in JavaScript is a syntax feature that allows you to unpack values from objects into distinct variables. It simplifies extracting data and makes your code cleaner and more readable.
//syntax - const { property1, property2 } = object;
const student = { first_Name: "Alice", age: 25, city: "Paris",last_name: "doe" };
const { first_Name : firstName, age ,last_name : lastName = "kumar"} = student;

console.log(firstName); // Output: Alice
console.log(age); // Output: 25
console.log(lastName);
//rename variables during destructuring - You can assign a different name to the variable while destructuring.
const person = { name: "Alice", age: 25 };
const { name: fullName, age: yearsOld } = person;

console.log(fullName); // Output: Alice
console.log(yearsOld); // Output: 25

//set the default values during obj destructuring - You can set default values for properties that might be undefined.
const details = { stud: "Alice" };
const { stud, ID = 30 } = details;

console.log(ID); // Output: 30 (default value)

//nested objects - You can destructure nested objects by chaining properties.
const manager = { name: "Alice", address: { city: "Paris", zip: 75000 } };
const {
  address: { city, zip },
} = manager;

console.log(city); // Output: Paris
console.log(zip); // Output: 75000

//destructuring using rest operator
const students = { studName: "Alice", age: 25, city: "Paris" };
const { studName, ...res100 } = students;

console.log(studName); // Output: Alice
console.log(res100); // Output: { age: 25, city: "Paris" }

//usecases summary of obj destructuring
//Simplify Code: Extract specific properties from large objects.
//Function Parameters: Handle optional properties or provide defaults.

//rest operatorr - The rest operator (...) in JavaScript is a feature introduced in ES6 that allows you to collect the remaining properties of an object into a new object.

//Object.freeze(obj)
//Freezes an object so that its properties cannot be added, removed, or modified.
const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob"; // No effect
console.log(obj.name); // Output: Alice

//Object.seal(obj)
//Seals an object, allowing modifications to existing properties but preventing the addition or removal of properties.
const example = { name: "Alice" };
Object.seal(example);
example.age = 30; // Ignored
delete example.name; // Ignored
example.name = "Bob"; // Works
console.log(example); // Output: { name: "Bob" }
