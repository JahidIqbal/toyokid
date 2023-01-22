import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Aboutus from "../Aboutus/Aboutus";
import Blog from "../Blog/Blog";
import OurClient from "../OurClient/OurClient";
import OurServices from "../OurServices/OurServices";
import Slider from "../Slider/Slider";
import Teammembers from "../Teammembers/Teammembers";
import Toys from "../Toys/Toys";
// import Test from "./Test/Test";
// import Test2 from "./Test/Test2";

const Home = () => {
  return (
    <div>
      <Slider />
      <OurServices />
      <Toys />
      <Aboutus />
      <OurClient />
      <Blog />
      <Teammembers />
    </div>
  );
};

export default Home;
