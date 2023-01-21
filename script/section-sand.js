window.addEventListener("load", function () {
  let infos = gsap.timeline();
  // let infos2 = gsap.timeline();
  // let infos3 = gsap.timeline();
  // let infos4 = gsap.timeline();

  let signatures = gsap.timeline();
  let gabriella = gsap.timeline();
  let ampersand = gsap.timeline();

  ScrollTrigger.create({
    animation: infos,
    trigger: ".section-sky__intro-label",
    endTrigger: ".section-sand__ps",
    start: "top 30%",
    end: "bottom center",
    scrub: 3,
  });
  // ScrollTrigger.create({
  //   animation: infos2,
  //   trigger: ".section-sand__yes",
  //   start: "bottom top",
  //   end: "bottom center",
  //   scrub: 3,
  // });
  // ScrollTrigger.create({
  //   animation: infos3,
  //   trigger: ".section-sand__eat",
  //   // endTrigger: ".section-sand__where",
  //   start: "top 20%",
  //   end: "top 10%",
  //   scrub: 3,
  // });
  // ScrollTrigger.create({
  //   animation: infos4,
  //   trigger: ".section-sky__wave-1",
  //   // endTrigger: ".section-sand__where",
  //   start: "top 5%",
  //   end: "top top",
  //   scrub: 3,
  // });
  // ScrollTrigger.create({
  //   animation: infos4,
  //   trigger: ".section-sky__wave-1",
  //   // endTrigger: ".section-sand__where",
  //   start: "top 5%",
  //   end: "top top",
  //   scrub: 3,
  // });

  // ScrollTrigger.create({
  //   animation: signatures,
  //   trigger: ".section-sand__names",
  //   start: "bottom bottom",
  //   end: "bottom center",
  //   scrub: 2,
  // });
  // ScrollTrigger.create({
  //   animation: gabriella,
  //   trigger: ".section-sand__names",
  //   start: "bottom bottom",
  //   end: "bottom center",
  //   scrub: 2,
  // });
  // ScrollTrigger.create({
  //   animation: ampersand,
  //   trigger: ".section-sand__names",
  //   start: "bottom bottom",
  //   end: "bottom center",
  //   scrub: 2,
  // });

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
      "<50%"
    );
});
