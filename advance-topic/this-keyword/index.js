'use strict';
console.log(this);

const person = {
  name: 'modi',
  fassion: 'politices',
  age: 65,
  getAge: function () {
    console.log(this);

    function name(params) {
      console.log(this);
    }
    name();
  },
};

person.getAge();
