let result = "";
let i = 0;

do {
  i += 1;
  result += i;
  continue;
} while (i < 5 && i > 0);

console.log("result", result);
