Array.prototype.find = function (condition) {
  for (let i = 0; i < this.length; i++) {
    if (condition(this[i])) {
      return this[i]; // Return the first match
    }
  }
  return undefined; // If no match is found
};

// Example Usage:
const nums = [5, 8, 0, 4];

// Define a condition directly
const condition = (value) => value > 10;

// Use the polyfill
const found = nums.find(condition);
console.log(found); // Output: 12
