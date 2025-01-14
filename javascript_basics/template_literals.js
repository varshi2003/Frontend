/*
 Template literals - Modern ES6 feature 
 -Delimited with backtick (`) characters
 -Allows String Declaration 
 -String interpolation 
 -Multi-line strings 
 -Expression Evaluation
 -Tagged template literals
*/

//String Declaration
//uses backtick instead of single or double quotes
const greeting = `Hello, world!`;
const msg = `"Hello" from 'Trustrace'`;
console.log(greeting);
console.log(msg);

//string interpolation - can be used to replace + concatenation operator
const name = "Varshitha";
const message = `Hello, ${name}!`; // Output: Hello, John!
console.log(message);

//multiple lines - substitute for \n
const multiLine = `This is
a string
that spans
multiple lines.`;
console.log(multiLine);

//expression evaluation
const a = 5;
const b = 10;
const result = `The sum is ${a + b}.`; // Output: The sum is 15.
console.log(result);

//tagged template literals
/*
  syntax - `string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`

Parameters - string text - becomes part of template literal 
                         - all characters are allowed including white spaces and line breaks however invalid escape 
                           characters are not allowed
           - expression - An expression to be inserted in the current position, whose value is converted to a string or passed to tagFunction.
           - tagFunction - If specified, it will be called with the template strings array and substitution expressions, and the return value becomes the value of the template literal.
*/
function tag(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of interpolated values
}
const student = "Alice";
const age = 25;
tag`Name: ${student}, Age: ${age}`;
