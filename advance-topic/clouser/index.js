// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function handleMsg(msg, delay) {
//   setTimeout(function () {
//     console.log(msg);
//   }, delay);
// }

// handleMsg('Hello World!', 2000);

// function handleModulas(x) {
//   return function (y) {
//     if (y % x === 0) {
//       return true;
//     }
//     return false;
//   };
// }

// const Modulas = handleModulas(2);

// console.log(Modulas(10));

// const counterModule = (function () {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// })();

// console.log(counterModule.increment());
// console.log(counterModule.getCount());

// function handleRent(initRent) {
//   let rentPrice = initRent;

//   return {
//     incRent: function (amount) {
//       rentPrice += amount;
//     },
//     decRent: function (amount) {
//       rentPrice -= amount;
//     },
//     getRent: function () {
//       console.log(rentPrice);
//     },
//   };
// }

// const clouser = handleRent(2000);
// const clouser1 = handleRent(5000);

// Rent.getRent();
// Rent.incRent(1000);
// Rent.incRent(400);
// Rent.decRent(200);
// Rent.getRent();
