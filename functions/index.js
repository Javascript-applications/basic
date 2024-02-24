// Functions

function _add_two_num(x, y) {
  return x / y;
}

_add_two_num(6, 2);
_add_two_num(10, 5);

// Function Sequence

function one() {
  console.log("first function");
}
function two() {
  console.log("first function");
}

one();
two();

// Sequence Control

function displayResult(result) {
  document.getElementById("demo").innerHTML = result;
}

function addition(x, y) {
  return x + y;
}

let result = addition(3, 4);
displayResult(result);

// 'OR'

function displayResult(result) {
  document.getElementById("demo").innerHTML = result;
}

function addition(x, y) {
  let sum = x + y;
  displayResult(sum);
}

addition(3, 4);

//  How to Use Callback Functions
