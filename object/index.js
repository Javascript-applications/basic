const persion = {
  firstName: "Deepak",
  lastName: "kurmi",
  age: 20,
  eyeColor: "gray",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(persion.age);
console.log(persion["firstName"]);
console.log(persion.fullname());

persion.firstName = "Dhoni";

console.log("firstName :", persion.firstName);

persion.middleName = "dk";

console.log(persion);

delete persion.middleName;

console.log(persion);
