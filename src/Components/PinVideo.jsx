import React, { useEffect, useRef } from "react";
import Video from "../assets/Videos/landing-page-video.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Bhosda = () => {
  const videoContRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        y: "-400vh",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: videoContRef.current,
          scroller: "body",
          pin: true,
          scrub: true,
          start: "top top",
          // markers: true,
          pinSpacing: false,
          end: () => "+=" + videoContRef.current.offsetWidth * 2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-fit">
      <section className="w-full h-full overflow-hidden border-y-2 border-white relative p-20">
        <div
          ref={videoContRef}
          className="w-full h-full flex justify-center items-center bg-red-400 overflow-hidden"
        >
          <div className="w-[50vw] h-[60vh] overflow-hidden rounded-md mx-auto bg-green-400">
            <video
              ref={videoRef}
              className="w-full h-full object-cover object-center"
              src={Video}
              muted
              loop
              autoPlay
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bhosda;
