var swiper = new Swiper(".mySwiper", {
        
        spaceBetween: 100,
        navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }
      });

 ScrollTrigger.defaults({
    toggleActions: "restart pause resume none",
    });

// Scroll Triggers



gsap.from(".explaination-how-it-works", {
  scrollTrigger: ".explaination-how-it-works", // start the animation when ".box" enters the viewport (once)
  x: 500,
  opacity:0,
  scrub: true,
});

gsap.from(".explaination-how-it-works-2", {
  scrollTrigger: ".explaination-how-it-works-2", // start the animation when ".box" enters the viewport (once)
  x: -500,
  opacity:0,
  scrub: true,
});

gsap.from(".how-it-works-img-1", {
  scrollTrigger: ".how-it-works-img-1", // start the animation when ".box" enters the viewport (once)
  y: 50,
  opacity:0,
  scale:2.5,
  scrub: true,
  start: 'top center'
});

gsap.from(".how-it-works-img-2", {
  scrollTrigger: ".how-it-works-img-2", // start the animation when ".box" enters the viewport (once)
  y: -50,
  opacity:0,
  scale:2.5,
  scrub: true,
  start: 'top center'
});

gsap.from(".test-1", {
  scrollTrigger: ".test-1", // start the animation when ".box" enters the viewport (once)
  x: -500,
  opacity:0,
  scale:0.5,
  scrub: true,
  start: 'top center'
});
gsap.from(".test-2", {
  scrollTrigger: ".test-2", // start the animation when ".box" enters the viewport (once)
  x: 500,
  delay:.1,
  opacity:0,
  scale:0.5,
  scrub: true,
  start: 'top center'
});

gsap.from(".test-3", {
  scrollTrigger: ".test-3", // start the animation when ".box" enters the viewport (once)
  y: 500,
  delay:.2,
  opacity:0,
  scale:0.5,
  scrub: true,
  start: 'top center'
});


