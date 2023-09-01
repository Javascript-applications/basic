// const arr = ["a", "b", "c", "d", "e"];
// const arrIter = arr[Symbol.iterator]();
// console.log(arrIter.next().value); // a
// console.log(arrIter.next().value); // b
// console.log(arrIter.next().value); // c
// console.log(arrIter.next().value); // d
// console.log(arrIter.next().value); // e

// Handling strings and string arrays with the same function

// function logIterable(it) {
//   if (typeof it[Symbol.iterator] !== "function") {
//     console.log(it, "is't a iterable");
//     return;
//   }
//   for (const iterator of it) {
//     console.log("iterator", iterator);
//   }
// }

// logIterable(["1", "2", 3]);
// logIterable("abc");
// logIterable(123);

// let sym1 = Symbol("hello");
// let sym2 = Symbol("hello");

// console.log(typeof sym1);
// console.log(sym1 === sym2);

// console.log(typeof Symbol.iterator === "symbol");

// Symbols and for...in iteration

// const sum = Symbol("foo");

// let obj = {};

// obj[Symbol("a")] = "a";
// obj[Symbol.for("b")] = "b";
// obj["c"] = "c";
// obj.d = "d";
// obj[sum] = "e";

// console.log("obj", obj);

// for (const key in obj) {
//   console.log("key", key);
// }

// Symbols and JSON.stringify()

// console.log(JSON.stringify(obj));

// console.log("sum", sum.toString());

// ==============================================
// Symbol.asyncIterator;
// User-defined async iterables

// const myAsyncIterable = {
//   async *[Symbol.asyncIterator]() {
//     yield "hello";
//     yield "async";
//     yield "iteration!";
//   },
// };

// (async () => {
//   for await (const iterator of myAsyncIterable) {
//     console.log(iterator);
//   }
// })();

// const delayedResponses = {
//   delays: [300, 500, 1000],
//   wait(delay) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, delay);
//     });
//   },
//   async *[Symbol.asyncIterator]() {
//     for (const delay of this.delays) {
//       await this.wait(delay);
//       yield `Delayed response for ${delay} milliseconds`;
//     }
//   },
// };

// (async () => {
//   for await (const iterator of delayedResponses) {
//     console.log(iterator);
//   }
// })();

// Symbol.prototype.description;

// let desSymbol = Symbol("dec").description;
// console.log(desSymbol);

// let iteratorSymbol = Symbol.iterator.description;
// console.log(iteratorSymbol);

// const number = [2, 3, 5];
// const data = ["a", "b", "c"];

// data[Symbol.isConcatSpreadable] = false;

// console.log(number.concat(data));

// const x = [1, 2, 3];

// const fakeArray = {
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
//   0: "hello",
//   1: "world",
// };

// x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
// console.log(x.concat(fakeArray));

// ==============================================
// Symbol.iterator
// User-defined iterables

// const myIterable = {};

// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
// };

// console.log([...myIterable]);

// class Foo {
//   *[Symbol.iterator]() {
//     yield 1;
//   }
// }

// console.log(...new Foo());

// let data = Symbol("hello");

// console.log(Symbol.for("hello") === Symbol.for("hello"));

// console.log(Symbol("hello") === Symbol("hello"));

// let localSym = Symbol("yoo");
// let globalSym = Symbol.for("foo");

// console.log(Symbol.keyFor(globalSym));

// console.log(Symbol.keyFor(Symbol.iterator));

// console.log(typeof Object(localSym));
// console.log(typeof Object(localSym).valueOf());
