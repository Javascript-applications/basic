// (1)
// Sum of 1 to 10 numbers
// ================================

// let n = 10,
//   sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// (2)
// fibonacii series
// 0, 1, 1, 2, 3, 5, 8, 13, 21 .....
// ================================

// let a = 0,
//   b = 1,
//   n = 10,
//   pattern = "",
//   nextvalue;

// pattern += `${a} ${b} `;

// for (let i = 1; i <= n; i++) {
//   nextvalue = a + b;
//   pattern += `${nextvalue} `;
//   a = b;
//   b = nextvalue;
// }

// console.log(pattern);

// (3)
// Find Prime Number 7
// ================================

// let n = 101,
//   isPrime = 1;

// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     isPrime = 0;
//     break;
//   }
// }

// if (isPrime == 0) {
//   console.log(`${n} Not a prime number`);
// } else {
//   console.log(`${n} is a prime number`);
// }

// (4)
// Output?
// ================================

// for (let i = 0; i < 5; i--) {
//   console.log(`${i} `);
//   i++;
// }

// (5)
// Output?
// ================================

// for (let i = 0; i <= 15; i += 2) {
//   console.log(`${i} `);

//   if (i & 1) {
//     continue;
//   }
//   i++;
// }

// (6)
// Output?
// ================================

// for (let i = 0; i < 5; i++) {
//   for (let j = i; j <= 5; j++) {
//     console.log(i);
//   }
// }

// (7)
// Output?
// ================================

// let n = 5,
//   pattern = "";

// for (let i = 0; i < n; i++) {
//   for (let j = i; j <= n; j++) {
//     if (i + j === 10) {
//       break;
//     }
//     pattern += `${i} `;
//   }
// }
// console.log(pattern);
