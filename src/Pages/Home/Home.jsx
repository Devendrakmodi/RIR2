import React from "react";
import "./Home.css";
import PhotoSlider from "../../Components/PhotoSlider";

const Home = () => {
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-full">
          <PhotoSlider />
        </div>
      </section>
    </>
  );
};

export default Home;
