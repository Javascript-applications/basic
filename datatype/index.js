// primivite value
let string = "deepak";
string = "my name is deepak";
console.log(string);

let string1 = "deepak kurmi";
string1[1] = "W";
console.log(string1);

// Non-primivite value
let arr = [1, 34, 5, 3];
let arr1 = [1, 34, 5, 3];
arr[1] = 3;
console.log(arr);
console.log("array compair", arr === arr1);

let object = { name: "deepak" };
let object1 = { name: "deepak" };
console.log("object compair", object === object1);

let product = { name: "mango" };
let productOne = product;
console.log("array product", product === productOne);

let car = undefined;
console.log("car", car);

console.log(10 / +0);
console.log(+0 === -0);

const x = BigInt(9007199254740991);

console.log("x", x);

console.log(x + 1n === x + 2n);

const data = "deepak";

let c, z;
c = 20;
z = 30;
