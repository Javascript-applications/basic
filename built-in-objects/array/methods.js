// Array.prototype[@@iterator]()
// ==============================================
// ==============================================

// const iterable = [2, 5, 5, 2, 3, 4, 6, 1, 2, 5, 6];

// const numbers = iterable[Symbol.iterator]();

// let nextValue = numbers.next();

// while (!nextValue.done) {
//     console.log(nextValue.value);
//   nextValue = numbers.next();
// }

// for (const iterator of iterable) {
//     console.log("iterator", iterator);
// }

// ==============================================

// const setInstance = new Set(iterable);

// console.log("setInstance", setInstance);

// for (const iterator of setInstance) {
//     console.log("iterator", iterator);
// }

// ==============================================
// Iterating over a user-defined iterable

// const handleProductSelling = {
//   [Symbol.iterator]() {
//     var num = 1;
//     return {
//       next() {
//         if (num <= 3) {
//           return { value: num++, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// for (const iterator of handleProductSelling) {
//     console.log("iterator", iterator);
// }

// ==============================================
// Iterating over an object with an @@iterator generator method:

// const iterableGenerator = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// };

// for (const iterator of iterableGenerator) {
//     console.log("iterator", iterator);
// }

// Iterable iterators (iterators with a [@@iterator]() method that returns this) are a fairly common technique
// to make iterators usable in syntaxes expecting iterables, such as for...of.

// let i = 1;
// const iterable = {
//   next() {
//     if (i <= 3) {
//       return { value: i++, done: false };
//     }
//     return { value: undefined, done: true };
//   },
//   [Symbol.iterator]() {
//     return this;
//   },
// };

// for (const value of iterable) {
//   console.log("value", value);
// }

// Iterating over async iterables

// const LIMIT = 3;

// const asyncIterable = {
//   [Symbol.asyncIterator]() {
//     let i = 0;
//     return {
//       next() {
//         let done = i == LIMIT;
//         let value = done ? undefined : i++;
//         return Promise.resolve({ value, done });
//       },
//       return() {
//         return { done: true };
//       },
//     };
//   },
// };

// (async () => {
//   for await (const iterator of asyncIterable) {
//     console.log("iterator", iterator);
//   }
// })();

// ==============================================
// Array.prototype.at();
// ==============================================

// let arr = [2, 3, 5, 6, 6];
// console.log(arr.at(2));

// const dummy = {
//   length: 3,
//   0: "a",
//   1: "b",
//   2: "c",
// };

// console.log(Array.prototype.at.call(dummy, 2));

// ==============================================
// Array.prototype.concat()
// ==============================================

// let arr1 = [2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];

// console.log(arr1.concat(arr2));

// let object1 = { 0: 1, 1: 2, 2: 3, length: 3 };
// let object2 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
//   [Symbol.isConcatSpreadable]: true,
// };

// const data = [0].concat(object1, object2);

// for (const iterator of data) {
//   console.log("data", iterator);
// }

// ==============================================
// Array.prototype.copyWithin();
// ==============================================
