// const obj = {
//   count: 12,
// };

// Object.defineProperty(obj, "size", {
//   value: 50,
//   enumerable: true,
//   writable: true,
//   configurable: false,
// });

// Object.defineProperty(obj, "size", { value: 23 });

// Object.defineProperty(obj, "years", { value: 2023 });

// Object.defineProperty(obj, "inc", {
//   get: function () {
//     this.count++;
//   },
// });

// obj.inc;

// console.log(Object.getOwnPropertyNames(obj));

// console.log("keys", Object.keys(obj));

// console.log(obj);

// const person = Object.create();

// const student = {};

// Object.defineProperties(student, {
//   name: {
//     value: "deepak",
//   },
//   age: {
//     value: 24,
//   },
// });

// const target = { a: 1, b: 2 };
// const source1 = { b: 1, c: 5 };
// const source2 = { d: 10, e: 20 };

// const newTarget = Object.assign(target, source1, source2);

// console.log(newTarget);
// structuredClone;

// const obj = Object.create(
//   { name: "deepak" },
//   {
//     age: {
//       value: 23,
//     },
//     bar: {
//       get() {
//         return 10;
//       },
//       set(value) {
//         this.bar = value;
//       },
//     },
//   }
// );

// obj.bar = 20;

// console.log(obj.bar);

// const object1 = {
//   a: "somestring",
//   b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(key, value);
// }

// const map = new Map([
//   ["1", 10],
//   ["2", 20],
// ]);

// console.log(Object.fromEntries(map));

// const object = Object.defineProperty({}, "fname", { value: "deepakkurmi" });

// const descriptor = Object.getOwnPropertyDescriptors(object, "property1");

// console.log(descriptor.fname.value);

// const obj = {
//   _value: 20,
//   get greet() {
//     return this._value;
//   },
// };

// const descriptor = Object.getOwnPropertyDescriptors(obj);

// console.log(descriptor.greet);

// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const getProperty = Object.getOwnPropertyNames(object);

// console.log(typeof getProperty);

// const newArr = getProperty.map((item) => console.log(item));

// const object = {};
// const a = Symbol("a");
// const b = Symbol.for("b");

// object[a] = "localSymbol";
// object[b] = "globalSymbol";

// const property = Object.getOwnPropertySymbols(object);

// console.log(property);

// const prototype = {};

// const obj = Object.create(prototype);

// console.log(Object.getPrototypeOf(obj) === prototype);

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const newInventory = Object.groupBy(inventory, (type) => type);

// const object1 = {
//   name: "deepak",
//   age: 24,
// };

// const object = {
//   name: "deepak",
//   age: 24,
// };

// console.log(Object.is(object1.name, object.name));

// const object = {
//   name: "deepak",
//   age: 24,
// };

// console.log(Object.isFrozen(object));

// Object.freeze(object);

// console.log(Object.isFrozen(object));

// function Bool() {}
// function Laap() {}

// Bool.prototype = Object.create(Laap.prototype);

// const bool = new Bool();
// const laap = new Laap();

// console.log(Bool.prototype.isPrototypeOf(bool));
// console.log(Laap.prototype.isPrototypeOf(bool));

// const object = {
//   prop: 1,
// };

// console.log(Object.isSealed(object));

// Object.seal(object);

// console.log(Object.isSealed(object));

// const object = {
//   a: 1,
//   b: 20,
// };

// const getKeys = Object.keys(object);

// for (const iterator of getKeys) {
//   console.log(iterator);
// }

// const object = {
//   a: 1,
//   b: 20,
// };

// const getValues = Object.values(object);

// for (const iterator of getValues) {
//   console.log(iterator);
// }

// const object = {
//   a: 1,
//   b: 20,
// };

// console.log(Object.isExtensible(object));

// function Dog() {
//   this.Dog = "Gabby";
// }

// const dog = new Dog();

// Dog.prototype.toString = function () {
//   return this.Dog;
// };

// console.log(dog.toString());

function Human(name, level) {
  this.name = name;
  this.lavel = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(Human.prototype, SuperHero.prototype);

Human.prototype.speak = function () {
  return this.name;
};

SuperHero.prototype.fly = function () {
  return this.name;
};

const superMan = new SuperHero("Clark Kent", 1);

function Constructor() {
  this.product = 25;
  this.totalSell = 100;
  this.geet = {};
}
