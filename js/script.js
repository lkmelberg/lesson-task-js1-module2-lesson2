// Add a click event to the button that disables the button and starts a counter.
// Count to 7 and update `span.count` with the value of the count.
// Once 7 is reached stop the count and enable the button.

const button = document.querySelector("button");
let count = document.querySelector(".count");
let value = 0;
const stop = 3;
const intv = 500;

button.onclick = function disableButton() {
  button.disabled = true;

  value = 0;

  const intervalId = setInterval(function logNum() {
    value++;

    count.innerHTML = `${value}`;

    if (value === stop) {
      clearInterval(intervalId);
      button.disabled = false;
    }
  }, intv);
};
