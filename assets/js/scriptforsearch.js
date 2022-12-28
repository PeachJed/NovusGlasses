increment = (productId) => {
  var count = document.getElementById(`product-count-${productId}`);
  count.innerHTML = parseInt(count.innerHTML) + 1;
};

decrement = (productId) => {
  var count = document.getElementById(`product-count-${productId}`);
  if (count.innerHTML > 0) {
    count.innerHTML = parseInt(count.innerHTML) - 1;
  }
};

deleteValue = (productId) => {
  // Clear the product count
  document.getElementById(`product-count-${productId}`).innerHTML = 0;

  // Remove all products from the cart
  var priceSpan = document.querySelectorAll('.product-counter span').filter(function (span) {
    return span.innerHTML.includes('$');
  });
  priceSpan.forEach(function (span) {
    span.innerHTML = '';
  });
  if (confirm('Are you sure you want to remove this product from your cart?')) {
    var priceSpan = document.querySelectorAll('.product-counter span').filter(function (span) {
      return span.innerHTML.includes('$');
    });
    priceSpan[0].innerHTML = '';
  }
};

function getProductCount(productId) {
  return document.getElementById(`product-count-${productId}`).innerHTML;
}