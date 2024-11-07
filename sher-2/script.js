// var h1 = document.querySelector("h1");
var form = document.querySelector("form");
var input1 = document.querySelector("#first_name");
var input2 = document.querySelector("#last_name");
var h4 = document.querySelector("#error");
var inputs = document.querySelectorAll('input[type="text"]');
// querySelectorAll -> returns a node array jaisa hai.

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     if (input1.value === '' || input2.value === '') {
//         h4.textContent = "Blank field not allowed";
//         h4.style.color = "red";
//     }
//     console.log(input1.value, input2.value);
// });

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // inputs.forEach(function(ele) {
    //     if (ele.value === '') {
    //         h4.textContent = "Error";
    //         h4.style.color = "red";
    //     } else {
    //         h4.textContent = "";
    //     }
    // })

    for (var i = 0; i < inputs.length; i++){
        if(inputs[i].value === ''){
        h4.textContent = "Error, fields are blank";
        h4.style.color = "red";
        break;
        }
        else {
            h4.textContent = "";
            console.log(input1.value, input2.value);
            // break;
        }
    }

});

