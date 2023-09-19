// const javascriptSingleButton = document.querySelector('.btn-onclick');

// javascriptSingleButton.onclick = function () {
//   document.body.style.backgroundColor = '#a7f3d0'
// }

// const javascriptMultipleButtons = document.querySelectorAll('.btn-onclick');

// javascriptMultipleButtons.forEach((button) => {
//   button.onclick = function (){
//     document.body.style.backgroundColor = '#a7f3do'
//   }
// })

// function changeBgToRandom(){
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = `#${randomColor}`
// }
// const eventListenerButton = document.querySelector ('.btn-event-listener')
// eventListenerButton.addEventListener('click', changeBgToRandom)

// function changeBackground(){
//   document.body.style.backgroundColor = '#bae6fd'
// }

//Pricing Calculator
// const priceInput = document.querySelector('#price');
// const quantityInput = document.querySelector('#quantity');
// const totalPriceDisplay = document.querySelector('.total-price');
// const quantityLabel = document.querySelector('.quantity-label');

// priceInput.addEventListener('input', calculateTotalCost);
// quantityInput.addEventListener('input', calculateTotalCost);

// calculateTotalCost();

// function calculateTotalCost(){
//   const total = priceInput.value * quantityInput.value;
//   totalPriceDisplay.innerText = `$${total.toFixed(2)}`;
// }

// function updateQuantityLabel(){
//   const quantity = quantityInput.value;
//   quantityLabel.innerText = quantity;
// }

// quantityInput.addEventListener('input', updateQuantityLabel);
// updateQuantityLabel();

// Crazy Button
// const crazyButton = document.querySelector('.crazy-button');

// crazyButton.addEventListener('mouseenter', goBtnWild);

// function goBtnWild(){
//   const offsetTop = Math.random() * (window.innerHeight - crazyButton.clientHeight);
//   const offsetLeft = Math.random() * (window.innerWidth - crazyButton.clientWidth);
//   crazyButton.style.top = offsetTop + 'px';
//   crazyButton.style.left = offsetLeft + 'px';
// }