class Student {
  constructor(name, age, cls) {
    this.Myname = name;
    this.Myage = age;
    this.Mycls = cls;
  }

  Profile() {
    return `My name is ${this.Myname} & age is ${this.age}`;
  }
}

class Player extends Student {
  constructor(Myname, Myage, Mycls, game) {
    super(Myname, Myage, Mycls);
    this.Mygame = game;
  }
}

const player = new Player("Deepak", 24, "CSE", "Football");

console.log("player", player);
