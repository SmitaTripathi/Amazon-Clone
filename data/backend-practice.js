//request establish using using this JS method
const xhr = new XMLHttpRequest();

// in order to make response heard it allow to wait for response 
xhr.addEventListener('load', () => {
    console.log(xhr.response) ;
});

//setup
xhr.open('GET','https://supersimplebackend.dev');
//send this message 
xhr.send(); // its asynchronous code as it sends and move to next line of code
// response would be in future and take time

//-------------------------------------------------------------

// //request establish using using this JS method
// const xhr = new XMLHttpRequest();

// // in order to make response heard it allow to wait for response 
// xhr.addEventListener('load', () => {
//     console.log(xhr.response) ;
// });

// //setup
// xhr.open('GET','https://supersimplebackend.dev/hello');
// //send this message 
// xhr.send(); // its asynchronous code as it sends and move to next line of code
// // response would be in future and take time

//---------------------------------------------------------------------

// //request establish using using this JS method
// const xhr = new XMLHttpRequest();

// // in order to make response heard it allow to wait for response 
// xhr.addEventListener('load', () => {
//     console.log(xhr.response) ;
// });

// //setup
// xhr.open('GET','https://supersimplebackend.dev/products/first');
// //send this message 
// xhr.send(); // its asynchronous code as it sends and move to next line of code
// // response would be in future and take time

// //------------------------------------------------------------------------

 