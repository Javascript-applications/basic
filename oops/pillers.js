'use strict';

//(1) Inheritance

// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }

//   getWelcome() {
//     return 'Hello welcome ' + this.name;
//   }
// }

// class Teacher extends Person {
//   constructor(_name, _age, _dipatment) {
//     super(_name, _age);
//     this.dipatment = _dipatment;
//   }

//   seyHello() {
//     return super.getWelcome();
//   }
// }

// const modi = new Teacher('modi', 70, 'Pm');

// console.log(modi.seyHello());

// (2)  Polymorphism

// class Animale {
//   sound() {
//     return 'Animale sound';
//   }
// }

// class Dog {
//   sound() {
//     return 'Dog sound';
//   }
// }

// class Cat {
//   sound() {
//     return 'Cat sound';
//   }
// }

// const animalOne = new Animale();
// const animalTwo = new Dog();
// const animalThree = new Cat();

// console.log(animalOne.sound());
// console.log(animalTwo.sound());
// console.log(animalThree.sound());

// class firstClass {
//   add() {
//     console.log('First Method');
//   }
// }
// class secondClass extends firstClass {
//   add() {
//     console.log(30 + 40);
//   }
// }
// class thirdClass extends secondClass {
//   add() {
//     console.log('Last Method');
//   }
// }
// let ob = new firstClass();
// let ob2 = new secondClass();
// let ob3 = new thirdClass();

// ob.add();
// ob2.add();
// ob3.add();

// class A {
//   area(x, y) {
//     console.log(x * y);
//   }
// }
// class B extends A {
//   area(a, b) {
//     super.area(a, b);
//     console.log('Class B');
//   }
// }
// let ob = new B();
// let output = ob.area(100, 200);

//(3) Encapsulation in JavaScript

//clouser
// function BankAccount(accountNumber, accountHolderName, balance) {
//   let _accountNunber = accountNumber;
//   let _accountHolderName = accountHolderName;
//   let _balance = balance;

//   function showAccountDetails() {
//     console.log('accountNumber:', _accountNunber);
//     console.log('accountHolderName:', _accountHolderName);
//     console.log('balance:', _balance);
//   }

//   function deposit(amount) {
//     _balance += amount;
//     showAccountDetails();
//   }

//   function withdraw(amount) {
//     if (_balance >= amount) {
//       _balance -= amount;
//       showAccountDetails();
//     } else {
//       console.log('Insuficiant balance');
//     }
//   }
//   return {
//     deposit,
//     withdraw,
//   };
// }

// const account = BankAccount(836378686368, 'Deepakkurmi', 3000);

// account.deposit(1000);
// account.withdraw(3000);

// console.log(account._balance);

// using classes

// class BankAccount {
//   constructor(accountNumber, accountHolderName, balance) {
//     this._accountNunber = accountNumber;
//     this._accountHolderName = accountHolderName;
//     this._balance = balance;
//   }

//   showAccountDetails() {
//     console.log('accountNumber:', this._accountNunber);
//     console.log('accountHolderName:', this._accountHolderName);
//     console.log('balance:', this._balance);
//   }

//   deposit(amount) {
//     this._balance += amount;
//     this.showAccountDetails();
//   }

//   withdraw(amount) {
//     if (this._balance >= amount) {
//       this._balance -= amount;
//       this.showAccountDetails();
//     } else {
//       console.log('Insuficiant balance');
//     }
//   }
// }

// const account = new BankAccount(836378686368, 'Deepakkurmi', 3000);
// account._balance = 2000;

// console.log(account);

// account.deposit(1000000);
// account.withdraw(3000);

//(4) Abstraction in JavaScript

// create a vehicle constructor
// function Vehicle() {
//   throw new Error('We can not create abstract class');
// }

// Vehicle.prototype.display = function () {
//   return 'Vehicle is: ' + this.vehicleName;
// };

// // console.log(Vehicle.prototype);

// function Bike(vehicleName) {
//   this.vehicleName = vehicleName;
// }

// Bike.prototype = Object.create(Vehicle.prototype);

// // console.log(Bike);

// Bike.prototype.data = 3;

// const bike = new Bike('Honda');

// // console.log(bike.display());

// console.log(bike);

// class Person {
//   constructor(name) {
//     this._name = name;
//     if (this.constructor === Person) {
//       throw new Error('You can not create a instance for abstraction class ');
//     }
//   }

//   info() {
//     throw new Error('Added abstract method has no implementation');
//   }
// }

// class Teacher extends Person {
//   constructor(name) {
//     super();
//     this.name = name;
//   }

//   info() {
//     console.log('Teacher name is: ' + this._name);
//   }
// }

// const teacher = new Teacher('Hello');

// console.log(teacher);

// console.log(teacher.info());

// class Person {
//   // public instance field
//   _name = 'Jon';

//   // private instance field
//   #age = 0;

//   constructor(name) {
//     this._name = name;
//   }

//   incAge() {
//     this.#age++;
//   }

//   getDetails() {
//     return this.#age;
//   }
// }

// const person = new Person('Jon');

// console.log(person._name);
// console.log(person.incAge());
// console.log(person.getDetails());

// const personOne = {
//   firstN: 'Tony',
//   lastN: 'Stark',
//   age: 40,
// };

// const personTwo = {
//   firstN: 'Rohit',
//   lastN: 'Sharma',
//   age: 35,
// };

// function showDetails(city, intrest) {
//   console.log(
//     `Your full name is ${this.firstN} ${this.lastN} and Your age is ${this.age} and you are from ${city}.
//     my intrest is to play  ${intrest}`
//   );
// }

// showDetails.call(personTwo, 'Mumbai', 'Cricket');

// showDetails.apply(personTwo, ['Mumbai', 'Cricket']);

// const show = showDetails.bind(personTwo, 'Mumbai', 'Cricket');

// show();

// const arr = [1, 2, 4, 4, 5, 5];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   static anonymous() {
//     console.log('anonymous');
//   }
// }

// console.log(User.prototype);
// const kedar = new User('kedar');
// kedar.anonymous(); // error
// User.anonymous(); // "anonymous"

// class User {
//   constructor(name) {
//     this._name = name;
//   }
// }

// User.anonymous = function () {
//   console.log('anonymous');
// };

// const user = new User('rohit');

// console.log(user._name);
// console.log(User.anonymous());

// const User = {
//   init(name) {
//     this.name = name;
//   },
//   printName() {
//     console.log(this.name);
//   },
// };

// const kedar = Object.create(User, {
//   age: { value: 42, writable: true, enumerable: true, configurable: true },
// });

// kedar.age = 29;

// console.log(kedar);

// kedar.init('kedar');

// kedar.printName();

// const User = function (name, password) {
//   this.name = name;
//   this.password = password;
// };

// User.prototype.printName = function () {
//   return this.name;
// };

// const Admin = function (name, password, course) {
//   User.call(this, name, password);
//   this.course = course;
// };

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.Stats = function () {
//   return 'Stats';
// };

// const kedar = new Admin('kedar', 12345, 'Java');
// console.log('Admin', kedar);

// console.log(kedar.Stats());
// console.log(kedar.printName());
// console.log(kedar.course);

// class User {
//   #name;

//   constructor(name, password) {
//     this.#name = name;
//     this._password = password;
//   }

//   get getName() {
//     console.log(this.#name);
//   }

//   #printName() {
//     console.log(this.#name);
//   }

//   PrintFromPrivateMethod() {
//     this.#printName();
//   }
// }

// const kedar = new User('kedar', 123456);

// console.log(kedar.PrintFromPrivateMethod());
