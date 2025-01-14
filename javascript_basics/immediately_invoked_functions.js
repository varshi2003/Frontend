/*
  immediately invoked functions - execute immediately as soon as as they are defined
  create a local scope for variables to prevent from polluting the global scope 

  syntax - 
  (function (){
    //function logic
  }) ();

  IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.
*/

//usecases of immediately invoked functions

//1.Avoids global scope pollution

//normal function

// Variables still need to be explicitly managed to avoid global pollution
//Called explicitly using the function name.
//Used for reusable logic and can be called multiple times.
function initialize() {
  let message = "Hello from normal function!";
  console.log(message);
}
initialize();

//immediately invoked function
// No chance of `message` leaking to the global scope
//Invoked automatically without a separate call.
//Used for one-time operations like initialization or private scope.
(function () {
  let message = "Hello from IIFE!";
  console.log(message);
})();

/*-----------------------------------------------------------------------*/
//prevents conflicts
//normal functions
function library1() {
  const libraryName = "Library1";
  console.log(libraryName);
}
function library2() {
  const libraryName = "Library2";
  console.log(libraryName);
}
library1(); // Output: Library1
library2(); // Output: Library2

//immediately invoked functions
// No risk of conflicting variable names
(function () {
  const libraryName = "Library1";
  console.log(libraryName);
})();
(function () {
  const libraryName = "Library2";
  console.log(libraryName);
})();

function closures() {
  console.log("Hi");
  return function () {
    console.log("Hello");
    return (name) => {
      console.log("Trustrace", name);
    };
  };
}
const funCall = closures();
const funCallTwo = funCall();
funCallTwo();
