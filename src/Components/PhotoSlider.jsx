import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./PhotoSlider.css";

gsap.registerPlugin(ScrollTrigger);

const PhotoSlider = () => {
  const photoSliderRef = useRef(null);
  const photoSilderConRef = useRef(null);
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(photoSilderConRef.current, {
        x: "-300vw",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: photoSliderRef.current,
          scroller: "body",
          pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + photoSliderRef.current.offsetWidth * 2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const mouse = { x: undefined, y: undefined };
    const maxradius = 40;
    const minradius = 2;
    const colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    class Particle {
      constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minradius = radius;
        this.colors = colorArray[Math.floor(Math.random() * 4)];
      }
      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fillStyle = this.colors;
        c.fill();
      }
      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (
          mouse.x !== undefined &&
          mouse.y !== undefined &&
          mouse.x >= 0 &&
          mouse.x <= canvas.width &&
          mouse.y >= 0 &&
          mouse.y <= canvas.height &&
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxradius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minradius) {
          this.radius -= 1;
        }
        this.draw();
      }
    }

    let particles;
    function init() {
      particles = [];
      for (let i = 0; i < 600; i++) {
        const radius = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = Math.random() - 0.5;
        const dy = Math.random() - 0.5;
        particles.push(new Particle(x, y, radius, dx, dy));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    }

    init();
    animate();
  }, []);

  return (
    <div
      ref={photoSliderRef}
      className="photoslider w-full h-screen overflow-hidden relative pointer-events-[all]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        ref={photoSilderConRef}
        className="photoslider-container w-[400vw] h-full flex items-center relative"
      >
        {carCardDetails.map((carCard, index) => (
          <div
            key={index}
            className="car-card-container w-screen h-full flex justify-center items-center px-10 py-20 "
          >
            <div className="box1 w-[600px] h-[400px] bg-[#ffffff33] backdrop-blur-[2px]  border mx-10 p-2">
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-full object-center object-cover "
                  src={carCard.carImg}
                  alt=""
                />
              </div>
            </div>
            <div className="box2 h-[500px] w-[600px] bg-[#cc9d9a19] backdrop-blur-[12px] border rounded-md mx-10 flex justify-between gap-5 flex-col px-5 py-8 font-Basel_Grotesk">
              <div className="car-modal z-10 flex items-center mb-3 text-3xl font-semibold font-Gustavo">
                <span
                  className="inline-block mr-1 uppercase"
                  style={{ color: carCard.modalColor }}
                >
                  Modal -
                </span>
                <div className="inline z-10">&nbsp; {carCard.modalName}</div>
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
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
