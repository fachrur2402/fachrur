let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    // Menambahkan item ke keranjang
    cart.push({ name: productName, price: price });
    totalPrice += price;

    // Menampilkan item di keranjang
    displayCartItems();
    updateTotalPrice();
}

function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear previous items

    // Menampilkan item-item yang ada di keranjang
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItemsList.appendChild(li);
    });
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong! Silakan tambahkan produk ke keranjang.');
    } else {
        alert('Pembayaran berhasil! Terima kasih telah berbelanja.');
        // Reset keranjang dan total harga setelah checkout
        cart = [];
        totalPrice = 0;
        displayCartItems();
        updateTotalPrice();
    }
}
