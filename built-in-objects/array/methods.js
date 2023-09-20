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

// let arr = ["d", "r", "s", "n", "m", "t"];

// arr.copyWithin(3, 2, 4);

// console.log(arr);

// ==============================================
// Array.prototype.entries()
// ==============================================
// Iterating with index and element JS

// let arr = ["a", "b", "c"];

// for (const [index, ele] of arr.entries()) {
//   console.log(index, ele);
// }

// Calling entries() on non-array objects

// let obj = {
//   length: 3,
//   0: "a",
//   1: "b",
//   2: "c",
//   3: "d",
// };

// for (const iterator of Array.prototype.entries.call(obj)) {
//   console.log(iterator);
// }

// ==============================================
// Array.prototype.every()
// ==============================================
// Testing size of all array elements

// let elements = [10, 20, 30, 40, 5, 6];

// let testCondition = elements.every((ele, index, arr) => {
//   return ele > 10;
// });

// console.log("testCondition", testCondition);

// Check if one array is a subset of another array

// function isSubset(arr1, arr2) {
//   return arr2.every((ele) => arr1.includes(ele));
// }

// let array = [1, 2, 3, 4, 5, 6, 7];

// console.log(isSubset(array, [5, 7, 6]));
// console.log(isSubset(array, [5, 8, 7]));
// Using every() on sparse arrays

// const arr = [2, , 2];

// console.log(arr.every((x) => x === 2));

// Affecting Initial Array (modifying, appending, and deleting)

// ==============================================
// Array.prototype.fill();
// ==============================================

// fill(value, start, end);

// let arr = [2, 3, 4, 5, 5, 6, 4, 8, 6];

// arr.fill(2, 3, 6);

// console.log(arr);

// const arr = new Array(3).fill({});
// arr[0].hi = "hello";
// console.log(arr);

// const tempGirls = Array(5).fill("girl", 0);

// console.log("tempGirls", tempGirls);

// ==============================================
// Array.prototype.filter();
// ==============================================

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const newArr = words.filter((word) => word.length > 6);

// console.log(newArr);

// Find all prime numbers in an array

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrimeNum(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// const newArr = array.filter(isPrimeNum);

// console.log(newArr);

// Filtering invalid entries from JSON

// const arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   {},
//   { id: null },
//   { id: NaN },
//   { id: "undefined" },
// ];

// let invalidEntries = 0;

// const validItems = arr.filter((item) => {
//   if (item.id !== 0 && Number.isFinite(item.id)) {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// });

// console.log("validItems", validItems);
// console.log("invalidEntries", invalidEntries);

// Searching in array;

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// function searchItems(arr, query) {
//   return arr.filter((ele) => ele.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(searchItems(fruits, "ap"));
// console.log(searchItems(fruits, "an"));

// Calling filter() on non - array objects

// const arrayLike = {
//   length: 3,
//   0: "x",
//   1: "y",
//   2: "z",
//   3: "a",
// };

// console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "z"));

// ==============================================
// Array.prototype.find();
// ==============================================

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.find((num) => num > 130));

// (1). Find an object in an array by one of its properties

// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// console.log(
//   inventory.find(({ name }) => {
//     return name === "cherries";
//   })
// );

// (2).Find a prime number in an array

// let primeArr = [1, 3, 4, 2, 5];

// function isPrime(num) {
//   let start = 2;

//   while (num > start) {
//     if (num % start++ === 0) {
//       return false;
//     }
//   }

//   return num > 1;
// }

// console.log(primeArr.find(isPrime));

// console.log(Math.sqrt(3));

// (2).Find a prime number in an array

// ==============================================
// Array.prototype.findLast();
// ==============================================

// const array1 = [5, 12, 50, 130, 44];

// console.log(array1.findLast((ele) => ele > 45));

// ==============================================
// Array.prototype.flat();
// ==============================================

// const arr = [2, 3, 5, [6, 7]];

// console.log(arr.flat());

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat(Infinity));

// ==============================================
// Array.prototype.flatMap();
// ==============================================

// const arr1 = [1, 2, 3, 4];

// const d = arr1.map((x) => [x * 2]);
// // [[2], [4], [6], [8]]
// console.log(d);

// const p = arr1.flatMap((x) => [x * 2]);
// // [2, 4, 6, 8]
// console.log(p);
// // only one level is flattened
// arr1.flatMap((x) => [[x * 2]]);
// // [[2], [4], [6], [8]]

