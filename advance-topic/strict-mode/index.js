// ======================

// function sum(a, b) {
//   console.log(add);
//   add = a + b;
//   console.log(add);
// }

// sum(12, 20);

// ======================

// 'use strict';

// let a = 10;

// {
//   var b = 10;
//   console.log(b);
// }

// c = 20;

// console.log(c);
// console.log(b);

// ======================

'use strict';
let obj = {};
Object.defineProperty(obj, 'x', { value: 0, writable: false });

// Will throw an error
obj.x = 3.14;

console.log(obj);
