import React from "react";
import kid from "../../../images/playing.jpg";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="how-section1">
      <div className="row">
        <div className="col-md-6">
          <h4 style={{ color: "#181D4E" }}>
            Children happier with the best toys
          </h4>
          <h2 className="test-info">We provide & offer premium service</h2>
          <p className="text-muted">
            Our area of practice is quite wide: toy production, custom-made toys
            for every age, toy brand promotion, playrooms design with equipment,
            and of course kids camps and events! Contact us today and get a free
            consultation on any product we offer. Join our community for
            updates.
          </p>
        </div>
        <div className="col-md-6 how-img">
          <img src={kid} className="rounded-circle img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
