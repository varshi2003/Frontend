function createUser(name, age) {
  return {
    name: name,
    age: age,
    isActive: true,
  };
}

console.log(createUser("Alice", 25));
// Output: { name: "Alice", age: 25, isActive: true }

//incase of arrow functions
const getUser = (name, age) => ({ name, age });

console.log(getUser("Bob", 30));
// Output: { name: "Bob", age: 30 }

//inline return in higher order functions
const numbers = [1, 2, 3];
const squared = numbers.map((num) => ({ number: num, square: num ** 2 }));

console.log(squared);
// Output: [ { number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 } ]
