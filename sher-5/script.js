var btn_click = document.getElementById("start");
var btn_stop = document.getElementById("stop");
var h1 = document.querySelector("h1");
var counter = 0;
var int;

btn_click.addEventListener("click", function() {
    int = setInterval(function() {
        counter++;
        h1.textContent = counter;
        console.log(counter);
    }, 1000);
});

btn_stop.addEventListener("click", function() {
    clearInterval(int);
    h1.textContent = "Hello";

});

