// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Hello');
//   }, 1000);
// });

// (async function () {
//   try {
//     const res = await promise;
//     console.log('res', res);
//   } catch (error) {
//     console.log('error', error);
//   }
// })();

// const promise = new Promise(function (resolve, reject) {
//   resolve('I am resolved');
// });

// async function handlePromise() {
//   const res = await promise;
//   console.log(res);
// }

// handlePromise();

// async function foo() {
//   const result1 = await new Promise((resolve) =>
//     setTimeout(() => resolve('1'))
//   );
//   const result2 = await new Promise((resolve) =>
//     setTimeout(() => resolve('2'))
//   );
//   console.log(result1);
//   console.log(result2);
// }
// foo();

// const getData = async () => {
//   let data = await 'HELLO';
//   return data;
// };

// const promise = Promise.resolve(1);
// const promise1 = Promise.reject(new Error('Something went wrong'));

// async function getData() {
//   try {
//     const res = await promise;
//     console.log(res);

//     if (res) {
//       const res1 = await promise1;
//       console.log(res1);
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('sellted');
//   }
// }

// getData();

// setTimeout(() => {
//   console.log('logged 1');
// }, 10);

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await res.json();
//   console.log('logged', data);
// }

// Promise.resolve(2).then(() => {
//   console.log('logged 3');
// });

// getData();
