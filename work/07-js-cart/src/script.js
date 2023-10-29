"use strict";
// Define the product data
// const products = [
//     {
//         name: "Fluffball",
//         price: 0.99,
//         image: "http://placekitten.com/150/150?image=1",
//     },
//     {
//         name: "General Mayhem",
//         price: 3.14,
//         image: "http://placekitten.com/150/150?image=2",
//     },
//     {
//         name: "Whiskers",
//         price: 2.73,
//         image: "http://placekitten.com/150/150?image=3",
//     },
// ];

// Define the cart data
// let cart = [];

// // Get the DOM elements
// const productContainer = document.querySelector(".product-container");
// const cartContainer = document.querySelector(".cart-container");
// const viewCartButton = document.querySelector(".view-cart-button");
// const hideCartButton = document.querySelector(".hide-cart-button");
// const checkoutButton = document.querySelector(".checkout-button");
// const cartItemsCount = document.querySelector(".cart-items-count");

// // Render the product page
// function renderProductPage() {
//     // Clear the product container
//     productContainer.innerHTML = "";

//     // Loop through the products and create the HTML for each product
//     products.forEach((product) => {
//         const productHTML = `
//             <div class="product">
//                 <img src="${product.image}" alt="${product.name}" />
//                 <h3>${product.name}</h3>
//                 <p>$${product.price.toFixed(2)}</p>
//                 <button class="add-to-cart-button" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
//             </div>
//         `;

//         // Add the product HTML to the product container
//         productContainer.innerHTML += productHTML;
//     });

//     // Add event listeners to the Add to Cart buttons
//     const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
//     addToCartButtons.forEach((button) => {
//         button.addEventListener("click", addToCart);
//     });
// }

// // Add an item to the cart
// function addToCart(event) {
//     // Get the product name, price, and image from the button data attributes
//     const name = event.target.dataset.name;
//     const price = parseFloat(event.target.dataset.price);
//     const image = event.target.dataset.image;

//     // Check if the item is already in the cart
//     const existingItem = cart.find((item) => item.name === name);

//     if (existingItem) {
//         // If the item is already in the cart, increase the quantity by 1
//         existingItem.quantity++;
//     } else {
//         // If the item is not in the cart, add it with a quantity of 1
//         cart.push({
//             name: name,
//             price: price,
//             image: image,
//             quantity: 1,
//         });
//     }

//     // Render the cart
//     renderCart();

//     // Update the cart items count
//     cartItemsCount.textContent = cart.length;

//     // Show the cart container
//     cartContainer.classList.remove("hidden");

//     // Hide the product container
//     productContainer.classList.add("hidden");
// }

// // Render the cart
// function renderCart() {
//     // Clear the cart container
//     cartContainer.innerHTML = "";

//     // Loop through the cart items and create the HTML for each item
//     cart.forEach((item) => {
//         const itemHTML = `
//             <div class="cart-item">
//                 <img src="${item.image}" alt="${item.name}" />
//                 <div class="cart-item-details">
//                     <h4>${item.name}</h4>
//                     <p>$${item.price.toFixed(2)}</p>
//                     <p>Quantity: ${item.quantity}</p>
//                 </div>
//             </div>
//         `;

//         // Add the item HTML to the cart container
//         cartContainer.innerHTML += itemHTML;
//     });

//     // If the cart is empty, show a message
//     if (cart.length === 0) {
//         const emptyCartHTML = `
//             <p>Your cart is empty.</p>
//         `;

//         // Add the empty cart message to the cart container
//         cartContainer.innerHTML = emptyCartHTML;
//     } else {
//         // Add the checkout button to the cart container
//         const checkoutButtonHTML = `
//             <button class="checkout-button">Checkout</button>
//         `;
//         cartContainer.innerHTML += checkoutButtonHTML;

//         // Add an event listener to the checkout button
//         const checkoutButton = document.querySelector(".checkout-button");
//         checkoutButton.addEventListener("click", checkout);
//     }
// }

// // Show the cart and hide the product page
// function showCart() {
//     // Render the cart
//     renderCart();

//     // Update the cart items count
//     cartItemsCount.textContent = cart.length;

//     // Show the cart container
//     cartContainer.classList.remove("hidden");

//     // Hide the product container
//     productContainer.classList.add("hidden");

//     // Hide the view cart button
//     viewCartButton.classList.add("hidden");
// }

