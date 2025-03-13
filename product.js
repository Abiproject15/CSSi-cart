document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            let name = event.target.dataset.name;
            let price = event.target.dataset.price;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ name, price });

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to Cart!");
        });
    });
});



document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let name = this.getAttribute('data-name');
        let price = parseInt(this.getAttribute('data-price'));
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        
        let existingProduct = cart.find(p => p.name === name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to cart page
        window.location.href = "cart.html";
        alert("Product Added to Cart!");
    });
});

