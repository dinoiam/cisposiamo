window.addEventListener("load", function () {
  let sun = gsap.timeline();
  let sky = gsap.timeline();
  let waves = gsap.timeline();
  let starsAnimation = gsap.timeline();
  let height = this.window.innerHeight;
  let width = this.window.innerWidth;

  const stars = document.querySelectorAll(".section-sky__star");

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // notice "resize" isn't in the list
  });

  ScrollTrigger.create({
    animation: sun,
    trigger: ".section-sky",
    endTrigger: ".section-sky__intro-label",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    // invalidateOnRefresh: true,
  });

  ScrollTrigger.create({
    animation: waves,
    trigger: ".section-sky",
    endTrigger: ".section-sky__wave-1",
    start: "top top",
    end: "top top",
    scrub: 3,
    // invalidateOnRefresh: true,
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
    x: width,
    y: height,
  });

  sky
    .from(".section-sky", { backgroundColor: "#87c6d8" })
    .to(".section-sky", { backgroundColor: "#74939b" }, ">")
    // .to(".section-sky", { backgroundColor: "##cf7d7c" }, ">")
    .to(".section-sky", { backgroundColor: "#f2b6b4" }, ">")
    .to(".section-sky", { backgroundColor: "#fe7b81" }, ">")
    .to(".section-sky", { backgroundColor: "#7b4567" }, ">");

  waves
    .add("waves")
    .to(
      ".section-sky__wave-1",
      { backgroundPosition: `${height + 400 * 4}px 0` },
      "waves"
    )
    .to(
      ".section-sky__wave-2",
      { backgroundPosition: `${height + 300 * -4}px 0` },
      "waves"
    )
    .to(
      ".section-sky__wave-3",
      { backgroundPosition: `${height + 200 * 2}px 0` },
      "waves"
    )
    .to(
      ".section-sky__wave-4",
      { backgroundPosition: `${height + 100 * -2}px 0` },
      "waves"
    );
});