// console.log(arr1);

// const arr = [];

// ==============================================
// Array.prototype.forEach();
// ==============================================

// const numbers = [2, 3, 5, 6];

// let sum = 0;

// function adding(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// numbers.forEach((ele) => {
//   sum = adding(sum, ele);
// });

// console.log("sum", sum);

// Using thisArg

// class Counter {
//   constructor() {
//     this.count = 0;
//     this.sum = 0;
//   }

//   add(arr) {
//     arr.forEach((element) => {
//       this.sum += element;
//       this.count++;
//     }, this);
//   }
// }

// const obj = new Counter();

// obj.add([2, 3, 4, 5]);

// console.log("count", obj.count);
// console.log("sum", obj.sum);

// An object copy function

// function copy(obj) {
//   const copy = Object.create(Object.getPrototypeOf(obj));
//   const propName = Object.getOwnPropertyNames(obj);
//   propName.forEach((name) => {
//     const desc = Object.getOwnPropertyDescriptor(obj, name);
//     Object.defineProperty(copy, name, desc);
//   });
//   return copy;
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = copy(obj1);

// console.log(obj2);

// Modifying the array during iteration

// const words = ["one", "two", "three", "four"];

// words.forEach((word) => {
//   if (word === "three") words.shift();
// });

// console.log(words);

// Flatten an array

// function flatten(arr) {
//   const result = [];

//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       result.push(...flatten(element));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }

// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
// console.log(flatten(nested));

// ==============================================
// Array.form()
// ==============================================

// Array from a String
// const arr = Array.from("foo");

// console.log(arr);

// Array from a Set

// const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(set);
// console.log(Array.from(set, (x) => x));

// Array from a Map

// const map = new Map([
//   [1, 2],
//   [2, 4],
//   [4, 8],
// ]);

// console.log(Array.from(map));

// const map1 = new Map([
//   ["1", 1],
//   ["2", 2],
// ]);

// console.log(Array.from(map1.ke()));

// Array from a NodeList
// Array from an Array-like object (arguments)

// function f(...params) {
//   return Array.from(params);
// }

// console.log(f(1, 2, 3));

// console.log((90 - 65) / 1 + 1);

// console.log("A".charCodeAt(0), "Z".charCodeAt(0));

// Sequence generator (range)

// function range(start, stop, step) {
//   return Array.from(
//     { length: (stop - start) / step + 1 },
//     (_, i) => start + i * step
//   );
// }

// console.log(range(0, 10, 2));
// console.log(
//   range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) => {
//     return String.fromCharCode(x);
//   })
// );

// const asyncIterable = (async function* () {
//   for (let i = 0; i < 5; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 10 * i));
//     yield i;
//   }
// })();

// Array.fromAsync(asyncIterable).then((array) => console.log(array));

// Array.fromAsync(
//   new Map([
//     [1, 2],
//     [3, 4],
//   ])
// ).then((array) => console.log(array));

// ==============================================
// Array.prototype.includes();
// ==============================================

// const arr = ["a", "v", "c"];

// console.log(arr.includes("a", -1));

// ==============================================
// Array.prototype.indexOf();
// ==============================================

// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// function searching(search) {
//   return beasts.filter((text) => text.includes(search));
// }

// console.log(searching("son"));

// const include = [];

// const array = ["a", "b", "a", "c", "d", "a", "d", "a"];

// console.log(array.indexOf("a", 5));

// const element = "a";

// let idx = array.indexOf(element);

// while (idx !== -1) {
//   include.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }

// console.log("include", include);

// let count = 0;
// let search = "a";

// for (let i = 0; i < array.length; i++) {
//   if (search === array[i]) {
//     count++;
//   }
// }

// console.log([1, , 2, NaN, null].includes(null));

// ==============================================
// Array.isArray()
// ==============================================

// console.log(Array.isArray(new Array()));

// ==============================================
// Array.prototype.join();
// ==============================================

// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// console.log(elements.join("-"));
// console.log(elements.join(","));

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [6, 7, 8],
// ];

// console.log(matrix.join(";"));

// ==============================================
// Array.prototype.keys()
// ==============================================

// const array1 = ["a", "b", "c"];

// const iterable = array1.keys();

// for (const iterator of iterable) {
//   console.log(iterator);
// }

// Using keys() on sparse arrays

// const arr = ["a", , "c"];

// console.log(Object.keys(arr));
// console.log([...arr.keys()]);

// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(animals.lastIndexOf("Dodo"));
// // Expected output: 3

// const products = [
//   { name: "sports car" },
//   { name: "laptop" },
//   { name: "phone" },
// ];

// products.map((product) => {
//   product.price = 100;
// });

// console.log(products);

// ==============================================
// Array.of();
// ==============================================

// console.log(Array.of(1, 2, 3, 4));

// const arr = [1, 2, 3, 4];

// ==============================================
// Array.prototype.reduce()
// ==============================================

// const array1 = [1, 2, 3, 4];

// let total = 0;
// let prudct = 0;

// const sum = array1.reduce(
//   (accu, curr) => {
//     accu.total += curr;
//     accu.prudct += curr / 2;
//     return accu;
//   },
//   { total, prudct }
// );

// console.log(sum);

// const array = [1, 2, 3, 4];

// const result = array.reduceRight((accumulator, currentValue) => {
//   console.log("currentValue", currentValue);
//   console.log("accumulator", accumulator);
//   return accumulator + currentValue;
// });

// console.log("result", result);

// const arrayLike = {
//   length: 3,
//   0: 2,
//   1: 3,
//   2: 4,
// };
// console.log(
//   Array.prototype.reduceRight.call(arrayLike, (x, y) => console.log(x, y))
// );
// console.log([1, 2, undefined, 4].reduce((a, b) => a + b));

// const numbers = [3, 2, 4, 1, 5];

// const reverted = [...numbers].reverse();

// reverted[0] = 5;

// console.log(numbers[0]);

// const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

// while (typeof (i = names.shift()) !== "undefined") {
//   console.log(i);
// }

// const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

// console.log(names.slice(1, 3));

// const myHonda = {
//   color: "red",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };
// const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// const newCar = myCar.slice(0, 2);

// console.log("myCar =", myCar);
// console.log("newCar =", newCar);
// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// myHonda.color = "purple";

// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// const slice = Function.prototype.call.bind(Array.prototype.slice);

// console.log(slice);

// function list(...arg) {
//   return slice(arg);
// }

// console.log(list(1, 2, 3));

// ==============================================
// Array.prototype.some()
// ==============================================

// const arr = [5, 3, 11, 7, 5];

// const result = arr.some((ele) => {
//   return ele % 2 === 0;
// });

// console.log(result);

// ==============================================
// Array.prototype.sort()
// ==============================================

// const array1 = [1, 30, 4, 21, 100000];

// console.log(array1.sort((a, b) => b - a));

// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];

// console.log(items.sort((a, b) => b.value - a.value));

// console.log(
//   items.sort((a, b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   })
// );

// const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];

// console.log(items.sort((a, b) => a.localeCompare(b)));

// the array to be sorted
// const data = ["delta", "alpha", "charlie", "bravo"];

// function someSlowOperation(value) {

// }

// // temporary array holds objects with position and sort-value
// const mapped = data.map((v, i) => {
//   return { i, value: someSlowOperation(v) };
// });
// const numbers = [3, 1, 4, 1, 5];
// const sorted = numbers.sort((a, b) => a - b);
// // numbers and sorted are both [1, 1, 3, 4, 5]
// console.log(numbers);
// sorted[0] = 10;
// console.log(numbers[0]); // 10

// const numbers = [3, 1, 4, 1, 5];
// // [...numbers] creates a shallow copy, so sort() does not mutate the original
// const sorted = numbers.sort((a, b) => a - b);
// sorted[0] = 10;
// console.log(numbers[0]); // 3
// console.log(sorted[0]);

// const arr = [3, 1, 4, 1, 5, 9];
// const compareFn = (a, b) => (a > b ? 1 : 0);
// arr.sort(compareFn);

// console.log("====================================");
// console.log(arr);
// console.log("====================================");

// const arr = [3, 1, 4, 1, 5, 9];
// const compareFn = (a, b) => (a > b ? -1 : 0);
// arr.sort(compareFn);
// console.log("====================================");
// console.log(arr);
// console.log("====================================");

// ==============================================
// Array.prototype.splice()
// ==============================================

// const months = ["Jan", "March", "April", "June"];

// months.splice(1, 0, "Fab");

// console.log(months);

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];

// (1) Remove 0 (zero) elements before index 2, and insert "drum"

// myFish.splice(2, 0, "drum");

// console.log(myFish);

// (2).Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

// myFish.splice(2, 0, "drum", "guitar");

// console.log(myFish);

