import { useEffect, useRef } from "react";

const Center = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const c = canvas.getContext("2d");
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const mouse = { x: undefined, y: undefined };
    const maxradius = 40;
    const minradius = 2;
    const colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];

    container.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX - container.getBoundingClientRect().left;
      mouse.y = event.clientY - container.getBoundingClientRect().top;
      console.log(mouse)
    });
    container.addEventListener("mouseleave", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });
    addEventListener("resize", () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
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
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxradius) {
            this.radius += 1;
            console.log(this.radius);
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
    <div ref={containerRef} className="absolute inset-0 ">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default Center;
