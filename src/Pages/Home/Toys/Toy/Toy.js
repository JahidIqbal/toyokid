import React from "react";

const Toy = (props) => {
  const { name, image, description, price } = props.toy;
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
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <strong>Description</strong>
              {description}
            </p>
            <p className="text-nowrap">
              <strong>Price:</strong>
              {price}
            </p>
            <button className="btn btn-info" width="25">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
