// Function to show the quantity selector and save the order details
function showQuantity(productName) {
    var orderBtn = document.querySelector('.order-btn');
    var quantitySelector = document.querySelector('.quantity-selector');

    orderBtn.style.display = 'none'; // Hide the "Order Now" button
    quantitySelector.style.display = 'flex'; // Show the quantity selector

    // Get the selected quantity
    var quantity = parseInt(document.querySelector('.quantity').textContent);
}

// Add event listener to the "Done" button to notify the user that the order has been placed
var doneBtn = document.querySelector('.done');
doneBtn.addEventListener('click', function() {
    // Display an alert message to notify the user that the order has been placed
    alert('Order placed! Thank you for your purchase.');
    
    // Hide the quantity selector and show the "Order Now" button again
    var orderBtn = document.querySelector('.order-btn');
    var quantitySelector = document.querySelector('.quantity-selector');
    orderBtn.style.display = 'block';
    quantitySelector.style.display = 'none';
});
