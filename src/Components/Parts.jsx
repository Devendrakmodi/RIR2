import React, { useEffect } from "react";
import image1 from "../assets/Images/Koenigsegg-1.jpg";
import image2 from "../assets/Images/Koenigsegg-2.jpg";
import image3 from "../assets/Images/Koenigsegg-3.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Parts = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          scroller: "body",
          start: "50% 50%",
          end: "300% 50%",
          pin: true,
          markers: true,
          scrub: true,
        },
      });

      tl.to(
        ".scroll-images",
        {
          height: "60vh",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 div",
        {
          height: "60vh",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 .our",
        {
          top: "0%",
          left: "0%",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 .work",
        {
          bottom: "0%",
          right: "0%",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(".scroll-images div", {
        translateY: "-60vh",
        duration: 2,
        ease: "power3.in",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="part-7 h-screen w-full flex justify-center items-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 our-work-text w-[50vw] text-5xl h-0 z-20">
        <h1 className="our absolute left-[33%] -translate-x-1/2 -translate-y-1/2 top-1/2 text-6xl font-bold font-Gustavo">
          Our
        </h1>
        <h1 className="work absolute right-[33%] translate-x-1/2  translate-y-1/2 bottom-1/2 text-6xl font-bold font-Gustavo">
          Work
        </h1>
      </div>
      <div className="scroll-images w-[50vw] h-0 flex justify-center items-center relative bg-white overflow-hidden">
        <div className="w-full h-full">
          <div className="w-full h-[60vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image1}
              alt="Koenigsegg 1"
            />
          </div>
          <div className="w-full h-[60vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image2}
              alt="Koenigsegg 2"
            />
          </div>
          <div className="w-full h-[60vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image3}
              alt="Koenigsegg 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;
