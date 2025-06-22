import {cart, addToCart,calculateCartQuantity} from '../data/cart.js';

// //this allow all itmes from cart to this file
// import *as cartModule from '../data/cart.js';
// //use as
// //cartModule.cart---as property, cartModule.addToCart('id') --- as method;

import {products, loadProducts} from '../data/products.js';
import {formatCurrency} from '../scripts/utils/money.js';

loadProducts(renderProductsGrid);

export function renderProductsGrid() {

    let productHTML = '';

    products.forEach((product)=> {
        productHTML +=  `
                <div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image"
                        src="${product.image}">
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                        ${product.name}
                    </div>

                    <div class="product-rating-container">
                        <img class="product-rating-stars"
                        src="${product.getStarsUrl()}">
                        <div class="product-rating-count link-primary">
                        ${product.rating.count}
                        </div>
                    </div>

                    <div class="product-price">
                        ${product.getPrice()}
                    </div>

                    <div class="product-quantity-container">
                        <select class="js-quantity-selector-${product.id}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                    ${product.extraInfoHTML()}

                    <div class="product-spacer"></div>

                    <div class="added-to-cart js-added-to-cart-${product.id}">
                        <img src="images/icons/checkmark.png">
                        Added
                    </div>

                    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>

        `;
    });



    document.querySelector('.js-products-grid').innerHTML = productHTML;
    const AddedmessageTimeouts={};

    let AddedmessageTimeoutId;




    function updateCartQunatity(quantity) {
        const cartQuantity = calculateCartQuantity();

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    }
    updateCartQunatity();


    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
        button.addEventListener('click',()=>{
            

            // const productId = button.dataset.productId;
            //shortcut --- called --- Destructuring
            const {productId} = button.dataset;
            const qunatitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
            const quantity = Number(qunatitySelector.value);
        

            addToCart(productId,quantity);
            updateCartQunatity(quantity);


            const Addedmessage = document.querySelector(`.js-added-to-cart-${productId}`) ;
            Addedmessage.classList.add('added-to-cart-visible');

            // setTimeout(() => {
            //     Addedmessage.classList.remove('added-to-cart-visible');
            // }, 2000);


            // instead of using display each time
            //used closure
            // closure. Each time we run the loop, it will create
            // a new variable called addedMessageTimeoutId and do
            // button.addEventListener().
            //
            // Then, because of closure, the function we give to
            // button.addEventListener() will get a unique copy
            // of the addedMessageTimeoutId variable and it will
            // keep this copy of the variable forever.
            // (Reminder: closure = if a function has access to a
            // value/variable, it will always have access to that
            // value/variable).
            //
            // This allows us to create many unique copies of the
            // addedMessageTimeoutId variable (one for every time
            // we run the loop) so it lets us keep track of many
            // timeoutIds (one for each product).


            if(AddedmessageTimeoutId){
                clearTimeout(AddedmessageTimeoutId);
            }

            const timeoutId = setTimeout(()=>{
                Addedmessage.classList.remove('added-to-cart-visible');
            },2000);
            AddedmessageTimeoutId = timeoutId;


            console.log(cart);     
        });
    });
}