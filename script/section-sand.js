window.addEventListener("load", function () {
  let infos = gsap.timeline();

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // notice "resize" isn't in the list
  });

  ScrollTrigger.create({
    animation: infos,
    trigger: ".section-sky__intro-label",
    endTrigger: ".section-cloud",
    start: "top 30%",
    end: "top center",
    scrub: 3,
  });

  infos
    .to(".section-sand__where", { y: 0, opacity: "1", duration: 1 })
    .to(".section-sand__yes", {
      transform: "none",
      opacity: "1",
    })
    .to(".section-sand__eat", {
      transform: "none",
      opacity: "1",
    })
    .to(".section-sand__dance", {
      scale: 1,
      opacity: "1",
    })
    .add("sign", ">")
    .to(
      ".michele-path",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "sign"
    )
    .to(
      ".michele-circle",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "<20%"
    )
    .to(
      ".gabriella-path",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "sign"
    )
    .to(
      ".gabriella-circle",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "<50%"
    )
    .to(
      ".ampersand-path",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "sign"
    )
    .to(
      ".section-sand__ps",
      {
        opacity: 1,
      },
      "sign"
    );
});
