const cartPrice = document.getElementById('cart-price');

function shop(minusTarget, plusTarget, target) {
    plusTarget.addEventListener('click', () => { increaseValue(target)} );
    minusTarget.addEventListener('click', () => { decreaseValue(target)} );
}

function increaseValue(target) {
  let value = parseInt(target.innerText);
  let totalValue = parseInt(cartPrice.innerText.split('₩')[1].split(',')[0]);
  target.innerText = `${value + 1}`;
  cartPrice.innerText = `₩${totalValue + 30},000`
}

function decreaseValue(target) {
  let value = parseInt(target.innerText);
  let totalValue = parseInt(cartPrice.innerText.split('₩')[1].split(',')[0]);
  if (value > 0) {
    target.innerText = `${value - 1}`;
    cartPrice.innerText = `₩${totalValue - 30},000`
  }
}

function createShoppingButtons() {
  const ancres = document.querySelectorAll('.activity-card__description');
  let minusTarget, plusTarget, target;

  ancres.forEach((ancre, index) => {

    let markup =`
    <div class="shopping-button">
      <div class="add-button" id="minus-target-${index}"><p>-</p></div>
      <p class="ticket-number" id="ticket-number-${index}">0</p>
      <div class="add-button" id="plus-target-${index}"><p>+</p></div>
    </div>
    `

    ancre.insertAdjacentHTML('beforeend', markup);

    minusTarget = document.getElementById(`minus-target-${index}`);
    plusTarget = document.getElementById(`plus-target-${index}`);
    target = document.getElementById(`ticket-number-${index}`);

    shop(minusTarget, plusTarget, target);
  })
}

createShoppingButtons();


document.querySelector('input[type="submit"]').addEventListener('click', (event) => {
  event.preventDefault();
  fillInputs()
  document.forms[0].submit();
})



function fillInputs() {
  const ids = ["speedboat-input", "jetski-input", "hurricane-input", "banana-input"];
  const tickets = document.querySelectorAll(".ticket-number");

  tickets.forEach((ticket, index) => {
    document.getElementById(`${ids[index]}`).value = parseInt(ticket.innerText);
  })
}



