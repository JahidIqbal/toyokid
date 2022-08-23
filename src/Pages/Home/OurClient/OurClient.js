import React from "react";
import { Link } from "react-router-dom";
import "./OurClient.css";
const OurClient = () => {
  return (
    <section class="logo-list">
      <h2 className="fw-bolder display w-100 mt-2" style={{ color: "#181D4E" }}>
        Meet our top clients & partners
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6">
            <Link to="/">
              <img
                src="https://i.pinimg.com/736x/8b/13/84/8b13848fb29edba2274959cb1d1e99c9--toy-house-kids-logo.jpg"
                className="img-fluid"
                alt="Toys House"
              />
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Link to="/">
              <img
                src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164014/1338.png"
                className="img-fluid"
                alt="Little Elephant"
              />
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Link to="/">
              <img
                src="https://cdn.dribbble.com/users/1700393/screenshots/14456757/media/13060d4fcb0014c716b78743d405c04d.png?compress=1&resize=400x300"
                className="img-fluid"
                alt="Castle toys"
              />
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Link to="/">
              <img
                src="https://thumbs.dreamstime.com/b/baby-shop-toy-shop-baby-product-logo-design-kids-baby-shop-toy-shop-baby-product-logo-graphics-come-file-types-220459719.jpg"
                className="img-fluid"
                alt="Baby toys"
              />
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Link to="/">
              <img
                src="https://cdn.dribbble.com/users/1700393/screenshots/14210857/media/53dda477de8b0c57b3abd5d144e89312.png?compress=1&resize=400x300"
                className="img-fluid"
                alt="Findus toys"
              />
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Link to="/">
              <img
                src="https://thumbs.dreamstime.com/b/design-kids-baby-shop-toy-shop-baby-product-logo-graphics-come-file-types-very-easy-to-apply-any-software-220459916.jpg"
                className="img-fluid"
                alt="Baby toys"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
