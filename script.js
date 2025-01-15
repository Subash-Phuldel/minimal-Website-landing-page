const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const navList = document.querySelectorAll(".nav-link");

const animation = gsap.timeline();
animation.from("img", {
  scale: 1.2,
  duration: 1,
});
animation.from("h1", {
  y: 100,
  opacity: 0,
  duration: 1,
});

animation.from("h5", {
  y: 100,
  opacity: 0,
  duration: 1,
});

animation.from(logo, {
  y: -60,
  duration: 1,
});

animation.from(navList, {
  y: -60,
  duration: 1,
  stagger: 0.25,
});
