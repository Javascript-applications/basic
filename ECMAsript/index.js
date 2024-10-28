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
