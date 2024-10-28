// const cup = {
//   color: 'red',
//   weight: '100kg',
//   'model-cup': 'ms',
//   getDetails: function () {
//     return `The color of cup is ${this.color}`;
//   },
//   owner: {
//     name: 'tata',
//     age: 80,
//     getName() {
//       console.log('tata');
//     },
//   },
// };

// console.log(cup['model-cup']);

// cup.color = 'white';

// cup.material = '';

// console.log(cup.color);

// console.log(cup['weight']);

// delete cup.model;

// console.log('cup', cup);

// console.log(cup.getDetails());

// console.log(cup?.owner?.age);

// const car1 = {
//   name: 'bwm',
//   year: 2020,
// };

// const car2 = {
//   name: 'teshla',
//   year: 2020,
// };

// const car3 = {
//   name: 'marchedies',
//   year: 2020,
// };

// function Car(_name, _year) {
//   this.name = _name;
//   this.year = _year;
// }

// const bmwCar = new Car('BMW', 2020);

// const teshalCar = new Car('Teshal', 2022);

// console.log('bmwCar', bmwCar);

// console.log('teshalCar', teshalCar);

// const student = {
//   name: 'mohit',
//   age: 30,
// };

// const newObj = Object.create(student, {
//   id: { value: '98973hbhbhjb', writable: false },
// });

// newObj.id = 'jbdjbdb9889';

// console.log(newObj);

// function User(name, password) {
//   this.name = name;
//   this.password = password;
// }

// const rahul = new User('rahul', 38738922);

// console.log(Object.getPrototypeOf(rahul));

// // Create an Object:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   language: 'EN',
// };

// // Add a Property
// Object.defineProperty(person, 'year', { value: 2008 });

// Object.defineProperty(person, 'language', { value: 'Hindi' });

// console.log(person);

// const person = {};

// Object.defineProperties(person, {
//   name: {
//     value: 'rohit',
//     writable: true,
//     enumerable: true,
//   },
//   age: {
//     value: 35,
//     writable: true,
//     enumerable: false,
//   },
// });

// console.log(Object.getOwnPropertyDescriptor(person, 'gender'));

// console.log(Object.getOwnPropertyDescriptors(person));

// console.log(Object.getOwnPropertyNames(person));

// console.log(person);

// console.log(Object.keys(person));

//Create an object
// const person = { firstName: 'John', lastName: 'Doe' };

// Object.defineProperty(person, 'fullName', {
//   get: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// });

// console.log(person);
// console.log(person.fullName);

// const obj = { counter: 0 };

// Object.defineProperties(obj, {
//   reset: {
//     get: function () {
//       this.counter = 0;
//     },
//   },
//   increment: {
//     get: function () {
//       this.counter++;
//     },
//   },
// });

// console.log(obj.increment);
// console.log(obj);

// Object.defineProperty(obj, 'reset', {
//   get: function () {
//     this.counter = 0;
//   },
// });
// Object.defineProperty(obj, 'increment', {
//   get: function () {
//     this.counter++;
//   },
// });
// Object.defineProperty(obj, 'decrement', {
//   get: function () {
//     this.counter--;
//   },
// });
// Object.defineProperty(obj, 'add', {
//   set: function (value) {
//     this.counter += value;
//   },
// });
// Object.defineProperty(obj, 'subtract', {
//   set: function (i) {
//     this.counter -= i;
//   },
// });

// obj.add = 10;

// obj.subtract = 2;

// obj.increment;

// obj.console.log(obj);

// function User(name) {
//   this.name = name;
//   getName = function () {};
// }

// const person = { firstName: 'John', lastName: 'Doe' };

// Object.preventExtensions(person);
// // Object.seal(person);
// // Object.freeze(person);

// person.age = 20;

// delete person.firstName;

// // console.log(Object.isExtensible(person));
// // console.log(Object.isSealed(person));

// console.log(person);
