const array = [1, 2, 3, 4, 5, 5];

const newSetArr = new Set(array);

for (const iterator of [6, 7, 8, 9]) {
  newSetArr.add(iterator);
}

newSetArr.forEach((value) => {
  console.log("value", value);
});

console.log("values", newSetArr.values());

console.log("keys", newSetArr.keys());

console.log("keys", newSetArr.entries());

console.log("type", typeof newSetArr);

console.log(newSetArr instanceof Set);

console.log(array instanceof Array);

console.log(newSetArr.size);

console.log(newSetArr.has(2));
