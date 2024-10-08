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

const getData = async () => {
  let data = await 'HELLO';
  return data;
};
