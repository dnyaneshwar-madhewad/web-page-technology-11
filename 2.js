function increment() {
  let h1 = document.querySelector("#id1");
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) + 1;

  h1.innerHTML = newValue;
}

function decrement() {
  let h1 = document.querySelector("#id1");
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) - 1;

  h1.innerHTML = newValue;
}
