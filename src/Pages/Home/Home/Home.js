import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Aboutus from "../Aboutus/Aboutus";
import OurClient from "../OurClient/OurClient";
import OurServices from "../OurServices/OurServices";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <OurServices />
      <Aboutus />
      <OurClient />
      <Footer />
    </div>
  );
};

export default Home;
