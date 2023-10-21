const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(JSON.stringify(person));

const arr = Object.values(person);

arr.map((item) => {
  console.log(item);
});

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
};

console.log(person.lang);

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};

person.lang = "hindi";

console.log(person.language);

const obj = { count: 0 };

Object.defineProperty(obj, "reset", {
  get: function () {
    return (this.count = 0);
  },
});

Object.defineProperty(obj, "increment", {
  get: function () {
    return this.count++;
  },
});

Object.defineProperty(obj, "decrement", {
  get: function () {
    return this.count--;
  },
});

Object.defineProperty(obj, "add", {
  set: function (value) {
    return (this.count += value);
  },
});

Object.defineProperty(obj, "subtract", {
  set: function (value) {
    return (this.count -= value);
  },
});

obj.reset;
obj.increment;
obj.decrement;
obj.add = 5;
obj.subtract = 2;

console.log(obj);

const person = {
  firstname: "deepak kurmi",
  greet: function () {
    return this.firstname;
  },
};

console.log(person.greet());
