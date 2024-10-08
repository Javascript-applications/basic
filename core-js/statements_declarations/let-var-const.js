// ================================================
//  Var statement
// ================================================

// var name = "deepak";
// console.log(name);

// let name = "deepak";
// console.log(name);

// const name = "deepak";
// console.log(name);

// const a = 20;
// a = 30;

// console.log(a);

// function call_back(love) {
//   if (love) {
//     let a = 10;
//     const b = 20;
//   }
//   console.log(`sum of two number : ${a + b}`);
// }

// call_back(true);

// if (true) {
//   const x = 30;
//   console.log(x);
// }
// const x = 20;

// console.log(x);

// var a = 20;
// let a = 20;

// console.log(a);

// var a = 1;

// {
//   let a = 20;
// }

// console.log(a);

// function outer(a) {
//   const a = 1;
//   console.log(a);
// }

// outer(20);

// var a,
//   b = 0,
//   b = (a = "deeapk");

// console.log(b);

// var x = 0; // Declares x within file scope, then assigns it a value of 0.

// console.log(typeof z); // "undefined", since z doesn't exist yet

// function a() {
//   var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

//   console.log(x, y); // 0 2

//   function b() {
//     x = 3; // Assigns 3 to existing file scoped x.
//     y = 4; // Assigns 4 to existing outer y.
//     z = 5; // Creates a new global variable z, and assigns it a value of 5.
//     // (Throws a ReferenceError in strict mode.)
//   }

//   b(); // Creates z as a global variable.
//   console.log(x, y, z); // 3 4 5
// }

// a(); // Also calls b.
// console.log(x, z); // 3 5
// console.log(typeof y); // "undefined", as y is local to function a

// let greetbar = "deepak kurmi";

// function outer_fun(a) {
//   var a;
// }
// outer_fun(10);

// const a = "deepak kurmi";

// console.log(a);

// const a = 10;
// let b = 20;
// console.log(b);

// const a = 10;

// console.log(a);

// console.log(a);

// let a = 10;

// console.log(a);

// let a = 20;

// a = 10;

// console.log(a);

// {
//   const func = () => console.log(letVar);

//   const letVar = 3;
//   func();
// }

// global  scope
// ===========================

// let language = "java";

// function fisrt() {
//   return language;
// }

// function second() {
//   return fisrt();
// }

// console.log(second());

// local  or function scope
// ===========================

// function main() {
//   var a = 10;

//   function multiply() {
//     console.log(a * 5);
//   }

//   multiply();
// }

// console.log(main());

// block scope
// ===========================

// var a = 10;

// if (true) {
//   let b = 10;

//   console.log(b);
// }

// console.log(b);

// x = 5;
// let x;

// let a = 10;
// console.log(a);

// function codeHoist() {
//   a = 10;
//   let username = "deepak";
// }

// codeHoist();

// console.log(a);
// console.log(username);

// console.log(name);
// var name = "deepak";

// let a;
// console.log(a);
// a = 10;

// function one() {
//   console.log(name);
//   let name = "deepak";
// }

// one();

// let addNum = function () {
//   let name = "deepak";
//   console.log(name);
// };

// addNum();

x = 5;

let x;

console.log(x);
