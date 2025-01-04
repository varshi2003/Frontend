/*
key characteristics - 
unique Values: A Set automatically removes duplicate values.
Order: The order of elements is based on the insertion order.
Type of Data: A Set can hold any type of value, including objects.
  */

// const mySet = new Set(); // Creates an empty Set

const mySet = new Set([1, 2, 3, 4]);
console.log(mySet); // Output: Set(4) { 1, 2, 3, 4 }

//basic operations
mySet.add(10);
console.log(mySet);

console.log(mySet.has(1)); // Output: true
console.log(mySet.has(20)); // Output: false

mySet.delete(1);
console.log(mySet); // Output: Set(1) { 2 }

mySet.clear();
console.log(mySet); // Output: Set(0) {}

console.log(mySet.size); // Output: 0

//use cases of sets
//Removing Duplicates from an Array:
const numbers = [1, 2, 3, 1, 2, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4]

//Checking for Unique Elements:
const elements = ["apple", "banana", "apple"];
const isUnique = new Set(elements).size === elements.length;
console.log(isUnique); // Output: false

//Tracking Unique Visitors (or Events):
const visitors = new Set();
visitors.add("user1");
visitors.add("user2");
visitors.add("user1");
console.log(visitors.size); // Output: 2

//filtering data
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const intersection = [...set1].filter((value) => set2.has(value));
console.log(intersection); // Output: [2, 3]
