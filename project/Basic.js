// const users = [
//     { firstname: "Mohammad", lastname: "Noushad", age: 22 },
//     { firstname: "Aniket", lastname: "Bhalla", age: 45 },
//     { firstname: "Bidhi", lastname: "Chand", age: 21 },
//     { firstname: "Saif", lastname: "Siddiqi", age: 67 },
// ];

// const output = users.filter(function (x) {return x.age<30;}).map((x)=> x.firstname);

// console.log(output);



// const p1 = new Promise((resolve, reject) => {
//     setTimeout (() => {
//     resolve("Promise 1 Resolved Value!!");
//     },  10000)
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout (() => {
//     resolve("Promise 2 Resolved Value!!");
//     },  20000)
// });

// // await can only be used inside an async 
// async function handlePromise() {
//     console.log ("Hello World!!");
    
//     const val = await p1;
//     console. log ("Namaste JavaScript");
//     console. log (val);
    
//     const val2 = await p2;
//     console. log("Namaste JavaScript 2");
//     console. log (val2);
// }

// handlePromise();

// console.log("satyam");


// var a = 10;
// function b() {
//     var x = 10;
// }

// console.log(a);
// console.log(window.a);
// console.log(this);
// console.log(this.a);


// console.log(a);
// const a = 10;
// console.log(b); 

// let b = 101;
// b = 10;
// console.log(b);



// var a = 20;
// {
//     var a = 10;
//     console.log(a);
// }


// closure 

// function x() {
    
//     var a = 7;
//     function y() {
//         console.log(a);
//     }

//     a = 100;
//     return y;
// }

// var z = x(); 
// console.log(z);

// //....
// z();


// function behavior
// a();
// console.log(b);
// b();

// function a() {
//     console.log("a called");
// }

// var b = function() {
//     console.log("b called");
// } 




setTimeout( function() {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}


x( function y() {
    console.log("y");
})
































