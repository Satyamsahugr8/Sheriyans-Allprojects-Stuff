var textarea = document.querySelector("#teext");
var h5 = document.querySelector("#containerh4");

textarea.addEventListener("input", function() {
    h5.textContent = textarea.value.length;
});