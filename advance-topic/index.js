// let handleFunciton = function () {
//   let a = 10 + 10;
//   return a;
// };

// console.log(handleFunciton());

// let handleMethod = {
//   name: 'virat',
//   school: function () {
//     console.log('I passed school');
//   },
// };

// handleMethod.school();

// function a() {
//   return function () {
//     console.log('calling inner function');
//   };
// }

// a()();

// let c = a();
// c();

// function add(a, b) {
//   console.log(a + b);
// }

// function main(callback, a, b) {
//   if (a && b) {
//     callback(a, b);
//   }
// }

// main(add, 3, 4);

// function f1() {
//   console.log('Hi by f1!');
// }

// function f2() {
//   f1();

//   console.log('Hi by f2!');
// }

// f2();

// 'use strict';

// let a = null;

// a = 1;

// const id = setTimeout(
//   (a) => {
//     console.log('start', a);
//   },
//   2000,
//   a
// );

// clearInterval(id);

// const id = setInterval(
//   (a) => {
//     a++;
//     console.log('runing', a);
//   },
//   1000,
//   a
// );

// clearInterval(id);

// var a = function () {
//   console.log('ok');
// };

// console.log(a);

// function calculator() {
//   return function () {
//     console.log('ok');
//   };
// }

// const callback = calculator();

// console.log(callback());