// // Hide the cart and show the product page
// function hideCart() {
//     // Hide the cart container
//     cartContainer.classList.add("hidden");

//     // Show the product container
//     productContainer.classList.remove("hidden");

//     // Show the view cart button
//     viewCartButton.classList.remove("hidden");
// }

// // Checkout and clear the cart
// function checkout() {
//     // Clear the cart
//     cart = [];

//     // Render the cart
//     renderCart();

//     // Update the cart items count
//     cartItemsCount.textContent = cart.length;

//     // Hide the cart container
//     cartContainer.classList.add("hidden");

//     // Show the product container
//     productContainer.classList.remove("hidden");

//     // Show the view cart button
//     viewCartButton.classList.remove("hidden");
// }

// // Add event listeners to the view cart, hide cart, and checkout buttons
// viewCartButton.addEventListener("click", showCart);
// hideCartButton.addEventListener("click", hideCart);
// checkoutButton.addEventListener("click", checkout);

// // Render the product page
// renderProductPage();
import catsData from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const productPage = document.querySelector(".product-page");
  const viewCartPage = document.querySelector(".view-cart");
  const viewCartBtn = document.querySelector(".view-cart-btn");
  const hideCartBtn = document.querySelector(".hide-cart-btn");
  const checkoutBtn = document.querySelector(".checkout-btn");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartContent = document.querySelector(".cart-content");

  let cart = {};
  // catsData.forEach((cat) => {
  //     const product = document.createElement("div");
  //     product.classList.add("product");
  //     product.innerHTML = `
  //         <img src="${cat.image}" alt="${cat.name}">
  //         <p class="product-name">${cat.name}</p>
  //         <p class="product-price">$${cat.price.toFixed(2)} each</p>
  //         <button class="add-to-cart" data-product="${cat.id}">Add to Cart</button>
  //     `;
  //     productPage.appendChild(product);
  // });
  viewCartBtn.addEventListener("click", () => {
    productPage.style.display = "block";
    viewCartPage.style.display = "block";
    viewCartBtn.style.display = "none";
    updateCartDisplay();
  });

  hideCartBtn.addEventListener("click", () => {
    viewCartPage.style.display = "none";
    productPage.style.display = "block";
    viewCartBtn.style.display = "inline-block";
  });

  checkoutBtn.addEventListener("click", () => {
    // Clear the cart and update visuals
    cart = {};
    viewCartPage.style.display = "none";
    viewCartBtn.style.display = "inline-block";
    updateCartDisplay();
  });

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-product");

      if (cart[productId]) {
        cart[productId]++;
      } else {
        cart[productId] = 1;
      }

      updateCartDisplay();
    });
  });

  function updateCartDisplay() {
    cartContent.innerHTML = "";

    let totalCost = 0;

    for (const productId in cart) {
      if (cart[productId] > 0) {
        const cat = catsData.find((cat) => cat.id === parseInt(productId));
        const productName = cat.name;
        const productPrice = cat.price;
        const productImage = cat.image;

        const productTotal = cart[productId] * productPrice;
        totalCost += productTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                    <link rel="stylesheet" href="./styles.css">
                    <img src="${productImage}" alt="${productName}">
                    <p class="product-name">${productName}</p>
                    &nbsp;
                    <p class="product-quantity">Quantity:  ${cart[productId]}</p>
                    &nbsp;
                    <h3 class="product-total">$${productTotal.toFixed(2)}</h3>
                    &nbsp;
                    <button class="remove-item" data-product="${productId}">-</button>
                    <button class="add-item" data-product="${productId}">+</button>
            
                `;
        const removeButton = cartItem.querySelector(".remove-item");
        removeButton.addEventListener("click", () => {
          cart[productId] -= 1;
          if (cart[productId] === 0) {
            delete cart[productId];
          }
          updateCartDisplay();
        });

        const addButton = cartItem.querySelector(".add-item");
        addButton.addEventListener("click", () => {
          cart[productId] += 1;
          updateCartDisplay();
        });

        cartContent.appendChild(cartItem);
      }
    }
    
    if (totalCost === 0) {
      cartContent.innerHTML = "<p>Nothing in the cart</p>";
    }

    viewCartBtn.textContent = `View Cart (${Object.values(cart).reduce(
      (a, b) => a + b,
      0
    )})`;
  }
});
