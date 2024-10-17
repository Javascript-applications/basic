// example one  - print 1 to 10
// ========================================
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const iterator of arr) {
//   console.log(iterator);
// }

// const obj = {};

// obj[Symbol.iterator] = function () {
//   let n = 1;

//   let returnObject = {
//     next: function () {
//       let done = false;
//       if (n > 10) {
//         done = true;
//       }
//       let result = { value: n, done: done };
//       n++;
//       return result;
//     },
//   };
//   return returnObject;
// };

// for (const iterator of obj) {
//   console.log(iterator);
// }

// example one  - print string
// ========================================

// let string = 'deepakkurmi';

// for (const iterator of string) {
//   console.log(iterator);
// }

// let objectString = {
//   value: 'Deepak kurmi',
//   [Symbol.iterator]: function () {
//     let counter = 0;
//     const stringValue = this.value;
//     const stringLn = stringValue.length;
//     const returnObject = {
//       next: function () {
//         let done = false;
//         if (stringLn === counter) {
//           done = true;
//         }
//         let result = { value: stringValue[counter], done: done };
//         counter++;
//         return result;
//       },
//     };
//     return returnObject;
//   },
// };

// for (const iterator of objectString) {
//   console.log(iterator);
// }

// example one  - print string
// ========================================

// let string = 'ram';

// let iterator = string[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done === true) break;
//   console.log(result.value);
// }

// User Defined Iterator
// ========================================

// function displayElements(arrA) {
//   let n = 0;

//   return {
//     next() {
//       let done = false;
//       if (n >= arrA.length) {
//         done = true;
//       }
//       return { value: arrA[n++], done };
//     },
//   };
// }

// const arr = ['h', 'e', 'l', 'l', 'o'];

// let arrIterator = displayElements(arr);

// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
