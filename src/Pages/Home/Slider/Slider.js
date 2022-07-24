import React from "react";
import banner from "../../../images/dinosaur.jpeg";
import "./Slider.css";
const Slider = () => {
  return (
    <header>
      <div class="owl-carousel owl-theme">
        <div class="item">
          <img src={banner} alt="images  found" />
          <div class="cover">
            <div class="container">
              <div class="header-content">
                <div class="line animated bounceInLeft"></div>
                <h2>A Moments of Play</h2>
                <h1>ToyoKid</h1>
                <h4>Feel the Wonder of Toys, Your Toy, Your Passion</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Slider;
