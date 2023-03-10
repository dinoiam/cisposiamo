window.addEventListener("load", function () {
  let plane = gsap.timeline();

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // notice "resize" isn't in the list
  });

  ScrollTrigger.create({
    animation: plane,
    trigger: "#text1849",
    endTrigger: ".section-cloud__gift-info",
    start: "bottom bottom",
    end: "bottom bottom",
    scrub: 2,
  });
  plane
    .add("start")
    .to(
      ".path",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "start"
    )
    .to(
      "#plane",
      {
        motionPath: {
          path: ".path",
          align: ".path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
      },
      "start"
    );
});
