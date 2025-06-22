class Cart{
    cartItems ; //product in cart
    #localStorageKey ;  // private property
    // shortcut of :   localStorageKey = undefined ;


    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage() ;
    }

    #loadFromStorage() {   //loadFromStorage: function()  --- shortcut form
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)); 

        if(!this.cartItems){
        this.cartItems = [
                    {
                        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                        quantity : 2,
                        deliveryOptionId : '1'
                    },
                    {
                        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                        quantity : 1,
                        deliveryOptionId : '2'
                    }
                ];
        }
    }

    saveToLocalStorage() {
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
    }

    addToCart(productId,quantity) {
        let  matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity += quantity;
        }
        else{
            this.cartItems.push({
                productId : productId,
                quantity : quantity,
                deliveryOptionId: '1'
            });
        }
        this.saveToLocalStorage();
    }

    removeFromCart(productId){
        const newCart = [];

        this.cartItems.forEach((cartItem)=> {
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });
    
        this.cartItems = newCart;
    
        this.saveToLocalStorage();
    }

    calculateCartQuantity() {
        let cartQuantity = 0;
    
        this.cartItems.forEach((cartItem)=>{
            cartQuantity += cartItem.quantity;
        });
    
        return cartQuantity;
    }


    updateQuantity(productId, newQuantity) {
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
      
        matchingItem.quantity = newQuantity;
      
        this.saveToLocalStorage();
    }


    updateDeliveryOption(productId, deliveryOptionId) {
    let  matchingItem;

    this.cartItems.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId =deliveryOptionId;

    this.saveToLocalStorage();
    }

}


const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

//cart.#localStorageKey = 'test';
//Output :  
//  Uncaught SyntaxError: Private field '#localStorageKey' must be declared in an enclosing class (at cart-class.js:117:5)

console.log(cart);
console.log(businessCart);

//method to check whether business method was generated from cart class or not
console.log(businessCart instanceof Cart);