// ============================================
//  Simple Callback
// ============================================

// function toUpperCaseStr(str) {
//   return str.toUpperCase();
// }

// function toLowerCaseStr(str) {
//   return str.toLowerCase();
// }

// function letterProccess(input, fn) {
//   return fn(input);
// }

// console.log(letterProccess('hello world', toUpperCaseStr));
// console.log(letterProccess('HELLO WORLD', toLowerCaseStr));

// ============================================
//   Callback with Array
// ============================================

// let keys = [1, 2, 3];

// function printElement(element, index) {
//   console.log(`Element ${index}: ${element * 2}`);
// }

// function forEachElement(elements, callback) {
//   for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     callback(element, i);
//   }
// }

// forEachElement(keys, printElement);
// forEachElement(keys, printElement);

//  ============================================
// Asynchronous Callback
//  ============================================

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: 'Alice' };
//     callback(data);
//   }, 2000); // Simulating a delay of 2 seconds
// }

// fetchData((data) => {
//   console.log('Data received:', data);
// });

// ============================================
//    Error Handling with Callbacks
// ============================================

// let url = 'https://api.example.com';

// function fetchData(url, callback) {
//   setTimeout(() => {
//     const error = Math.random() > 0.5;
//     if (error) {
//       callback('Error during data fetch', null);
//     } else {
//       const data = `Response from ${url}`;
//       callback(null, data);
//     }
//   }, 2000);
// }

// fetchData(url, (err, response) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(response);
//   }
// });

// ============================================
//    Nested Callbacks
// ============================================

// let url = 'https://api.example.com';

// function fetchData(url, callback) {
//   setTimeout(() => {
//     const data = `Response from ${url}`;
//     if (!data) {
//       callback('Error during data fetch', null);
//     } else {
//       callback(null, data);
//     }
//   }, 2000);
// }

// function processData(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} processed`;
//     callback(null, processedData);
//   }, 1000);
// }

// fetchData(url, (err, response) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(response);
//     processData(response, (pErr, pResponse) => {
//       if (pErr) {
//         console.error(pErr);
//       } else {
//         console.log(pResponse);
//       }
//     });
//   }
// });
