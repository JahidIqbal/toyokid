import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Aboutus from "../Aboutus/Aboutus";
import Blog from "../Blog/Blog";
import OurClient from "../OurClient/OurClient";
import OurServices from "../OurServices/OurServices";
import Slider from "../Slider/Slider";
import Toys from "../Toys/Toys";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <OurServices />
      <Toys />
      <Aboutus />
      <OurClient />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
