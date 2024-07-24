import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollImage1 from "../assets/Images/scroll-image-1.jpg";
import ScrollImage2 from "../assets/Images/scroll-image-2.jpg";
import ScrollImage3 from "../assets/Images/scroll-image-3.jpeg";
import ScrollImage4 from "../assets/Images/scroll-image-4.png";
import ScrollImage5 from "../assets/Images/scroll-image-5.jpg";
import ScrollImage6 from "../assets/Images/scroll-image-6.jpg";
import ScrollImage7 from "../assets/Images/scroll-image-7.jpg";
import "./Scrolll.css"
gsap.registerPlugin(useGSAP);

const Scrolll = () => {
  const scrollContent = [
    {
      imgUrl: ScrollImage1,
      altText: "Koenigsegg Car",
      textContet: "High Performance",
    },
    {
      imgUrl: ScrollImage2,
      altText: "Koenigsegg Car",
      textContet: "Innovative Technology",
    },
    {
      imgUrl: ScrollImage3,
      altText: "Koenigsegg Car",
      textContet: "Exclusivity",
    },
    {
      imgUrl: ScrollImage4,
      altText: "Koenigsegg Car",
      textContet: "Environmental Considerations",
    },
    {
      imgUrl: ScrollImage5,
      altText: "Koenigsegg Car",
      textContet: "Lightweight construction",
    },
    {
      imgUrl: ScrollImage6,
      altText: "Koenigsegg Car",
      textContet: "Precision engineering",
    },
    {
      imgUrl: ScrollImage7,
      altText: "Koenigsegg Car",
      textContet: "Luxury craftsmanship",
    },
  ];

  return (
    <>
      <div className="relative wrapper min-h-screen w-full pt-32 overflow-hidden mt-1">
        {scrollContent.map((content, index) => (
          <div
            key={index}
            className="w-full text-gray-700 capitalize flex justify-around items-center group"
          >
            <div className="w-full h-full flex justify-center items-center relative background ">
              <div className="hidden pt-10 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] z-20 group-hover:block">
                <img
                  className="h-full w-full border-2 border-white rounded-[10px] object-cover object-center p-2"
                  src={content.imgUrl}
                  alt={content.altText}
                />
              </div>
            </div>
            <h2 className="w-full text-5xl my-1 font-bold transition-transform duration-500 ease-in-out group-hover:translate-x-[10%] group-hover:text-white font-Harewataru">
              {content.textContet}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Scrolll;
