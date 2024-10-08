// let promise = new Promise(function (resolve, reject) {
//   resolve("I'am resolved!"); // executor function
//   reject("I'am rejected!"); // igored
// });

// // cusumor function
// function consumer() {
//   promise.then(
//     (result) => {
//       console.log("result", result);
//     },
//     (error) => {
//       console.log("error", error);
//     }
//   );
// }

// consumer();

// https://pokeapi.co/api/v2/pokemon?limit=50

// const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon?limit=50');

// (async function () {
//   const res = await fetchPromise;
//   const data = await res.json();
//   console.log(data);
// })();

// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'One'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Two'));

// Promise.race([promise1, promise2])
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error));

// const thenable = {
//   then: function (callback) {
//     setTimeout(() => callback(2), 100);
//   },
// };

// const value = await thenable;
// console.log(value);
