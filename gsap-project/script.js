// 1st
// gsap.to("#box", {
//     x:500,
//     rotate:360,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue", 
// });

// gsap.from("#box", {
//     x:500,
//     rotate:360,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue", 
// });


// 2nd timeline
// var tl = gsap.timeline();

// tl.to("#box1", {
//     x:600,
//     rotate:360,
//     duration:2,
//     scale:0.5,
//     delay:1,
//     backgroundColor:"blue", 
// });

// tl.to("#box2", {
//     x:600,
//     rotate:360,
//     scale:0.5,
//     duration:1,
//     backgroundColor:"blue", 
// });


// 3rd code
var tl = gsap.timeline();

tl.from("#nav h4", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
});

tl.from("#main h1", {
    x:-500,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
});

tl.from("#main img", {
    x:100,
    rotate:90,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.5
});