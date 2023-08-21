document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  let increment = document.querySelector("#increment");
  let decrement = document.querySelector("#decrement");
  let calculationResult = document.querySelector("#calculationResult");

  increment.addEventListener("click", function () {
    count++;
    calculationResult.textContent = count;
  });

  decrement.addEventListener("click", function () {
    if (count > 0) count--;
    calculationResult.textContent = count;
  });
});
