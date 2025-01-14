
// console.log("start");
// setTimeout(function cbT() {
//   console.log("CB Timeout");
// }, 0);
// let count = 0;
// for (let i = 0; i <= 100000; i++) {
// //   console.log("hello");
//  ++count;
// }
// fetch("https://677ba16120824100c07a3b98.mockapi.io/simplereturn/list/dummpyresponse").then(function cbF() {
//     console.log("CB Netflix");
// });
// console.log(count);



console.log("start");

setTimeout(function cbT() {
  console.log("CB Timeout");
}, 0);

const p = new Promise((resolve, reject) => {
    // setTimeout(() => {
      resolve("P1 Success");
    // }, 3000);
});

p.then( data => {
    console.log("Promise resolved", data);
}) 

console.log("end");