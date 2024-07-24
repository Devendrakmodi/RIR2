import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import LoaderVideo from "../assets/Videos/landing-page-video.mp4";
import "./Loader.css";

const Loader = () => {
  const loaderVideoRef = useRef();
  const loaderBtnRef = useRef();

  useEffect(() => {
    const button = loaderBtnRef.current;

    const animateLoader = () => {
      gsap.to(".loader-content", {
        delay: 2.5,
        duration: 1.5,
        translateX: "-100vw",
        ease: "none",
      });
    };
    const animateRemoveLoader = () => {
      gsap.to(".loader", {
        duration: 2,
        left: "-100%",
        ease: "none",
        onComplete: () => {
          gsap.set(".loader", { display: "none" });
        },
      });
    };

    animateLoader();

    setTimeout(() => {
      if (loaderVideoRef.current) {
        loaderVideoRef.current.currentTime = 0;
        loaderVideoRef.current.play();
      }
    }, 1000);

    button.addEventListener("click", animateRemoveLoader);

    return () => {
      button.removeEventListener("click", animateRemoveLoader);
    };
  }, []);

  return (
    <>
      <div className="loader fixed top-0 w-full h-full z-[999999] bg-[linear-gradient(135deg,rgba(69,0,0,1)_0%,rgba(53,0,0,1)_20%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_60%,rgba(53,0,0,1)_80%,rgba(69,0,0,1)_100%)]">
        <div className="loader-content flex w-[250vw] h-full">
          <div className="w-screen h-screen flex justify-center items-center text-center flex-col">
            <h1 className="text-8xl text-white font-UltimateGearSlant font-black uppercase break-words">
              Drive Beyond Limits
            </h1>
            <p className="text-2xl mt-5 font-Gustavo font-bold break-words">
              Welcome to Koensigsegg, Where we make everyone unstoppable.
            </p>
          </div>
          <div className="loader-video flex justify-center items-center w-screen h-screen overflow-hidden relative p-10 bg-transparent">
            <video
              ref={loaderVideoRef}
              className="w-full h-full object-cover object-center relative"
              src={LoaderVideo}
              loop
              autoPlay
              muted
            ></video>
            <div
              ref={loaderBtnRef}
              className="loader-btn cursor-pointer absolute backdrop-blur-sm right-28 bottom-14 -translate-x-1/2 btn font-PPFraktion text-sm text-[white] font-bold bg-[#ffffff1a] px-4 py-3"
            >
              Take Test Drive
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
