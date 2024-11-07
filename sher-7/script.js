var prg = document.querySelector('#progress');

var count = 0;
var nn = setInterval (function () {
    if ( count == 100) {
        clearInterval(nn);
    }
    count = count + 1;
    
    // console.log(count);
    prg.style.width = count+'%';
},25);