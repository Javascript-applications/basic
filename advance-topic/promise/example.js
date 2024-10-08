// example1
// ======================================

// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 100);

//   console.log(4);

//   setTimeout(() => {
//     console.log(1);
//   }, 0);
// }).then((result) => console.log(result));

// console.log(3);

// example2
// ======================================

// const promise = new Promise((resolve) => {
//   resolve(1);
// });

// promise
//   .then((result) => {
//     return result;
//   })
//   .then((result) => {
//     return result + 1;
//   })
//   .then((result) => {
//     return result + 2;
//   })
//   .then((result) => {
//     console.log(result);
//   });
