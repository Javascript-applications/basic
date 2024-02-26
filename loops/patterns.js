// PATTERNS
// =============================
// (1)
// * * *
// * * *
// * * *

// let i = 1,
//   rows = 3,
//   cols = 5,
//   pattern = "";

// while (i <= rows) {
//   let j = 1;

//   while (j <= cols) {
//     pattern += "* ";
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (2)
// 1 1 1
// 2 2 2
// 3 3 3

// let rows = 3,
//   cols = 3,
//   i = 1,
//   pattern = "";

// while (i <= rows) {
//   let j = 1;
//   while (j <= cols) {
//     pattern += `${i} `;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (3)
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// let rows = 4,
//   cols = 4,
//   i = 1,
//   pattern = "";

// while (i <= rows) {
//   let j = 1;

//   while (j <= cols) {
//     pattern += `${j} `;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (4)
// 3 2 1
// 3 2 1
// 3 2 1

// let rows = 3,
//   cols = 3,
//   i = 1,
//   pattern = "";

// while (i <= rows) {
//   let j = 1;

//   while (j <= cols) {
//     pattern += `${rows - j + 1} `;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (5)
// 1 2 3
// 4 5 6
// 7 8 9

// let rows = 3,
//   cols = 3,
//   i = 1,
//   count = 1,
//   pattern = "";

// while (i <= rows) {
//   let j = 1;

//   while (j <= cols) {
//     pattern += count;
//     count++;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (6)
// *
// * *
// * * *
// * * * *

// let n = 4,
//   i = 1,
//   pattern = "";

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

// =============================
// (7)
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= i) {
//     pattern += i;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }
// console.log(pattern);

// =============================
// (8)
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let n = 4,
//   i = 1,
//   count = 1;
// pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= i) {
//     pattern += `${count} `;
//     count++;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (9)
// 1
// 2 3
// 3 4 5
// 4 5 6 7

// let n = 4,
//   i = 1,
//   count = 1;
// pattern = "";

// while (i <= n) {
//   let j = 1,
//     k = i;

//   while (j <= i) {
//     pattern += k;
//     k++;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (10)
// 1
// 2 1
// 3 2 1
// 4 3 2 1

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= i) {
//     pattern += i - j + 1;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (11)
// 1
// 2 1
// 3 2 1
// 4 3 2 1

// =============================
// (11)
// A A A
// B B B
// C C C
// console.log(String.fromCharCode(65));
// console.log("A".charCodeAt());

// let n = 3,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;
//   let ascii = "A".charCodeAt() + i - 1;

//   while (j <= n) {
//     pattern += `${String.fromCharCode(ascii)} `;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (12)
// A B C
// A B C
// A B C

// let rows = 3,
//   i = 1,
//   pattern = "";

// while (i <= rows) {
//   let cols = 1;

//   while (cols <= rows) {
//     pattern += `${String.fromCharCode("A".charCodeAt() + cols - 1)} `;
//     cols++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (13)
// A B C
// D E F
// G H I

// let n = 3,
//   i = 1,
//   pattern = "",
//   ascii = "A".charCodeAt();

// while (i <= n) {
//   let j = 1;

//   while (j <= n) {
//     pattern += `${String.fromCharCode(ascii)} `;
//     ascii++;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (14)
// A B C
// B C D
// C D E

// let n = 3,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1,
//     ascii = "A".charCodeAt() + i - 1;

//   while (j <= n) {
//     pattern += `${String.fromCharCode(ascii)} `;
//     ascii++;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (15)
// A
// B B
// C C C

// let n = 3,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= i) {
//     pattern += String.fromCharCode("A".charCodeAt() + i - 1);
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (16)
// A
// B C
// D E F
// G H I J

// let n = 4,
//   i = 1,
//   pattern = "",
//   ascii = "A".charCodeAt();

// while (i <= n) {
//   let j = 1;

//   while (j <= i) {
//     pattern += `${String.fromCharCode(ascii)} `;
//     ascii++;
//     j++;
//   }

//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (17)
// A
// B C
// C D E
// D E F G

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= i) {
//     pattern += `${String.fromCharCode("A".charCodeAt() + i + j - 2)} `;
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (18)
// D
// C D
// B C D
// A B C D

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;
//   let ascii = "A".charCodeAt() + n - i - j + 1;

//   while (j <= i) {
//     pattern += String.fromCharCode(ascii);
//     ascii++;
//     j++;
//   }

//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (19)
// A B C
// B C D
// C D E

// let n = 3,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= n) {
//     pattern += String.fromCharCode("A".charCodeAt() + i + j - 2);
//     j++;
//   }

//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (19)
//       *
//     * *
//   * * *
// * * * *

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1,
//     k = 1;

//   while (k <= n - i) {
//     pattern += " ";
//     k++;
//   }

//   while (j <= i) {
//     pattern += "*";
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (20)
// * * * *
// * * *
// * *
// *

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1;

//   while (j <= n - i + 1) {
//     pattern += "*";
//     j++;
//   }
//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (21)
// * * * *
//   * * *
//     * *
//       *

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1,
//     k = 1;

//   while (k <= i - 1) {
//     pattern += " ";
//     k++;
//   }

//   while (j <= n - i + 1) {
//     pattern += "*";
//     j++;
//   }

//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (22)
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1

// let n = 4,
//   i = 1,
//   pattern = "";

// while (i <= n) {
//   let j = 1,
//     k = 1,
//     space = 1,
//     l = i - 1;

//   while (k <= n - i) {
//     pattern += " ";
//     k++;
//   }

//   while (j <= i) {
//     pattern += j;
//     j++;
//   }

//   while (space <= i - 1) {
//     pattern += l;
//     l--;
//     space++;
//   }

//   pattern += "\n";
//   i++;
// }

// console.log(pattern);

// =============================
// (23)
// 1 2 3 4 5 5 4 3 2 1
// 1 2 3 4 * * 4 3 2 1
// 1 2 3 * * * * 3 2 1
// 1 2 * * * * * * 2 1
// 1 * * * * * * * * 1

// let n = 5,
//   i = 0,
//   pattern = "";

// while (i < n) {
//   // pattern one

//   let j = 1;

//   while (j <= n - i) {
//     pattern += j;
//     j++;
//   }

//   // pattern for *

//   let loop = 1;

//   while (loop <= i * 2) {
//     pattern += "*";
//     loop++;
//   }

//   // pattern two

//   let k = n - i;

//   while (k) {
//     pattern += k;
//     k--;
//   }

//   pattern += "\n";
//   i++;
// }

// console.log(pattern);
