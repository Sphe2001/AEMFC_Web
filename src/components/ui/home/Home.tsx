import { useGSAP } from "@gsap/react";
import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../../common/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);
const HomeSection = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="home" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-md uppercase md:text-[50px]">
          Welcome to <b>AEMFC</b>
        </p>

        <AnimatedTitle
          title="Secur<b>i</b>ng <br /> S<b>o</b>uth Africa's <br /> ener<b>g</b>y supply."
          containerClass="mt-5 !text-black text-center"
        />
        <div className="home-subtext">
          <p>Sustainable exploration and mining to power South Africa</p>
          <p>
            managed by dynamic young talent carrying out the State vision with
            pride and sound financial discipline.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path home-image">
          <img
            src="img/hero-mining.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover brightness-75"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
