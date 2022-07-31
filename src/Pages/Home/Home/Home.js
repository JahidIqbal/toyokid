import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import OurServices from "../OurServices/OurServices";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
