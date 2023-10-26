const obj = {
  count: 12,
};

Object.defineProperty(obj, "size", {
  value: 50,
  enumerable: true,
  writable: true,
  configurable: false,
});

Object.defineProperty(obj, "size", { value: 23 });

Object.defineProperty(obj, "years", { value: 2023 });

Object.defineProperty(obj, "inc", {
  get: function () {
    this.count++;
  },
});

obj.inc;

console.log(Object.getOwnPropertyNames(obj));

console.log("keys", Object.keys(obj));

console.log(obj);