// (3) Remove 1 element at index 3

// const removed = myFish.splice(3, 1);
// console.log(removed);
// console.log(myFish);

// ==============================================
// Array.prototype.toLocaleString()()
// ==============================================

// const date = new Date("21 Dec 1997 14:12:00 UTC");

// console.log(date.toLocaleString("en", { timeZone: "UTC" }));

// ==============================================
// Array.prototype.toReversed();
// ==============================================

// const items = [1, 2, 3];

// const revered = items.toReversed();

// console.log("====================================");
// console.log(revered);
// console.log("====================================");
// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']

// const months = ["Jan", "Mar", "Apr", "May"];

// // Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// const array1 = [1, 2, "a", "1a"];

// console.log(array1.toString());

// const array1 = [1, 2, 3];

// console.log(array1.unshift());
// // Expected output: 5

// console.log(array1);
// // Expected output: Array [4, 5, 1, 2, 3]

// console.log(Array.of(1, 2, 3));

// const data = [1, 2, 3, 4];

// const index = data.indexOf(3);

// console.log(index);

// console.log();

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(2));

// const array1 = ["a", "b", "c", "d", "e"];

// console.log(array1.copyWithin(1, 3, 4));

// console.log(array1);

// const array1 = ["a", "b", "c"];

// const iterable = array1.entries();

// console.log(iterable.next().value);

// const array1 = [10, 30, 39, 29, 10, 13];

// console.log(array1.every((ele) => ele >= 10));

// const array1 = [1, 2, 3, 4];

// console.log(array1.fill(3, 1, 2));

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// console.log(words.filter((word) => word.length >= 6));

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.findLast((num) => num > 400));

// const arr1 = [0, 1, 2, [3, 4, [5, 6]]];

// console.log(arr1.flat(2));

// console.log(arr1);
// const Orders = [
//   {
//     orderId: 1,
//     items: [
//       { name: "soap", price: 3.4 },
//       { name: "shampoo", price: 10.4 },
//     ],
//   },
//   {
//     orderId: 2,
//     items: [
//       { name: "apple", price: 3.4 },
//       { name: "onnion", price: 10.4 },
//     ],
//   },
// ];

// console.log(
//   Orders.flatMap((ele) => {
//     return ele.items;
//   })
// );

// const arr = [1, 2, 3, 4];

// const newArr = arr.flatMap((x) => [x, x * 2]);

// console.log(newArr);

// const arr = [1, 2, 3, 4];

// console.log(
//   arr.forEach((ele) => {
//      return
//   })
// );

// console.log(arr);

// const arr = [1, 2, 3, 4];

// console.log(Array.from(arr, (ele) => ele * 2));

// const arr = [1, 2, 3, 4];

// arr[100] = 5;

// console.log(arr[50]);

// console.log(arr);

// const map = new Map([
//   ["1", { value: 2 }],
//   ["2", { value: 4 }],
//   ["3", { value: 5 }],
// ]);

// console.log(Array.from(map.values()));

// const asyncIterable = (async function* () {
//   for (let i = 0; i < 5; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 10 * i));
//     yield i;
//   }
// })();

// Array.fromAsync(asyncIterable).then((array) => console.log(array));

// const arr = [2, 3, 4, 5];

// console.log(arr.includes(4, -1));

// console.log([1, , null, 3, NaN].indexOf(NaN)); // -1

// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(animals.lastIndexOf("Dodo", -100));

// const arr = Array.from();

// arr[0] = 100;

// const array = [1, 2, 4, 4];

// const newArr = Array.from(array, (ele) => ele * 2);

// console.log(newArr);
// console.log(array);

// const array = [1, 2, 3, 4];

// let InitialValue = 0;

// const sumWithInitial = array.reduce((acc, currectValue) => {
//   console.log("currectValue", currectValue);
//   acc += currectValue;
//   return acc;
// }, InitialValue);

// console.log("sumWithInitial", sumWithInitial);

// const array1 = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const result = array1.reduceRight((accumulator, currentValue) =>
//   accumulator.concat(currentValue)
// );

// console.log(result);
// // Expected output: Array [4, 5, 2, 3, 0, 1]

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]
// const array1 = ["a", "b", "c"];
// const iterator = array1.values();

// for (const value of iterator) {
//   console.log(value);
// }
// const array1 = [1, 2, "a", "1a"];

// console.log(array1.toString());
// // Expected output: "1,2,a,1a"
