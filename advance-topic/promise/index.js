// let PromiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("PromiseOne Started...");
//     resolve();
//   }, 1000);
// });

// PromiseOne.then((res) => {
//   console.log("Promise consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task 2");
//     resolve();
//   }, 1000);
// }).then((res) => {
//   console.log("Async 2 Resolved");
// });

// let PromiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Deepak kurmi", password: 1234 });
//   }, 1000);
// });

// PromiseThree.then((res) => {
//   console.log(res);
// });

// let PromiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Rohit", password: 12444 });
//     } else {
//       reject("Error: something went wrong");
//     }
//   }, 1000);
// });

// PromiseFour.then((res) => {
//   return res.name;
// })
//   .then((name) => {
//     console.log("name", name);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise is either resolve or reject");
//   });

// let PromiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ language: "Java", password: 12444 });
//     } else {
//       reject("Error: Js went wrong");
//     }
//   }, 1000);
// });

// async function ConsumePromiseFive() {
//   try {
//     let response = await PromiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// ConsumePromiseFive();

// const promise = new Promise((_resolve, reject) => {
//   reject(Error('Error occurred'));
// });

// promise.catch((error) => console.log(error.message));
// promise.catch((error) => console.log(error.message));

// const performTask = () => {
//   return new Promise((_resolve, reject) => {
//     reject(new Error('Error'));
//   });
// };

// const promise = performTask();

// promise
//   .catch(() => {
//     console.log('Error 1');
//   })
//   .then(() => {
//     console.log('Success 1');
//   })
//   .then(() => {
//     console.log('Success 2');
//   })
//   .then(() => {
//     console.log('Success 3');
//   })
//   .then(() => {
//     console.log('Success 4');
//   });

// const promise = new Promise((resolve) => {
//   resolve(1);
// });

// promise
//   .then((value) => {
//     console.log(value);
//     return value + 1;
//   })
//   .then((value) => {
//     console.log(value);
//     throw new Error('Something went wrong');
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('Resolved!');
//   }, 1000);
// });

// promise.then(function (value) {
//   console.log(value);
// });

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise resolved');
// });

// console.log('End');

// let firstTask = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, 'Task One');
// });

// let secondTask;

// let thirdTask = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 1200, 'Task Three');
// });

// let fourthTask = new Promise(function (resolve, reject) {
//   setTimeout(reject, 300, 'Task Four');
// });

// let fifthTask = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 1000, 'Task Two');
// });

// let combinedPromise = Promise.all([
//   firstTask,
//   secondTask,
//   thirdTask,
//   fourthTask,
//   fifthTask,
// ]);

// combinedPromise
//   .then(function (data) {
//     data.forEach(function (value) {
//       console.log('Result:', value);
//     });
//   })
//   .catch(function (error) {
//     console.error('Error:', error);
//   });

// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'ErrorOne')
// );
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Two'));

// Promise.race([promise1, promise2])
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error));

// const promise1 = Promise.resolve(1);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 2));
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'Error')
// );

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
//   .catch((error) => console.error(error));

// Promise.resolve(1)
//   .then((value) => {
//     console.log(value);
//     return Promise.resolve(2);
//   }).then((value) => console.log(value));

// Promise.allSettled([promise1, promise2, promise3]).then((results) => {
//   results.forEach((result) => {
//     if (result.status === 'fulfilled') {
//       // Promise resolved successfully
//     } else if (result.status === 'rejected') {
//       // Promise rejected
//     }
//   });
// });

// Promise.resolve(1)
//   .then((result1) => {
//     try {
//       console.log(result1);
//     } catch (error) {
//       // handle error
//     }
//   })
//   .then((result2) => {
//     try {
//       // handle result2
//     } catch (error) {
//       // handle error
//     }
//   });
