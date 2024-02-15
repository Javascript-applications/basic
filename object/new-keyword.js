function Student(username, cls, sub) {
  this.username = username;
  this.cls = cls;
  this.sub = sub;
}

Student.prototype.getUsername = function () {
  return this.username;
};
Student.prototype.getSub = function () {
  return this.sub;
};

const user1 = new Student("Deepak kurmi", "CSE", "Math");
const user2 = new Student("Raja kurmi", "CSE", "Math");

console.log(user1.getUsername());
console.log(user2.getUsername());
