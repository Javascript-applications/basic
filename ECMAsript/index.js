// 'use strict';
// (function sum(a, b) {
//   console.log(a * b);
// })(10, 20);

// function sum(a,b) {
//   return a + b;
// }

// const sum = (a, b) => a + b;

// console.log(sum(10, 20));

// function sum(...param) {
//   console.log(param[0]);
// }

// sum(10, 20, 30, 90, 20, 30);

// function sum(a = 30, b = 30) {
//   console.log(a + b);
// }

// sum();

// const cars = ['AUDI', 'BMW', 'TATA', 'MERCEDES'];

// let str = 'MERCEDES';

// let obj = {
//   name: 'dk',
//   age: 23,
// };

// const cars1 = { ...obj };

// console.log('cars1', cars1);

// const numbers = [1, 2, 3, 4];

// const [a, ...b] = numbers;

// console.log(a);
// console.log(b);

// function getUser(...arg) {
//   console.log(arg);
// }

// const person = { name: 'John', age: 20 };

// getUser(numbers);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const obj = {
//   name: 'ram',
//   age: 20,
// };

// 'name' in obj;

// for (let key in obj) {
//   console.log(obj[key]);
// }

// const numbers = [1, 2, 3, 4];
// const str = 'string';

// const obj = {
//   name: 'ram',
//   age: 20,
// };

// for (const iterator of obj) {
//   console.log(iterator);
// }

// console.log(
//   typeof Number(3),
//   typeof String('ram'),
//   typeof Object({ name: 'ram' }),
//   typeof Array(1, 2, 3)
// );

// const Name = Symbol('name');

// const obj = {
//   [Name]: 'ram',
//   age: 22,
// };

// console.log(JSON.stringify(obj));

// variable declaration

// var name = 'Duke';

// var color = 'Brown';

// var age = 5;

// Using Object Literal Enhancement

// Combines all variables into a dog object

// var dog = { name, color, age };

// console.log(dog);

// Variable declaration

// var name = 'Lilly';
// var color = 'White';
// var age = 3;

// function barkWithName() {
//   console.log(this.name);
// }

// let yetAnotherDog = { name, color, age, barkWithName };

// console.log(yetAnotherDog);

// const user = {
//   dog: {
//     name: 'Alex',
//   },
// };

// console.log(user.dog && user.dog.name);

// let a;

// a?.map((val) => {
//   console.log(val);
// });

// console.log(2 ** 2);

// let a = 10;
// let b = a--;
// console.log(b);
// console.log(a);

// const obj = {};
// const arr = [233];

// console.log(arr);

// function Person(_name, _age) {
//   this.name = _name;
//   this.age = _age;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// const modi = new Person('modi', 60);
// const virat = new Person('virat', 35);
// const rohit = new Person('rohit', 35);

// console.log('virat:', virat);
// console.log('rohit', rohit);
// console.log('modi', modi);

// const person = {
//   type: '1',
// };

// const modi = {
//   name: 'modi',
//   __proto__: person,
// };

// const arr = [1, 2, 4, 5];
// const arrOne = [1, 2, 4, 5];

// console.log(Array.from(arr, (x) => x + 3));

// console.log(Array.isArray(arr));

// console.log(Array.of('foo', 2, 'bar', true));

// console.log(arr.at(2));

// console.log('concat', arr.concat(arrOne));

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

// Copy to index 0 the element at index 3
// console.log(array1.copyWithin(1, 2));
// Expected output: Array ["d", "b", "c", "d", "e"];

// const iterator = array1.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);

// console.log(array1.every((value) => value < 5));

// console.log(array1.fill(0, 3, 5));

// const words = [
//   {
//     name: 'admin',
//     isAdmin: true,
//   },
//   {
//     name: 'user',
//     isAdmin: false,
//   },
// ];

// const array1 = [1, 2, 3, 4, 5, 6, 7, 9];

// const result = words.filter((value) => value.length > 6);

// console.log(result);

// console.log(result);

// const result = words.find((value) => value.name === 'admin');

// const index = array1.findIndex((ele) => ele > 6);
// console.log(index);
// console.log(array1[index]);

// const result = array1.findLastIndex((ele) => ele > 6);

// console.log(result);

// console.log();

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat(Infinity));

// const array1 = [4, 20, 29, 494, 49, 39];

// let count = 0;

// array1.forEach((value) => {
//   count += value;
// });

// console.log(count);

// const getAge = function (city, state) {
//   return ` Your age is ${this.age} and your city is ${city} and you state is ${state}`;
// };

// const stdOne = {
//   name: 'rohit',
//   age: 34,
// };

// const stdTwo = {
//   name: 'rahul',
//   age: 33,
// };

// console.log(getAge.call(stdOne, 'bhopal', 'MP'));
// console.log(getAge.apply(stdOne, ['bhopal', 'MP']));

// const fn = getAge.bind(stdOne, 'bhopal', 'MP');

// console.log(fn());

// const obj = {
//   name: 'rohit',
//   age: 34,
// };

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }
