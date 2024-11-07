
var button = document.querySelector("button");
var h1 = document.querySelector("h1");
let counter = 0;

button.addEventListener("click", function() {
    counter++;
    console.log(counter);
    h1.innerHTML = counter;
});

// button.addEventListener("mouseover", function() {
//     counter++;
//     console.log(counter);
//     h1.innerHTML = counter;
// });