// locomotive scrolling

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true,
// });

// gsap scrolltrigger

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


gsap.from(".page1 .box", {
    scale: 0,
    duration: 1,
    delay: 1,
    opacity: 0,
    rotate: 360,
  });
  
gsap.from(".page2 .box", {
    scale: 0,
    duration: 1,
    // delay: 1,
    opacity: 0,
    rotate: 360,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      start: "top 50%",
      markers: true,
    },
});
