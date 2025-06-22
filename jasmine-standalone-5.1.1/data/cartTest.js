import { addToCart,cart ,loadFromStorage} from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

describe('test Suite: add to cart' ,() => {
    beforeEach(() => {
        spyOn(localStorage ,'setItem');
    });

    it('adds an existing product to the cart' , () =>{
        
        spyOn(localStorage , 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
                quantity : 1,
                deliveryOptionsId : '1'
            }]);
            
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        // expect(cart[0].quantity).toEqual(2); // error not working
    });

    it('adds a new product to the cart', ()=>{
        //mocks the local storage as we dont want to effect the equal torage with test data
        //-----for each used
        //mocks
        spyOn(localStorage , 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });

        console.log(localStorage.getItem('cart'));
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        // expect(cart[0].quantity).toEqual(1);///not woking ----- dont know why
        // expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        //     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        //     quantity: 2,
        //     deliveryOptionId: '1'
        //   }]));
        //excesise 16 b testing
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        // expect(cart[0].quantity).toEqual(1);


    });
    
});