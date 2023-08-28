const fruite = [];

fruite.push("mango", "banana", "papaya");

console.log("fruite", fruite.length);

fruite[100] = "apply";

console.log("fruite[100]", fruite[100]);
console.log("keys", Object.keys(fruite));

fruite[0] = "banana";

console.log("keys", fruite);

// ===================================================
// Converting an Array to a String
// ===================================================

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());

console.log(typeof fruits);
console.log(fruits[10]);

// ===================================================
// Generic array methods
// ===================================================

const arrayLike = {
  0: 1,
  1: 2,
  length: 2,
};

console.log("arrayLike:", Array.prototype.join.call(arrayLike, "+"));

const arr = [];
arr[3] = "Oranges";
console.log(arr.length);
console.log(Object.hasOwn(arr, 3));

console.log(Array.prototype.flat.call({}));

const fruits3 = "apple,balana".split(",");
console.log("fruits3", fruits3.length, fruits3);

console.log(fruits3.join(", "));

const Items = ["Banana", "Orange", "Apple", "Mango"];

console.log(Items.indexOf("Orange"));

// ===================================================
// Check if an array contains a certain item
// ===================================================
