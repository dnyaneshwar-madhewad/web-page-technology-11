function increment(param1) {
  let h1 = document.querySelector("#" + param1);
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) + 1;

  h1.innerHTML = newValue;
}

function decrement(param1) {
  let h1 = document.querySelector("#" + param1);
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) - 1;

  h1.innerHTML = newValue;
}
