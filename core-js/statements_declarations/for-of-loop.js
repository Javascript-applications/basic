const numbers = [2, 3, 4];

for (let num of numbers) {
  console.log(num);
}

//Iterating over a Set
const SchoolSet = [2, 3, 4, 2, 4, 5, 5, 6];
const iterable = new Set(SchoolSet);
for (const iterator of iterable) {
  console.log("iterator", iterator);
}

function foo(...arguments) {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);

const userDefinedIterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const iterator of userDefinedIterable) {
  console.log("iterator", iterator);
}

const Iterating = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const iterator of Iterating) {
  console.log("Iterating", iterator);
}

let x = 1;

const iterableObj = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const iterator of generator) {
  console.log("source", iterator);
}

const sources = [1, 2, 3];

const iterator = sources[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1

// Another loop using the same iterator
// picks up where the last loop left off.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// The iterator is used up.
// This loop will execute no iterations.
for (const value of iterator) {
  console.log(value);
}
// [No output]

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterables = [3, 5, 7];
// iterables.foo = "hello";

for (let i in iterables) {
  console.log(i);
}
