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

const ItemsData = ["Banana", "Orange", "Apple", "Mango"];

console.log("ItemsData", ItemsData.includes("Apple"));
console.log("ItemsData", ItemsData.indexOf("Apple") !== -1);

ItemsData.push("Tamato");

console.log("ItemsData", ItemsData);

ItemsData.pop();

console.log("ItemsData", ItemsData);

// ===================================================
// Remove multiple items from the end of an array
// ===================================================

const fruits1 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

const removeItems = fruits1.splice(2);

console.log("fruits1", fruits1);

console.log("removeItems", removeItems);

fruits1.shift();
console.log("remove first item from array", fruits1);

fruits1.unshift("Strawberry");
console.log("Add a new first item to an array", fruits1);

// ===================================================
// Remove a single item by index
// ===================================================

const fruits2 = ["Strawberry", "Banana", "Mango"];

var start = fruits2.indexOf("Banana");

var deleteCount = 1;

fruits2.splice(start, deleteCount);

console.log("fruits", fruits2);

// ===================================================
// Replace multiple items in an array
// ===================================================

const fruits4 = ["Apple", "Banana", "Strawberry"];

var start = -2;
var deleteCount = 2;

fruits4.splice(start, deleteCount, "Mango", "Cherry");

console.log("fruits4", fruits4);

fruits4.forEach((item, index, array) => {});

const fruits5 = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];

console.log("Combain two arrays", fruits5.concat(moreFruits));

console.log("fruitsCopy", [...fruits4]);
console.log("fruits1Copy", Array.from(fruits4));

console.log("fruits1Copy", fruits5.slice());

const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits5));

console.log("fruitsDeepCopy", fruitsDeepCopy);

const arrayEmpty = new Array(3);

console.log(arrayEmpty.length);
console.log(arrayEmpty[0]);
console.log(0 in arrayEmpty);

console.log(new Array("2").length);
