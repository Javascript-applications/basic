//  CallBack Function
// ===========================

// Example (1)
// ==============================

// function main(callback) {
//   console.log("Loading...");

//   setTimeout(function () {
//     callback("operation compeleted 1");
//   }, 1000);

//   callback("code executed");
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
//   console.log("start processing...");
//   let sum1 = a + b * 1;
//   let sum2 = a + b * 3;
//   displayResult(sum1);
//   displayResult(sum2);
//   console.log("end processing...");
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
//     console.log("Data", ID);
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
