let tl = gsap.timeline({});

tl.from ("#page1 .circle", {
    opacity:0,
    rotate:720,
    delay:1,
    duration:2
});


tl.from ("#page2 .circle", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 720,
    // scrollTrigger: ".page2 .circle",
    scrollTrigger: {
        trigger:"#page2 .circle",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%", 
        // scrub: true,
        scrub: 5
    }
});


tl.from ("#page3 .circle", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3,
    scrollTrigger: {
        trigger:"#page3 .circle",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%", 
        // scrub: true,
        scrub: 5
    }
});