/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((module) => {

var catsData = [{
  id: 1,
  name: 'Fluffball',
  price: 0.99,
  image: 'http://placekitten.com/150/150?image=1'
}, {
  id: 2,
  name: 'General Mayhem',
  price: 3.14,
  image: 'http://placekitten.com/150/150?image=2'
}, {
  id: 3,
  name: 'Mittens',
  price: 2.73,
  image: 'http://placekitten.com/150/150?image=3'
}];
module.exports = catsData;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_js__WEBPACK_IMPORTED_MODULE_0__);


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

document.addEventListener("DOMContentLoaded", function () {
  var productPage = document.querySelector(".product-page");
  var viewCartPage = document.querySelector(".view-cart");
  var viewCartBtn = document.querySelector(".view-cart-btn");
  var hideCartBtn = document.querySelector(".hide-cart-btn");
  var checkoutBtn = document.querySelector(".checkout-btn");
  var addToCartButtons = document.querySelectorAll(".add-to-cart");
  var cartContent = document.querySelector(".cart-content");
  var cart = {};
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
  viewCartBtn.addEventListener("click", function () {
    productPage.style.display = "block";
    viewCartPage.style.display = "block";
    viewCartBtn.style.display = "none";
    updateCartDisplay();
  });
  hideCartBtn.addEventListener("click", function () {
    viewCartPage.style.display = "none";
    productPage.style.display = "block";
    viewCartBtn.style.display = "inline-block";
  });
  checkoutBtn.addEventListener("click", function () {
    // Clear the cart and update visuals
    cart = {};
    viewCartPage.style.display = "none";
    viewCartBtn.style.display = "inline-block";
    updateCartDisplay();
  });
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      var productId = event.target.getAttribute("data-product");
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
    var totalCost = 0;
    var _loop = function _loop(productId) {
      if (cart[productId] > 0) {
        var cat = _data_js__WEBPACK_IMPORTED_MODULE_0___default().find(function (cat) {
          return cat.id === parseInt(productId);
        });
        var productName = cat.name;
        var productPrice = cat.price;
        var productImage = cat.image;
        var productTotal = cart[productId] * productPrice;
        totalCost += productTotal;
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = "\n                    <link rel=\"stylesheet\" href=\"./styles.css\">\n                    <img src=\"".concat(productImage, "\" alt=\"").concat(productName, "\">\n                    <p class=\"product-name\">").concat(productName, "</p>\n                    &nbsp;\n                    <p class=\"product-quantity\">Quantity:  ").concat(cart[productId], "</p>\n                    &nbsp;\n                    <h3 class=\"product-total\">$").concat(productTotal.toFixed(2), "</h3>\n                    &nbsp;\n                    <button class=\"remove-item\" data-product=\"").concat(productId, "\">-</button>\n                    <button class=\"add-item\" data-product=\"").concat(productId, "\">+</button>\n            \n                ");
        var removeButton = cartItem.querySelector(".remove-item");
        removeButton.addEventListener("click", function () {
          cart[productId] -= 1;
          if (cart[productId] === 0) {
            delete cart[productId];
          }
          updateCartDisplay();
        });
        var addButton = cartItem.querySelector(".add-item");
        addButton.addEventListener("click", function () {
          cart[productId] += 1;
          updateCartDisplay();
        });
        cartContent.appendChild(cartItem);
      }
    };
    for (var productId in cart) {
      _loop(productId);
    }
    if (totalCost === 0) {
      cartContent.innerHTML = "<p>Nothing in the cart</p>";
    }
    viewCartBtn.textContent = "View Cart (".concat(Object.values(cart).reduce(function (a, b) {
      return a + b;
    }, 0), ")");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map