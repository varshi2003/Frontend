//asynchronous code in js using callback - the fun inside setTimeout is a callback function which exceutes after 5s

console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");

/*
There are 2 Parts of Callback:

Good Part of callback - Callback are super important while writing asynchronous code in JS
Bad Part of Callback - Using callback we can face issue:
Callback Hell
Inversion of control

Callback Hell :
When we have a large codebase and multiple apis and have dependency on each other, then we fall into callback hell. 
These codes are tough to maintain. These callback hell structure is also known as Pyramid of Doom.

 */
const cart = ["shoes", "pants", "kurta"];
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//Inversion of Control - the function is losing control of its own function
api.createOrder(cart, function () {
  api.proceedToPayment();
});

// 💡 So over here, we are creating a order and then we are blindly trusting `createOrder` to call `proceedToPayment`.

// 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly trusting `createOrder` to call it and handle it.

// 💡 When we pass a function as a callback, basically we are dependant on our parent function that it is his responsibility to run that function. This is called `inversion of control` because we are dependant on that function. What if parent function stopped working, what if it was developed by another programmer or callback runs two times or never run at all.

// 💡 In next session, we will see how we can fix such problems.
