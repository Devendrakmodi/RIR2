import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./PhotoSlider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const PhotoSlider = () => {
  const carCardDetails = [
    {
      carImg:
        "https://di-uploads-pod25.dealerinspire.com/koenigseggflorida/uploads/2021/11/Koenigsegg_Gemera_3200x2000-scaled.jpeg",
      modalName: "Koenigsegg Gemera",
      modalColor: "#f59302e6",
      topSpeed: "400",
      power: "800",
      mileage: "13.16",
      torque: "600",
      engineCC: "1988.25",
      fuelTank: "75",
      storyPara: `Ultimate performance has belonged to the world of
                    two-seaters with very limited luggage space - until now. The
                    Gemera is the world's first Mega-GT and Koenigsegg's first
                    four-seater. Extreme megacar meets spacious interior and
                    ultimate environmental consciousness.`,
    },
    {
      carImg:
        "https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-03/_DSC2893.jpg?h=c1b49d9b&itok=7Mq2VVyQ",
      modalName: "Koenigsegg Agera RS",
      modalColor: "#e20001cc",
      topSpeed: "447",
      power: "1176",
      mileage: "5.95",
      torque: "1280",
      engineCC: "5000",
      fuelTank: "82",
      storyPara: `The Agera RS is the ultimate in road and track versatility. It
      offers extreme performance and is fully road-legal,
      complying with safety standards, emissions and
      homologation requirements worldwide. It uses advanced
      technology developed during our Koenigsegg One:1
      program while maintaining all the functionality of previous S
      and R models.`,
    },
    {
      carImg:
        "https://news.dupontregistry.com/wp-content/uploads/2023/10/Koenigsegg-1.jpg",
      modalName: "Koenigsegg Regera",
      modalColor: "#0095c8cc",
      topSpeed: "400",
      power: "1500",
      mileage: "6.5",
      torque: "2000",
      engineCC: "5000",
      fuelTank: "82",
      storyPara: `The Regera was specifically designed to be a luxury
      megacar alternative to Koenigsegg's traditional extreme,
      lightweight, race-like road-legal cars. It combines a
      powerful twin-turbo V8 combustion engine with three
      electric motors and cutting-edge battery power via new
      powertrain technology called the Koenigsegg Direct Drive.`,
    },
    {
      carImg:
        "https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/autox720/azure/2022-04/Pre-series%20Jesko%201.jpg?itok=IlUJvQkV",
      modalName: "Koenigsegg Jesko",
      modalColor: "#fb5e1bcc",
      topSpeed: "480",
      power: "1,600",
      mileage: "5.1",
      torque: "1,500",
      engineCC: "5000",
      fuelTank: "70",
      storyPara: `Ultimate performance has belonged to the world of
                    two-seaters with very limited luggage space - until now. The
                    Gemera is the world's first Mega-GT and Koenigsegg's first
                    four-seater. Extreme megacar meets spacious interior and
                    ultimate environmental consciousness.`,
    },
  ];
  return (
    <>
      <Swiper
        // cssMode={true}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        // grabCursor={false}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper PhotoSlider w-full h-full swiper-container"
      >
        {carCardDetails.map((carCard, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex justify-center items-center"
          >
            <div
              key={index}
              className="car-card-container w-full h-fit flex justify-center items-center px-10 py-20"
            >
              <div className="w-[600px] h-[400px] bg-[#ffffff33] backdrop-blur-[2px] p-2 border border-[#cc9d9a33] overflow-hidden mx-10">
                <div className="w-full h-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src={carCard.carImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[550px] bg-[#cc9d9a19] backdrop-blur-[12px] border-2 border-[#c5b6af33] rounded-md mx-10 flex justify-between gap-5 flex-col px-5 py-8 font-Basel_Grotesk">
                <div className="car-modal flex items-center mb-3 text-3xl font-semibold font-Gustavo">
                  <span
                    className="inline-block mr-1 uppercase"
                    style={{ color: carCard.modalColor }}
                  >
                    Modal -
                  </span>
                  <div className="inline">&nbsp; {carCard.modalName}</div>
                </div>
                <div className="car-details grid grid-cols-2 grid-row-3 gap-3">
                  <div className="car-speed flex items-center text-base">
                    <span className="inline-block mr-1 text-[#959595] uppercase font-semibold">
                      Top-Speed :
                    </span>
                    <div className="inline-block">{carCard.topSpeed} km/h</div>
                  </div>
                  <div className="car-hp flex items-center text-base">
                    <span className="inline-block mr-1 text-[#959595] uppercase font-semibold">
                      Power :
                    </span>
                    <div className="inline-block">{carCard.power} HP</div>
                  </div>
                  <div className="car-mileage flex items-center text-base">
                    <span className="inline-block mr-1 text-[#959595] uppercase font-semibold">
                      Mileage :
                    </span>
                    <div className="inline-block">{carCard.mileage} km/l</div>
                  </div>
                  <div className="car-torque flex items-center text-base">
                    <span className="inline-block mr-1 text-[#959595] uppercase font-semibold">
                      Torque :
                    </span>
                    <div className="inline-block">{carCard.torque} Nm</div>
                  </div>
                  <div className="car-cc flex items-center text-base">
                    <span className="inline-block mr-1 text-[#959595] uppercase font-semibold">
                      Engine CC :
                    </span>
                    <div className="inline-block">{carCard.engineCC}</div>
                  </div>
                  <div className="car-fuel flex items-center text-base">
                    <span className="inline-block mr-1 text-[#959595] uppercase font-semibold">
                      Fuel Tank :
                    </span>
                    <div className="inline-block">{carCard.fuelTank} litre</div>
                  </div>
                </div>
                <div className="car-story flex flex-col text-base mt-2 pt-3 text-center border-t-2 border-[#c5b6af33]">
                  <span className="inline-block mr-2 mb-2 text-[#959595] uppercase font-semibold">
                    more info
                  </span>
                  <p className="inline word-breaks leading-[1.75]">
                    {carCard.storyPara}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PhotoSlider;
