var input = document. querySelector("input")

var data = [
    {name: "harsh", src: "https://images.unsplash.com/photo-1548612621-77df2f2c5246?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harsi", src: "https://images.unsplash.com/photo-1652695904797-36512b95c45a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshit", src: "https://plus.unsplash.com/premium_photo-1723568425978-81ef0ab51252?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "satyendra", src: "https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "purusham", src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "satyanand", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "satyam", src: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var person = '';


data.forEach(function(elem) {
    person += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
});

document.querySelector('.people').innerHTML = person;

input.addEventListener("input", function() {
    // console.log(input.value);
    var matching = data.filter(function(e) {
        return e.name.startsWith(input.value);
    });

    // console.log(matching);
    var newPersons = '';
    matching.forEach(function(elem) {
        newPersons += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`;
    });

    document.querySelector('.people').innerHTML = newPersons;
});



// efficient code is there will discuss later