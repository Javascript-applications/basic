// function sum(p1, p2 = 2, p3 = 4) {
//   console.log(p1 + p2 + p3);
// }

// sum(2);

// function RestFn(...num) {
//   let sum = 0;

//   for (const iterator of num) {
//     sum += iterator;
//   }
//   console.log(sum);
// }

// RestFn(3, 3, 4, 5, 5)
// RestFn(3, 3, 10, 5);
// RestFn(3, 3);

// let SumFn = function () {
//   let a = 10;
//   let b = 10;
//   return a + b;
// };

// let SumFn = (a, b) => a + b;

// console.log(SumFn(10, 20));

// let cars1 = ['AUDI', 'BMW', 'TATA', 'MERCEDES'];

// let cars2 = [...cars1];

// let cars3 = [...cars1, 'NISSAN', 'TOYOTA'];

// cars2.push('TOYOTA');

// console.log(cars1);
// console.log(cars2);
// console.log(cars3);

// const cars1 = {
//   Brand: 'BMW',
//   Color: 'RED',
// };

// let cars2 = { ...cars1 };

// cars2.launch = 2010;

// console.log(cars2);

// const car = 'AUDI';

// let cars1 = [...car];

// console.log(cars1);

// const numbers = [3, 5, 7, 8, 9];

// let cars1 = {
//   Brand: 'BMW',
//   Color: 'RED',
// };

// const [a, b, c, ...others] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(others);

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, , suv] = vehicles;

// console.log(car, suv);

// function calculate(a, b) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;

//   return [add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate(4, 7);

// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021,
//   color: 'red',
//   registration: {
//     city: 'Houston',
//     state: 'Texas',
//     country: 'USA',
//   },
// };
// function myVehicle({ brand, registration: { state } }) {
//   console.log(brand, state);
// }

// myVehicle(vehicleOne);
