window.addEventListener("load", function () {
  let infos = gsap.timeline();
  let infos2 = gsap.timeline();
  let infos3 = gsap.timeline();
  let infos4 = gsap.timeline();

  let michele = gsap.timeline();
  let gabriella = gsap.timeline();
  let ampersand = gsap.timeline();

  ScrollTrigger.create({
    animation: infos,
    trigger: ".section-sky__intro-label",
    // endTrigger: ".section-sky__wave-1",
    start: "top 30%",
    end: "top top",
    scrub: 3,
  });
  ScrollTrigger.create({
    animation: infos2,
    trigger: ".section-sky__intro-label",
    endTrigger: ".section-sky__wave-1",
    start: "bottom top",
    end: "top 30%",
    scrub: 3,
  });
  ScrollTrigger.create({
    animation: infos3,
    trigger: ".section-sky__wave-1",
    // endTrigger: ".section-sand__where",
    start: "top 20%",
    end: "top 10%",
    scrub: 3,
  });
  ScrollTrigger.create({
    animation: infos4,
    trigger: ".section-sky__wave-1",
    // endTrigger: ".section-sand__where",
    start: "top 5%",
    end: "top top",
    scrub: 3,
  });
  ScrollTrigger.create({
    animation: infos4,
    trigger: ".section-sky__wave-1",
    // endTrigger: ".section-sand__where",
    start: "top 5%",
    end: "top top",
    scrub: 3,
  });

  ScrollTrigger.create({
    animation: michele,
    trigger: ".section-sand__names",
    start: "bottom bottom",
    end: "bottom center",
    scrub: 2,
  });
  ScrollTrigger.create({
    animation: gabriella,
    trigger: ".section-sand__names",
    start: "bottom bottom",
    end: "bottom center",
    scrub: 2,
  });
  ScrollTrigger.create({
    animation: ampersand,
    trigger: ".section-sand__names",
    start: "bottom bottom",
    end: "bottom center",
    scrub: 2,
  });

  infos.to(".section-sand__where", { y: 0, opacity: "1", duration: 1 });
  infos2.to(".section-sand__yes", {
    transform: "none",
    opacity: "1",
  });
  infos3.to(".section-sand__eat", {
    transform: "none",
    opacity: "1",
  });
  infos4.to(".section-sand__dance", {
    scale: 1,
    opacity: "1",
  });
  michele
    .to(".michele-path", {
      "stroke-dashoffset": 0,
      ease: "none",
    })
    .to(
      ".michele-circle",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "<20%"
    );
  gabriella
    .to(".gabriella-path", {
      "stroke-dashoffset": 0,
      ease: "none",
    })
    .to(
      ".gabriella-circle",
      {
        "stroke-dashoffset": 0,
        ease: "none",
      },
      "<50%"
    );
  ampersand.to(".ampersand-path", {
    "stroke-dashoffset": 0,
    ease: "none",
  });
});
