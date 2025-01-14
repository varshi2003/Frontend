/*A callback is a function passed as an argument to another function.
A closure also means a function binded together with its lexical scope
Here , the function y hot binded with the scope of x.Hence y has access to its parent's lexical scope x
*/

function x() {
  const a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();

// reference concept in closures - closures takes into consideration the value in the reference
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  a = 100;
  return inner;
}
const z = outer();
console.log(z);
z();

//closures - example 3
function top() {
  const b = 900;
  function mid() {
    const a = 7;
    function low() {
      console.log(a, b);
    }
    low();
  }
  mid();
}
top();

//set time out + closures
/* The result is namaste first and then the number becoz.JS doesn't wait for anything.
   It stores the setTimeout fun somewhere and keep moving up with the remaining lines.
   Once 3s completes the function comes back to the exection stack and prints the result
 */
function Timer() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste");
}
Timer();

//looping with set timeout
function loop() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Loop begins");
}
loop();

/*resolution of above code - this is resolved coz each time the function is called a separate space is allocated 
for the variable
In the below code - op will be 1 2 3 4 5 coz each time a different space is for j
*/
function Consecutive() {
  for (var j = 1; j <= 5; j++) {
    function close(j) {
      setTimeout(function () {
        console.log(x);
      }, j * 1000);
    }
    close(j);
  }
  console.log("Loop begins");
}
Consecutive();
