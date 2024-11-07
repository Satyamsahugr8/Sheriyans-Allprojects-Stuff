let tl = gsap.timeline({});

tl.to ("#page2 p", {
    transform: "translateX(-135%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
});