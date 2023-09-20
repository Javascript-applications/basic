// const string1 = new String("This is a primitive value");

// console.log(string === string1);
// console.log("string", typeof string);
// console.log("string1", typeof string1);

// console.log(string.charAt(3));
// console.log(string[2]);

// const a = "b";
// const b = "a";
// if (a < b) {
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2.valueOf())); // returns the string "2 + 2"

// const string = "This is a primitive value";

// console.log(string);

// const str = "The quick red fox jumped over the lazy dog's back.";

// const iterator = str[Symbol.iterator]();

// console.log(iterator);

// for (const value of iterator) {
//   console.log(value);
// }

// const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

// const iterator = str[Symbol.iterator]();

// for (const v of iterator) {
//   console.log(v);
// }

// const sentence = "The quick brown fox jumps over the lazy dog.";

// let index = 5;

// const myString = "Every green bus drives fast";
// console.log(myString.length);

// const myString = "Every green bus drives fast.";

// const lengthWay = myString.charAt(100);
// console.log(lengthWay);

// const sentence = "The quick brown fox jumps over the lazy dog.";

// console.log(new String("q").charCodeAt());

// console.log("ABC".codePointAt(0));

// console.log("ABC".charCodeAt(-1));

// const str1 = "string data";
// const str2 = "new string";

// console.log(str1.concat(", ", str2));

// const string = "data is join in this charactor";

// console.log(string.endsWith("in", 12));

// console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="

// const string = "data is join in this charactor";

// console.log(string.indexOf("this", -10));
// const illFormed = "https://example.com/search?q=\uD800";

// console.log(illFormed.isWellFormed());

// const paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// const searchTerm = "dog";

// console.log(
//   `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
//     searchTerm
//   )}`
// );
// // Expected output: "The index of the first "dog" from the end is 52"

// const str1 = "a";
// const str2 = "A";

// console.log(str1.localeCompare(str2));

// const str =
//   "My grandfather is 65 years old and My grandmother is 63 years old.";
// const regex = /"old"/gi;

// const data = str.match(regex);

// console.log(data);

// const p =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
// console.log(p.replaceAll("dog", "monkey"));

// const $name = 2;
// const _per = "deepak";
// const name = "Deepak";

// const paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// console.log(paragraph.toUpperCase());

// const string = "Hello   ";
// console.log(string.length);
// console.log(string.trim().length);
// console.log(string.trimEnd().length);
// console.log(string.trimStart().length);

// const str = "This,is,deepak,kurmi";

// console.log(str.split("|"));

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// const iterator = text.matchAll("Cats");
// console.log(iterator);

// let obj = {
//   value: 2,
// };
// console.log(obj.value);
