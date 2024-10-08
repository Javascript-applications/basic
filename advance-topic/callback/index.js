//  CallBack Function
// ===========================

// Example
// ==============================

// function friendOne(friend, callFriend) {
//   console.log(
//     'I am busy right now. i am taking to',
//     friend,
//     'I will call you back'
//   );
//   callFriend();
// }

// function friendTwo() {
//   console.log('I whats up. I call you back');
// }

// friendOne(friend, friendTwo);

// Example (1)
// ==============================

// function main(callback) {
//   console.log('Loading...');

//   setTimeout(function () {
//     callback('operation compeleted');
//   }, 1000);

//   callback('code executed');
// }

// function callBack_Fun(result) {
//   console.log(`result - ${result}`);
// }

// main(callBack_Fun);

// Example Probleam (2)
// ==============================

// function displayResult(result) {
//   console.log(`result is -  ${result}`);
// }

// function calCulator(a, b) {
//   console.log('start processing...');
//   let sum1 = a + b * 1;
//   let sum2 = a + b * 3;
//   displayResult(sum1);
//   displayResult(sum2);
//   console.log('end processing...');
// }

// calCulator(3, 4);

// Example (3)
// ==============================

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// function greaterToZero(x) {
//   console.log("greaterToZero");
//   return x >= 0;
// }

// function removeNagNum(arr, callback) {
//   console.log("process start");
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (callback(num)) {
//       newArr.push(num);
//     }
//   }
//   console.log("process end");
//   return newArr;
// }

// removeNagNum(myNumbers, greaterToZero);

// Callback Hell
// ==============================

// function handleData(ID, callback) {
//   setTimeout(() => {
//     console.log('Data', ID);
//     if (callback) {
//       callback();
//     }
//   }, 2000);
// }

// handleData(1, function () {
//   handleData(2, function () {
//     handleData(3, function () {
//       handleData(4);
//     });
//   });
// });

// data 1
// data 2
// data 3
// data 4

// Callback Hell
// ==============================

// function handleStep(msg, callback) {
//   setTimeout(() => {
//     if (callback) callback(null, msg);
//   }, 1000);
// }

// handleStep('Step One Completed', (err, result) => {
//   if (err) return console.error(err);
//   console.log(result);
//   handleStep('Step Two Completed', (err, result) => {
//     if (err) return console.error(err);
//     console.log(result);
//     handleStep('Step Three Completed', (err, result) => {
//       if (err) return console.error(err);
//       console.log(result);
//     });
//   });
// });

// function personOne(callback) {
//   console.log('I am busy. I will callback to you');
//   callback();
// }

// function personTwo() {
//   console.log('Hi');
// }

// personOne(personTwo);

// function handleData(id, callback) {
//   setTimeout(() => {
//     callback(`${id} data is fetched`);
//   }, 2000);
// }

// handleData(1, (response) => {
//   console.log(response);
//   handleData(2, (response) => {
//     console.log(response);
//     handleData(3, (response) => {
//       console.log(response);
//     });
//   });
// });

// console.log('start');

// Callback function, passed as a parameter in the higher order function
// function callbackFunction() {
//   console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func) {
//   console.log('I am higher order function');
//   func();
// }

// higherOrderFunction(callbackFunction);

// function toUpper(str) {
//   return str.toUpperCase();
// }

// function toLower(str) {
//   return str.toLowerCase();
// }

// function handleString(str, fn) {
//   return fn(str);
// }

// console.log(handleString('helle world', toUpper));
// console.log(handleString('HELLO WORLD', toLower));

// function interviewQues(user) {
//   if (user === 'ramesh') {
//     console.log(`Hello ${user}, Let's start`);
//     return function (question) {
//       console.log(question);
//     };
//   }
//   if (user === 'suresh') {
//     console.log(`Hello ${user}, Let's start`);
//     return function (question) {
//       console.log(question);
//     };
//   }
//   if (user === 'rajesh') {
//     console.log(`Hello ${user}, Let's start`);
//     return function (question) {
//       console.log(question);
//     };
//   } else {
//     console.log('Please ask question');
//   }
// }

// interviewQues('ramesh')('How are you?');
// interviewQues('rajesh')('How are you?');
