
var btn_add = document.querySelector("#add");
var btn_remove = document.querySelector("#remove");
var input = document.querySelector('input[type="text"]');
var ul = document.querySelector('ul');
var uls = document.querySelectorAll('ul');
var li;

btn_add.addEventListener("click", function() {
    if (input.value === '') {}
    else {
        li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }
})

// console.log(ul.length);

btn_remove.addEventListener("click", function() {

    // ul.removeChild(li);
    // console.log(uls.length);
    if (ul.length == undefined) {}
    if(uls.length == undefined) {}
    else {
        // console.log(ul.length);
        li = ul.lastChild;
        if (li == null) {}
        else ul.removeChild(li);
    }

})
