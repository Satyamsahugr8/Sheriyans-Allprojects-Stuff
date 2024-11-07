
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
    counter = 0;
    console.log(counter);
    h1.innerHTML = "Hello";
});

var home = document.querySelector('#home-btn');
var about = document.querySelector('#about-btn');
var contact = document.querySelector('#contact-btn');

var home_text = document.querySelector('#home-text');
var about_text = document.querySelector('#about-text');
var contact_text = document.querySelector('#contact-text');
var h3s = document.querySelectorAll('h3');

home.addEventListener("click" , function() {
    hideAllText();
    home_text.style.display = "block";
    home_text.style.width = "50%";
});

about.addEventListener("click" , function() {
    hideAllText();
    about_text.style.display = "block";
    about_text.style.width = "50%";
});

contact.addEventListener("click" , function() {
    hideAllText();
    contact_text.style.display = "block";
    contact_text.style.width = "50%";
});

function hideAllText() {
    h3s.forEach(function (text) {
        text.style.display = "none";
    })
};
