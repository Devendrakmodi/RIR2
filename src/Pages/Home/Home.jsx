import React from "react";
import "./Home.css";
import PhotoSlider from "../../Components/PhotoSlider";
import Scrolll from "../../Components/Scrolll";
import Footer from "../../Components/Footer";
import Parts from "../../Components/Parts";

const Home = () => {
  return (
    <>
      <section className="w-full h-full">
          <PhotoSlider />
          <Scrolll />
          <Parts />
          <Footer />
      </section>
    </>
  );
};

export default Home;
