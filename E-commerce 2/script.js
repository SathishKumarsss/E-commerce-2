
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;
}

function addToCart(id) {
    // Check if user is logged in
 const storedUserData = JSON.parse(localStorage.getItem('userData'));
 if (!storedUserData) {
     alert('Please login or register to add items to your cart.');
     return;
 }
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value, 10);
    if (isNaN(quantity) || quantity < 1) {
        alert('Please enter a valid quantity.');
        return;
    }
    
    
 
    // Retrieve buttons data and cart from localStorage
    const buttonsData = JSON.parse(localStorage.getItem('buttonsData'));
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the dress data based on the id
    const dressData = buttonsData.find(item => item.id == id);
    if (!dressData) {
        alert('Item not found.');
        return;
    }

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.id === id);

    if (existingItemIndex > -1) {
        // Item already in cart, do not add again
        alert('This item is already in your cart.');
    } else {
        // Add a new item to the cart with the specified quantity
        let item = {
            id: dressData.id,
            productName: dressData.name,
            productPrice: dressData.price,
            productImage: dressData.img,
            quantity: quantity // Use the specified quantity
        };
        cart.push(item);
        alert('Item added to the cart.');
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Redirect to the cart page
    window.location.href = "products-cart.html";
}

// Call updateCartCount on page load to set the correct count
document.addEventListener('DOMContentLoaded', updateCartCount);


