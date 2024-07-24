import React, { useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    let c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: innerWidth,
      y: innerHeight,
    };

    const color = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];
    const gravity = 1;
    const friction = 0.99;

    const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomColor = (colors) => colors[Math.floor(Math.random() * colors.length)];

    function Ball(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;

      this.update = function () {
        if (this.y + this.radius + this.dy > canvas.height) {
          this.dy = -this.dy * friction;
        } else {
          this.dy += gravity;
        }

        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      };

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
      };
    }

    let gravityArray = [];

    const init = () => {
      gravityArray = [];
      for (let i = 0; i < 200; i++) {
        const radius = randomIntFromRange(8, 20);
        const x = randomIntFromRange(0, canvas.width - radius);
        const y = randomIntFromRange(0, canvas.height - radius);
        const dx = randomIntFromRange(-2, 2);
        const dy = randomIntFromRange(-2, 2);
        const colors = randomColor(color);
        gravityArray.push(new Ball(x, y, dx, 2, radius, colors));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      gravityArray.forEach((ball) => ball.update());
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    addEventListener("resize", handleResize);
    addEventListener("click", init);

    init();
    animate();
  }, []);

  return (
    <>
      
      <section className="relative h-screen w-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
        <div className="first-1 flex justify-evenly items-center relative h-full w-full z-10">
          <div className="part-1 text-xl font-bold">
            <h2 className="w-fit mb-2 border-b-2">Quick Links</h2>
            <h2>Home</h2>
            <h2>Koenigsegg in your country</h2>
            <h2>Koenigsegg Group Careers</h2>
            <h2>EU Detergents Regulation</h2>
            <h2>REACH Regulation</h2>
            <h2>Compatibility Check</h2>
            <h2>Accessories Update</h2>
            <h2>Software Update</h2>
          </div>
          <div className="part-2 text-xl font-bold">
            <h2 className="w-fit mb-2 border-b-2">Quick Links</h2>
            <h2>Home</h2>
            <h2>BMW in your country</h2>
            <h2>BMW Group Careers</h2>
            <h2>EU Detergents Regulation</h2>
            <h2>REACH Regulation</h2>
            <h2>Compatibility Check</h2>
            <h2>Accessories Update</h2>
            <h2>Software Update</h2>
          </div>
          <div className="part-3 text-xl font-bold">
            <h2 className="w-fit mb-2 border-b-2">Quick Links</h2>
            <h2>Home</h2>
            <h2>BMW in your country</h2>
            <h2>BMW Group Careers</h2>
            <h2>EU Detergents Regulation</h2>
            <h2>REACH Regulation</h2>
            <h2>Compatibility Check</h2>
            <h2>Accessories Update</h2>
            <h2>Software Update</h2>
          </div>
          <div className="part-4 absolute bottom-20">
            <h1 className="text-2xl font-bold">Join the conversation</h1>
            <div className="icons flex justify-between items-center">
              <i className="ri-facebook-circle-fill text-3xl cursor-pointer"></i>
              <i className="ri-instagram-line text-3xl cursor-pointer"></i>
              <i className="ri-twitter-x-fill text-3xl cursor-pointer"></i>
              <i className="ri-youtube-fill text-3xl cursor-pointer"></i>
              <i className="ri-linkedin-fill text-3xl cursor-pointer"></i>
            </div>
          </div>
          <button className="pt-2 pb-2 pl-5 pr-5 border rounded-xl absolute top-5 right-2 font-bold text-xl">Click Here!</button>
        </div>
      </section>
    </>
  );
};

export default Footer;
