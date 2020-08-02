function shop() {
  if (document.getElementById('plus-target')) {
    document.getElementById('minus-target').addEventListener('click', decreaseValue);
    document.getElementById('plus-target').addEventListener('click', increaseValue);
  }
}

function increaseValue() {
  let value = parseInt(document.getElementById('ticket-number').innerText);
  value = value + 1;
  document.getElementById('ticket-number').innerText = `${value}`;
}

function decreaseValue() {
  let value = parseInt(document.getElementById('ticket-number').innerText);
  if (value > 0) {
    value = value - 1;
  }
  document.getElementById('ticket-number').innerText = `${value}`;
}

shop();