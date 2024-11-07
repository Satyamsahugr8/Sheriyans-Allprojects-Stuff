
var btn_click = document.getElementById("click-btn");
var h1 = document.querySelector("h1");
var btn_reset = document.getElementById("reset-btn");
var counter = 0;

btn_click.addEventListener("click", function() {
    counter++;
    console.log(counter);
    h1.innerHTML = counter;
});

btn_reset.addEventListener("click", function() {
    h1.innerHTML = "Hello";
})