'use strict';

// class Person {
//   #name;
//   _age;

//   constructor(name, age) {
//     this.#name = name;
//     this._age = age;
//   }

//   #getDetails() {
//     return `Your name is ${this.#name} and age is ${this._age}`;
//   }

//   getName() {
//     return this.#name;
//   }

//   getNameAge() {
//     return this.#getDetails();
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     super(name, age);
//     this._subject = subject;
//   }

//   getData() {
//     return super.getNameAge();
//   }
// }

// class Student extends Person {
//   constructor(name, age, study) {
//     super(name, age);
//     this.study = study;
//   }
// }

// const teacher = new Teacher('Khan Sir', 46, 'upsc');
// const student = new Student('vaishali', 21, 'MCA');

// console.log(student.getNameAge());

// console.log(teacher.getNameAge());

// const personOne = new Person('rohit', 35);

// console.log(personOne.getNameAge());
// console.log(personOne._age);
// console.log(personOne);

// class Animal {
//   sound() {
//     return 'This is animal sound';
//   }
// }

// class Dog extends Animal {
//   sound() {
//     return 'This is dog sound';
//   }
// }

// class Loin {
//   sound() {
//     return 'This is loin sound';
//   }
// }

// const animal = new Animal();
// const dog = new Dog();
// const loin = new Loin();

// console.log(animal.sound());
// console.log(dog.sound());
// console.log(loin.sound());

// class Account {
//   #accountNumber;
//   #holderName;
//   #balance;
//   constructor(accountNumber, holderName, balance) {
//     this.#accountNumber = accountNumber;
//     this.#holderName = holderName;
//     this.#balance = balance;
//   }

//   showAccountDetails() {
//     console.log(`Your account number is : ${this.#accountNumber}`);
//     console.log(`Your holder name  is : ${this.#holderName}`);
//     console.log(`Your balance  is : ${this.#balance}`);
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   widthdraw(amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//     } else {
//       console.log('Insuficiant balance');
//     }
//   }
// }

// const acocunt = new Account(3678636738, 'Ambani', 10000);

// acocunt.showAccountDetails();

// function account(accountNumber, holderName, balance) {
//   let _accountNumber = accountNumber;
//   let _holderName = holderName;
//   let _balance = balance;

//   function showAccountDetails() {
//     console.log(`Your account number is : ${_accountNumber}`);
//     console.log(`Your holder name  is : ${_holderName}`);
//     console.log(`Your balance  is : ${_balance}`);
//   }

//   function deposit(amount) {
//     _balance += amount;
//   }

//   function widthdraw(amount) {
//     if (amount <= _balance) {
//       _balance -= amount;
//     } else {
//       console.log('Insuficiant balance');
//     }
//   }

//   return {
//     showAccountDetails,
//     deposit,
//     widthdraw,
//   };
// }

// const Account = account(3678636738, 'Ambani', 10000);

// console.log(Account._balance);
// console.log(Account.showAccountDetails());

// abstract class
// class Person {
//   constructor() {
//     if (this.constructor === Person) {
//       throw new Error("You can't crrate a instace of abstarct class");
//     }
//   }

//   info() {
//     throw new Error('Added abstract method has no implemention');
//   }
// }

// class Teacher extends Person {
//   info() {
//     console.log('info');
//   }
// }

// const teacher = new Teacher();

// console.log(teacher.info());

// const person = {
//   name: 'rahul',
// };

// console.log('name' in person);
// console.log(person.hasOwnProperty('name'));
// console.log(Object.hasOwnProperty('name'));
// console.log(Object.hasOwn(person, 'name'));

// const student = {
//   name: 'rahul',
//   35: 'this is number',
// };

// console.log(student.name);
// // console.log(student.35);
// console.log(student[35]);
// console.log(student['35']);

// const student = {
//   name: 'rahul',
//   35: 'this is number',
// };

// const map = new Map([
//   ['a', 1],
//   ['b', 2],
//   [12, 3],
//   [{}, 4],
// ]);

// map.set('c', 5);

// map.delete(12);

// map.clear();

// console.log(map.size);
// console.log(map.has('b'));
// console.log(map.get('b'));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// map.forEach((value, index) => {
//   //   console.log(value);
//   console.log(index);
// });

// console.log('map', map);

// const set = new Set([1, 2, 3, 5]);

// console.log(set);

// const User = function (name, password) {
//   this.name = name;
//   this.password = password;
// };

// User.prototype.printName = function () {
//   console.log(this.name);
// };

// const Admin = function (name, password, course) {
//   User.call(this, name, password);
//   this.course = course;
// };

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.Stats = function () {
//   console.log('Stats');
// };
// const admin = new Admin('tc', '1244', 'science');

// console.log(admin);

// console.log(Admin.prototype);

// async function getTodo() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await res.json();
//   return data;
// }

// window.addEventListener('click', async function () {
//   const data = await getTodo();
// });
