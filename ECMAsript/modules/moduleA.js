function addition(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}

function calculator() {
  return {
    addition,
    substract,
  };
}

export { addition, substract };

export default calculator;
