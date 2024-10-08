// ============================================
//  Example 1
// ============================================

// function sayHello() {
//   function say() {
//     console.log(hello);
//   }

//   var hello = 'Hello, world!';

//   return say;
// }

// var sayHelloClosure = sayHello();
// sayHelloClosure();

// ============================================
//  Example 2
// ============================================

// function mysteriousCalculator(a, b) {
//   var mysteriousVariable = 3;
//   return {
//     add: function () {
//       var result = a + b + mysteriousVariable;
//       return toFixedTwoPlaces(result);
//     },
//     subtract: function () {
//       var result = a - b - mysteriousVariable;
//       return toFixedTwoPlaces(result);
//     },
//   };
// }

// function toFixedTwoPlaces(value) {
//   return value.toFixed(2);
// }

// var myCalculator = mysteriousCalculator(10.01, 2.01);
// myCalculator.add(); // 15.02
// myCalculator.subtract(); // 5.00

// ============================================
//  Example 3
// ============================================

// function secretPassword() {
//   var password = 'xh38sk';
//   return {
//     guessPassword: function (guess) {
//       if (guess === password) {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   };
// }

// var passwordGame = secretPassword();
// passwordGame.guessPassword('heyisthisit?'); // false
// passwordGame.guessPassword('xh38sk'); // true
