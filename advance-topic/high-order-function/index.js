// Example (1)
// ======================================

// function callbackFunction() {
//   console.log('I am callback function');
// }

// function higherOrderFunctiom(fn) {
//   console.log('I am HOF');
//   fn();
// }

// higherOrderFunctiom(callbackFunction);

// Example (2)
// ======================================1

//  I want you to write a function that calculates the area and diameter of a circle.

// const radius = [1, 2, 3];

// function area(radius) {
//   return Math.PI * radius * radius;
// }

// function diameter(radius) {
//   return 2 * radius;
// }

// function calculates(radiusArr, logic) {
//   const output = [];
//   for (let i = 0; i < radiusArr.length; i++) {
//     const element = radiusArr[i];
//     output.push(logic(element));
//   }
//   return output;
// }

// console.log('Calculation of areas', calculates(radius, area));
// console.log('Calculation of diameter', calculates(radius, diameter));

// let obj = {
//   name: 'modi',
// };

// console.log(Object.entries(obj));

// I want you to write a function that calculates the area and diameter of a circle.

// const radius = [1, 3, 4];

// function area(radius) {
//   return Math.PI * radius * radius;
// }

// function diameter(radius) {
//   return 2 * radius;
// }

// function calculates(radiusArr, callback) {
//   let newRadius = [];
//   for (let i = 0; i < radiusArr.length; i++) {
//     const element = radiusArr[i];
//     newRadius.push(callback(element));
//   }
//   return newRadius;
// }

// console.log(calculates(radius, area));
// console.log(calculates(radius, diameter));

// addEventListener('click', () => {}, false);
