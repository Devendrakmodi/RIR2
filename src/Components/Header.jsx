import Navbar from "./Navbar";
import "./Header.css";
import Slider from "./Slider";

export default function Header() {
  return (
    <>
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:45px_45px]"></div>
        </div>
      </div>
      <header className="relative w-full h-screen p-3 lg:p-8 bg-transparent">
        <div className="header-view relative w-full h-full bg-transparent">
          <Navbar />
          <Slider />
          <div className="btn absolute top-40 right-10 w-fit h-fit flex justify-center items-center z-10">
            <div className="px-7 py-4 relative flex justify-center items-center cursor-pointer bg-none text-left">
              <svg
                data-ref="primary-outline"
                className="abs-fill primary-outline absolute top-0 left-0 w-full h-full fill-none overflow-visible"
                viewBox="0 0 180.132 60.805"
              >
                <path
                  data-ref="primary-outline-path"
                  d="M180.13221740722656 48.30529022216797
              L167.63221740722656 60.80529022216797
              12.5 60.80529022216797
              L0 48.30529022216797
              L0 12.5
              L12.5 0
              L167.63221740722656 0
              L180.13221740722656 12.5 Z"
                ></path>
              </svg>
              <div className="font-medium text-black font-Basel_Grotesk">
                Discover More
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-text absolute right-12 bottom-8 text-[rgb(197,182,175)] text-[12px] uppercase font-medium">
          Speed-up <br />
          I2-1294abu9m0
        </div>
      </header>
    </>
  );
}
