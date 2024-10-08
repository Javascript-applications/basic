// while loop
// =============================

// let i = 0;

// while (i < 10) {
//   console.log(`The number is ${i}`);
//   i++;
// }

// =============================

// let sum = 0,
//   i = 1;

// while (i <= 10) {
//   sum = sum + i;
//   i++;
// }

// console.log(`total sum is: ${sum}`);

//* =============================
// Find Sum of all even numbers

// let sum = 0,
//   n = 10,
//   i = 1;

// while (i <= n) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
//   i++;
// }

// console.log(`Sum of all even numbers is: ${sum}`);

// =============================
// Check Number is prime or not?

// let n = 11,
//   i = 2;

// while (i < n) {
//   if (n % i === 0) {
//     console.log(`It is not prime for ${i}`);
//   } else {
//     console.log(`It is prime for ${i}`);
//   }
//   i++;
// }

// let CASE = "ADD";
// let arr = [];

// switch (CASE) {
//   case "ADD":
//     console.log("You can vot");
//     break;
//   case 60:
//     console.log("You can't vot");
//     break;
//   default:
//     console.log("You are not votter");
//     return;
// }

// 1 2 3 4 5

// let i = 1,
//   n = 5,
//   sum = 0;

// while (i <= 5) {
//   sum += i;
//   i++;
// }

// console.log(sum);

// PATTERNS
// =============================
// (1)
// * * *
// * * *
// * * *

// let n = 3,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= n) {
//     pattern += "* ";
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }
// console.log(pattern);

// 1 1 1
// 2 2 2
// 3 3 3

// let n = 3,
//   i = 1,
//   pattern = "";

// while (i <= 3) {
//   let j = 1;

//   while (j <= n) {
//     pattern += i;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }
// console.log(pattern);

// (3)
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// let n = 4,
//   pattern = "",
//   i = 1;

// while (i <= n) {
//   let j = 1;

//   while (j <= n) {
//     pattern += j;
//     j++;
//   }

//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// (4)
// 3 2 1
// 3 2 1
// 3 2 1

// let n = 3,
//   pattern = "",
//   i = 1;

// while (i <= n) {
//   let j = 1;

//   while (j <= n) {
//     pattern += n - j + 1;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }
// console.log(pattern);

// 1 2 3
// 4 5 6
// 7 8 9

// *
// * *
// * * *
// * * * *

// let n = 4,
//   pattern = "",
//   i = 1;

// while (i <= n) {
//   let j = 1;

//   while (j <= i) {
//     pattern += "* ";
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 3
// 3 4 5
// 4 5 6 7

let i = 1,
  n = 4,
  pattern = "";

while (i <= n) {
  let j = 1,
    k = i;

  while (j <= i) {
    pattern += k;
    k++;
  }

  i++;
}
