// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');

let count = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    alert('Product added to cart!');
  });
});