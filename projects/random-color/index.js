// let numOne = 10;

// let numTwo = numOne;

// numOne = 20;

// console.log(numOne);
// console.log(numTwo);

// let objOne = {
//   country: 'India',
//   sports: 'Cricket',
// };

// const objTwo = objOne;

// objOne.sports = 'Hokki';

// const copyObj = Object.assign({}, objOne);

// objOne.country = 'Austerilia';

// console.log(objOne.country);
// console.log(copyObj.country);

// const person = {
//   name: 'virat',
//   age: 36,
// };

// function handlePerson(currentPe) {
//   currentPe.age = 35;
// }

// handlePerson(person);

// console.log(person.age);

let game = {
  name: 'cricket',
};

let boy = {
  name: 'Ram',
};

game.boy = boy;
boy.game = game;
