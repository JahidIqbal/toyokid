import React from "react";
import "./Toy.css";
const Toy = (props) => {
  const { name, image, description, regularprice, discountprice, discount } =
    props.toy;
  return (
    <div>
      <div className="col">
        <div className="card h-100 shadow-lg">
          <img
            src={image}
            className="card-img-top"
            width="500"
            height="500"
            alt=""
          />
          <div className="card-body">
            <span className="discount">{discount}</span>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="text-nowrap">
              <p
                className=" small text-dark fw-bolder"
                style={{ color: "#646672" }}
              >
                <s style={{ color: "#646672" }}>{regularprice}</s>
                <p className="fw-bolder">{discountprice}</p>
              </p>
            </p>
            <button
              className="btn btn-info text-white"
              width="25"
              style={{ color: "#12AEE0" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
