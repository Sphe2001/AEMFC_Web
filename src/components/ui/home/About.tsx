import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../../common/AnimatedTitle";
import RoundedCorners from "../../common/RoundedCorners";
import Button from "../../common/Button";

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const frameRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };
  return (
    <div id="about" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-1xl uppercase md:text-[30px]">About</p>
        <div className="relative size-full">
          <AnimatedTitle
            title="Afri<b>c</b>an Explor<b>a</b>tion <br/> Mining and Fin<b>a</b>nce <br/> Corpor<b>a</b>tion."
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/about.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
              <RoundedCorners />
            </div>
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              African Exploration Mining and Finance Corporation is a StateOwned
              Mining Company established to secure South Africa's energy supply.
            </p>

            <Button
              id="realm-btn"
              title="discover aemfc"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
