import React from "react";
import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="box">
      <h1 className=" fw-bolder w-100 mt-5 text-center underline mt-2">
        Our Services
      </h1>
      <div>
        <div className="row text-black">
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            data-aos="zoom-in-right"
          >
            <div className="box-part text-center">
              {" "}
              <i
                className="fas fa-shipping-fast fs-1 text-black"
                aria-hidden="true"
              ></i>
              <div className="title">
                <h3>WorldWide Shipping</h3>
              </div>
              <div className="text">
                {" "}
                <span>on order over $99</span>{" "}
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            data-aos="zoom-in-right"
          >
            <div className="box-part text-center">
              {" "}
              <i
                className="fas fa-headset fs-1 text-black"
                aria-hidden="true"
              ></i>
              <div className="title">
                <h3>24 X 7 Free Support</h3>
              </div>
              <div className="text">
                {" "}
                <span>Online Support</span>{" "}
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            data-aos="zoom-in"
          >
            <div className="box-part text-center">
              {" "}
              <i className="fas fa-hand-holding-usd fs-1 text-black"></i>
              <div className="title">
                <h3>Money Back Gurantee</h3>
              </div>
              <div className="text">
                {" "}
                <span>100% Secure Payment</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
