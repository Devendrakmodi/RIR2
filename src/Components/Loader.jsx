import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import LoaderVideo from "../assets/Videos/landing-page-video.mp4";

const Loader = () => {
  const loaderVideoRef = useRef();

  useGSAP(() => {
    const animateLoader = () => {
      const tl = gsap.timeline();
      tl.to(".loader-content", {
        delay: 2,
        duration: 1,
        translateX: "-100vw",
        ease: "none",
      });
      tl.to(".video-overlay", {
        delay: 0.1,
        duration: 0.5,
        opacity: 0,
        ease: "none",
      });
      loaderVideoRef.current.play();
    };

    animateLoader();
  });

  return (
    <>
      <div className="loader fixed top-0 w-full h-full z-[999999] bg-[linear-gradient(135deg,rgba(69,0,0,1)_0%,rgba(53,0,0,1)_20%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_60%,rgba(53,0,0,1)_80%,rgba(69,0,0,1)_100%)]">
        <div className="loader-content flex w-[250vw] h-full">
          <div className="w-screen h-screen flex justify-center items-center text-center flex-col">
            <h1 className="text-8xl text-white font-Gustavo font-black uppercase break-words">
              Drive Beyond Limits
            </h1>
            <p className="text-2xl mt-5 font-PPFraktion font-bold break-words">
              Welcome to Koensigsegg, Where we make everyone to unstoppable.
            </p>
          </div>
          <div className="loader-video flex justify-center items-center w-screen h-screen overflow-hidden relative">
            <div className="video-overlay bg-black w-full h-full absolute"></div>
            <video
              ref={loaderVideoRef}
              className="w-full h-full object-cover object-center"
              src={LoaderVideo}
              loop
              autoPlay
              muted
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
