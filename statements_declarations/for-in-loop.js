const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";

for (var x in person) {
  text += person[x];
}

console.log("text", text);

// =================================================
// Iterating own properties
// =================================================

const persion = { name: "Deepak kurmi", age: 20 };

function personEyeColor() {
  this.eyeColor = "black";
}

personEyeColor.prototype = persion;

const obj = new personEyeColor();

for (let prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`persion.${prop}: ${obj[prop]}`);
  }
}

let obj1 = { a: 1, b: 2 };

for (let prop in obj1) {
  console.log(`obj1.${prop} = ${obj1[prop]}`);
}

const obj2 = { a: 1, b: 2, c: 3 };

Object.setPrototypeOf(obj2, { d: 4 });

for (const prop in obj2) {
  console.log(`obj2.${prop} = ${obj2[prop]}`);
  delete obj2.a;
}

console.log(obj2);

const proto = {};
const obj4 = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj4) {
  console.log(`obj4.${prop} = ${obj4[prop]}`);
  proto.c = 3;
}

const obj5 = { a: 1, b: 2, c: 3 };

for (const prop in obj5) {
  console.log(`obj5.${prop} = ${obj5[prop]}`);
  Object.defineProperty(obj5, "c", { enumerable: false });
}
console.log("obj5", obj5);
