const incrementId = document.getElementById('Increment');
const decrementId = document.getElementById('Decrement');
let render = document.getElementById('counter_div');

function counter() {
  let count = 0;

  function handleIncrement() {
    count++;
  }
  function handleDecrement() {
    count--;
  }

  function modify(identity) {
    if (identity === '1') handleIncrement();
    else if (identity === '0') handleDecrement();
    return count;
  }

  return modify;
}

const clouser = counter();

function handleCounter(e) {
  let count = clouser(e.target.value);

  render.innerHTML = '<h2>' + count + '</h2>';
}

incrementId.addEventListener('click', handleCounter);
decrementId.addEventListener('click', handleCounter);
