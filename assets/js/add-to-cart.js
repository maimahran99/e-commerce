/*======================= ADD TO CART ===================== */

let cartIcon = document.querySelectorAll('[data-cart-icon]');
let cartCount = document.querySelectorAll('.action-btn .count');
let addToCartBtn = document.querySelectorAll('[data-add-to-cart]');
let productContainer = document.querySelector('.shopping-container');


addToCartBtn.forEach((btn) => {
  btn.addEventListener('click', addToCartFunc);
});

function addToCartFunc() {
  addToCartBtn.forEach((btn) => {
    let product = btn.parentElement;
    productContainer.innerHTML = product;
  });
}
