import React, { useRef, useState, type ReactNode } from "react";

interface BentoCardProps {
  src: string;
  title: ReactNode;
  description: string;
  isFeatured?: boolean;
}
export const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center brightness-75"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const BentoCard2 = ({ src, title, description }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({
  children,
  className = "",
}) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
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

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md:h-[65vh]">
          <BentoCard2 src="videos/mining.mp4" title={<></>} description="" />
        </BentoTilt>
        <div className="grid h-[90vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="img/energy.webp"
              title={
                <>
                  Fut<b>u</b>re Ene<b>r</b>gy
                </>
              }
              description="Securing resources for future energy needs and key minerals for beneficiation"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="img/mandate.webp"
              title={
                <>
                  Prim<b>a</b>ry Mand<b>a</b>te
                </>
              }
              description="Mining and supply of coal for electricity generation to secure South Africa's energy supply"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="img/youth.webp"
              title={
                <>
                  Dyna<b>m</b>ic Leader<b>s</b>hip
                </>
              }
              description="Managed by young talent with pride, excellence, and sound financial discipline"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default MandateSection;
