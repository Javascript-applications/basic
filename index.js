(1).question;
// *****
// *****
// *****
// *****
// *****

// let n = 5;

// let str = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     str += "*";
//   }
//   str += "\n";
// }

// console.log(str);

(2).question;
// *****
// *   *
// *   *
// *   *
// *****

// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i === 0 || i === n - 1) {
//       string += "*";
//     } else if (j === 0 || j === n - 1) {
//       string += "*";
//     } else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }

// console.log(string);

(3).question;

//     * 1 - 4
//    ** 2 - 3
//   *** 3 - 2
//  **** 4 - 1
// ***** 5 - 0

// const n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//   for (let k = 0; k < n - i; k++) {
//     string += " ";
//   }
//   for (let j = 0; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

// console.log(string);

(4).question;
// *
// **
// ***
// ****

let n = 4;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

(5).question;
// *****
// ****
// ***
// **
// *
