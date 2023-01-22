import React from "react";
import { Link } from "react-router-dom";
import "./test2.css";
const Test2 = () => {
  return (
    <section id="blog" className="fresh-news section-padding">
      <div>
        <div className="text-center">
          <h2
            className="fw-bolder display w-100 mt-5"
            style={{ color: "#181D4E" }}
          >
            Latest News
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_blog">
              <div className="blog_img">
                <Link to="/">
                  <img
                    src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post7-copyright.jpg"
                    width="500"
                    height="500"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="blog_content">
                <h3>
                  <Link to="/" style={{ color: "#181D4E" }}>
                    {" "}
                    What a baby do in the first 3 months?
                  </Link>
                </h3>
                <p>
                  Playing with real scrambled eggs or a bowl of spaghetti may
                  not B. the best idea, but when it comes to toy food.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_blog">
              <div className="blog_img">
                <Link to="/">
                  <img
                    src="https://media.istockphoto.com/photos/box-of-toys-on-the-floor-teddy-bear-in-boxvintage-tone-charitable-picture-id1017309510?k=20&m=1017309510&s=612x612&w=0&h=hlrEqEYcyrYjEqlkmJhugTepGVtzjkGohyPdnD5uK3o="
                    width="500"
                    height="500"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="blog_content">
                <h3>
                  <Link to="/" style={{ color: "#181D4E" }}>
                    Mommies’ blogs you should be reading
                  </Link>
                </h3>
                <p>
                  Improved Cognitive Abilities. Traditional toys offer an
                  opportunity to stimulate cognitive development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_blog">
              <div className="blog_img">
                <Link to="/" style={{ color: "#181D4E" }}>
                  <img
                    src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post5-copyright.jpg"
                    alt="image"
                    width="500"
                    height="500"
                  />
                </Link>
              </div>
              <div className="blog_content">
                <h3>
                  <Link to="/" style={{ color: "#181D4E" }}>
                    Choosing right toys for newborn babies
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vitae risus nec dui venenatis dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test2;
