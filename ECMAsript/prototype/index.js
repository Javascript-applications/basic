// function createUser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//   this.score++;
// };

// createUser.prototype.print = function () {
//   console.log(`The score is ${this.score}`);
// };

// const mukesh = new createUser('mukesh', 200);

// console.log(mukesh.score);

// function User(name, rollNo) {
//   this.name = name;
//   this.rollNo = rollNo;
//   return [12, 3];
// }

// const userInstance = new User('Ram', 123);

// console.log(userInstance);

// function user() {}

// user.age = 20;

// function Employee() {
//   this.name = 'Arun';
//   this.role = 'Qa';
// }

// Employee.prototype.salary = 3000;

// Employee.prototype.getSalary = function () {
//   return `Your salary is: ${this.salary}`;
// };

// const empOne = new Employee();
// const empTwo = new Employee();

// console.log(empOne.salary);
// console.log(empTwo.salary);
// console.log(empTwo.getSalary());

// const goverment = {
//   currentPm: 'modi',
// };

// console.log(goverment.prototype);

// function Car(model, year, color, owner) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.owner = owner;
//   this.wheelnumber = function () {
//     return Math.random();
//   };
// }

// function Owner(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const suresh = new Owner('Suresh', 40);

// const bmwCar = new Car('BMW', 2010, 'white', suresh);

// suresh.age = 50;

// console.log(bmwCar.owner.age);

// function Car(model, year, color, owner) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.owner = owner;
//   this.wheelnumber = function () {
//     return Math.random();
//   };
// }

// function Owner(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bmwCar = new Car('BMW', 2010, 'white', {});

// console.log(bmwCar);

/**
 * This is an internal property of an object. which indicates from which structure this perticular object has been created.
 * for example - if you want to build a house.  first you get the prototype of that house done by an archichate.
 * the archichate comes in and he/she creates an prototype of that house. that how house make look like, how many rooms, roof and
 * everythings. and then from the prototype following that they create a house, living house in front of you. They might use same prototype to build the make similer kind of house for another customer. They can do more, and more and more like that.
 * So similarly when we are creating a this object(BMW , Tesla) car the thinks like that we are using car custructor as a prototype to till that whenever i am creating a instance ot object that are
 * the propery what is the nature of it.
 */

// const vahical = {
//   isLuxury: false,
//   fourWheel: false,
//   showInfo() {
//     return `The vahical ${this.name} is of ${this.color}. Is it a luxuray vahical?
//       ${this.isLuxury}. Does it have four weel? ${this.fourWheel}
//     `;
//   },
// };

// const car = Object.create(vahical);

// car.name = 'BMW';
// car.color = 'black';
// car.fourWheel = true;

// console.log(car.showInfo());
// console.log(car.fourWheel);

// class Car {
//   constructor(model, year, color, owner) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.owner = owner;
//   }

//   wheelnumber() {
//     return Math.random();
//   }
// }

// class Luxury extends Car {
//   constructor(name, age) {
//     super();
//     this.age = age;
//   }

//   isLuxury() {
//     return true;
//   }
// }

// const ls = new Luxury('Tesla', 25);

// console.log(ls);

// function Person(name, age) {
//   //   this._name = name;
//   this._age = age;
// }

// Person.prototype._name = 'Yogi';

// Person.prototype.getName = function () {
//   return this._name;
// };

// const person = new Person('Modi', 30);

// console.log(person._name);

// console.log(person);

// const student = {
//   fistName: 'Modi',
//   get getName() {
//     return this.fistName;
//   },
//   set setName(name) {
//     this.fistName = name;
//   },
// };

// console.log(student.getName);

// student.setName = 'Yogi';

// console.log(student.getName);

// Target Object
// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };

// //source object
// const person2 = { firstName: 'Anne', lastName: 'Smith' };

// Object.assign(person1, person2);

// console.log(person1);

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };

// for (const [key, value] of Object.entries(person)) {
//   console.log(value);
// }

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };

// const newObj = Object.create(person);

// newObj.age = 60;

// console.log('newObj', newObj.age);

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };

// const arr = new Map();
// arr.set('b', 1);

// console.log(arr);

// const arr1 = new Set([1, 2, 4]);

// console.log(arr1);

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };

// const fruits = Object.entries(person);

// console.log(Object.fromEntries(fruits));

// // Create an Array
// const fruits = [
//   { name: 'apples', quantity: 300 },
//   { name: 'bananas', quantity: 500 },
//   { name: 'oranges', quantity: 200 },
//   { name: 'kiwi', quantity: 150 },
// ];

// // Callback function to Group Elements
// function calculateQ({ quantity }) {
//   return quantity >= 200 ? 'ok' : 'low';
// }

// // Group by Quantity
// const result = Object.groupBy(fruits, calculateQ);

// console.log(result);

// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = 'English';

// const myFather = new Person('John', 'Doe', 50, 'blue');
// const myMother = new Person('Sally', 'Rally', 48, 'green');

// console.log('myFather', myFather);
// console.log('myMother', myMother);
