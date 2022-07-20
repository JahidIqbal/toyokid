import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <header>
      <div class="owl-carousel owl-theme">
        <div class="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0072/5014/9447/files/Slider-1-1920x827.png?v=1647083577"
            alt="images not found"
          />
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
