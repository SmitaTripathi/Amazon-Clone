import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
//import '../data/cart-class.js'; //used for practice on OOPs Concepts
// import '../data/backend-practice.js' ;
import {loadProducts, loadProductsFetch} from '../data/products.js' ;
import {loadCart} from '../data/cart.js';

async function loadPage() {
    // console.log('load page');
    try{
        //throw 'error1' ;

        await loadProductsFetch();

        const value = await new Promise ((resolve) =>{
            loadCart(() =>{
                //reject('error2');
                resolve('value2');
            });
        });
    }
    
    catch(error) {
        console.log('Unexpected error.Please try again later. ');
    }
    

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();

    // return 'value2';
}
loadPage();
// loadPage().then((value)=>{
//     console.log('next step');
//     console.log(value);
// });

/*
Promise.all([
    loadProductsFetch(),
    new Promise ((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    })
    
]).then(() => { // in this we can aslo add parameter
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise( (resolve) => {
    // console.log(' Start promise'); // it runs the inner function immediately
    loadProducts(()=>{
        // console.log('finished loading');
        resolve();
    });

}).then( ()=>{
    // console.log('next step');
    return new Promise ((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });
     
}).then(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});


loadProducts( () => {
    loadCart(()=>{
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/