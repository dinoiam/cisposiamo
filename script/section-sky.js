window.addEventListener("load", function () {
  let sun = gsap.timeline();
  let sky = gsap.timeline();
  let starsAnimation = gsap.timeline();
  //   let rapidLink = gsap.timeline();
  const wave1 = document.querySelector(".section-sky__wave-1");
  const wave2 = document.querySelector(".section-sky__wave-2");
  const wave3 = document.querySelector(".section-sky__wave-3");
  const wave4 = document.querySelector(".section-sky__wave-4");

  const stars = document.querySelectorAll(".section-sky__star");
  const rapidLink = document.querySelector(".section-sky__rapid-link");

  ScrollTrigger.create({
    animation: sun,
    trigger: ".section-sky",
    endTrigger: ".section-sky__intro-label",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    invalidateOnRefresh: true,
  });

  ScrollTrigger.create({
    animation: sky,
    trigger: ".section-sky",
    endTrigger: ".section-sky__intro-label",
    start: "top top",
    end: "bottom top",
    scrub: 3,
  });

  ScrollTrigger.create({
    animation: starsAnimation,
    trigger: ".section-sky__intro-label",
    start: "top top",
    endTrigger: ".section-sand__info",
    end: "bottom top",
    scrub: 3,
    onToggle: ({ isActive }) => {
      stars.forEach((star) => {
        isActive
          ? star.classList.add("visible")
          : star.classList.remove("visible");
      });
    },
  });

  sun.to(".section-sky__sun", {
    transform: "translate(calc(100vw - 200%), calc(100vh - 200%))",
  });

  sky
    .from(".section-sky", { backgroundColor: "#87c6d8" })
    .to(".section-sky", { backgroundColor: "#74939b" }, ">")
    // .to(".section-sky", { backgroundColor: "##cf7d7c" }, ">")
    .to(".section-sky", { backgroundColor: "#f2b6b4" }, ">")
    .to(".section-sky", { backgroundColor: "#fe7b81" }, ">")
    .to(".section-sky", { backgroundColor: "#7b4567" }, ">");

  window.addEventListener(
    "scroll",
    () => {
      let value = window.scrollY;
      if (value > 10) {
        rapidLink.style.opacity = 0;
        rapidLink.style.pointerEvents = "none";
      } else {
        rapidLink.style.opacity = 1;
        rapidLink.style.pointerEvents = "all";
      }

      wave1.style.backgroundPositionX = 400 + value * 4 + "px";
      wave2.style.backgroundPositionX = 300 + value * -4 + "px";
      wave3.style.backgroundPositionX = 200 + value * 2 + "px";
      wave4.style.backgroundPositionX = 100 + value * -2 + "px";
    },
    { passive: true }
  );
});
