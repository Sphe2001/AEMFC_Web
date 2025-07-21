import React, { useRef, useState, type ReactNode } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface BentoCardProps {
  src: string;
  title: ReactNode;
  description: string;
  isFeatured?: boolean;
}
export const BentoCard = ({
  src,
  title,
  description,
  isFeatured,
}: BentoCardProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isFeatured && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const MandateSection = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className=" font-circular-web text-lg text-blue-50">Our Mission</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Sustainable exploration and mining to power South Africa, managed by
            dynamic young talent carrying out the State vision with pride,
            anchored by sensible business principles, excellent human resources
            and sound financial discipline.
          </p>
        </div>
      </div>
      <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Prim<b>a</b>ry Mand<b>a</b>te
            </>
          }
          description="Mining and supply of coal for electricity generation to secure South Africa's energy supply"
          isFeatured
        />
      </div>
    </section>
  );
};

export default MandateSection;
