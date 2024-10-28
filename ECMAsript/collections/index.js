// const student = {
//   name: 'mohit',
//   school: 'mp board',
//   10: 'this is number',
// };

// const studentOne = new Map(Object.entries(student));

// studentOne.set('c', 3);

// console.log('studentOne', studentOne);

// console.log(studentOne.size);
// console.log(studentOne.get('name'));
// console.log(studentOne.keys());

// console.log(studentOne.values());
// studentOne.delete('name');

// studentOne.forEach((item) => {
//   console.log(item);
// });

// for (const [key, value] of studentOne.entries()) {
//   console.log('value', value);
// }

// console.log('entries', studentOne.entries());

// console.log(studentOne.has('name'));

// const animale = {
//   name: 'dog',
// };

// console.log(animale.hasOwnProperty('name'));
// console.log('name' in animale);
// console.log(Object.hasOwn(animale, 'name'));
// console.log(Object.prototype.hasOwnProperty.call(animale, 'name'));

// const animale = new Set(['dog', 'cat']);

// animale.add('horse');

// console.log('keys', animale.keys());
// console.log('values', animale.values());
// console.log(animale.has('dog'));
// console.log(animale.entries());

// for (const [key, value] of animale.entries()) {
//   console.log('value', value);
//   console.log('key', key);
// }

// const arr = [2, 3, 3, 4, 5, 5];

// Array.prototype.unique = function (arr) {
//   return [...new Set(arr)];
// };

// console.log(arr.unique(arr));

// let uniqeArr = [];

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     uniqeArr.push(arr[i]);
//   }
// }
// console.log(uniqeArr);

// let animale = {
//   name: 'dog',
// };

// const map = new Map();
// map.set(animale, '...');

// animale = null;

// console.log(animale);
// console.log(map.keys());

// let john = { name: 'John' };

// let array = [john];

// john = null; // overwrite the reference

// console.log(john);
// console.log(array);

// function sum(x, y) {
//   function Delete() {}
//   Delete();
//   let a = 20;
//   return x * y + a;
// }

// sum();

// let user = {
//   name: 'John',
// };

// let admin = user;

// user = null;

// // console.log(user.name);
// console.log(admin.name);

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }
// let family = marry(
//   {
//     name: 'John',
//   },
//   {
//     name: 'Ann',
//   }
// );

// family = null;

// console.log(family);

// const week = new WeakMap();

// let animale = {};

// week.set(animale, 'dog');

// console.log(week);

// const week = new WeakSet();

// const animale = {};

// week.add(animale);

// console.log(week);

// function factorial(n) {
//   if (n < 0) {
//     throw new Error('Negative numbers are not allowed');
//   }
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(3));

// const factorial = 3;
// let result = 1;

// for (let i = factorial; i > 0; i--) {
//   result *= i;
// }

// console.log(result);
