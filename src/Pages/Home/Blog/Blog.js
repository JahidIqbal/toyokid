import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="mt-4">
      <section id="blog">
        <div className="row">
          <div className=" text-center">
            <h2
              className="fw-bolder display w-100 mt-5"
              style={{ color: "#181D4E" }}
            >
              Latest Blog Posts
            </h2>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            data-aos="zoom-in"
          >
            <div
              className="blog column text-center "
              style={{ backgroundColor: "#181D4E", color: "white" }}
            >
              <img
                src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post7-copyright.jpg"
                className="card-img-top"
                width="500"
                height="500"
                alt=""
              />
              <h4 className="text">
                What does a baby do in the first 3 months?
              </h4>
              <p className="font-italic">
                Playing with real scrambled eggs or a bowl of spaghetti may not
                B. the best idea, but when it comes to toy food, we say: play
                the days.
              </p>
              <Link
                className="text-decoration-none text-white   fw-bolder"
                to="/"
              >
                Read More <i className="fab fa-readme"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            data-aos="zoom-in"
          >
            <div
              className="blog column text-center "
              style={{ backgroundColor: "#181D4E", color: "white" }}
            >
              <img
                src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post4-copyright-1536x1025.jpg"
                className="card-img-top"
                width="500"
                height="500"
                alt=""
              />
              <h4 className="text">Mommies’ blogs you should be reading</h4>
              <p className="font-italic">
                Improved Cognitive Abilities. Traditional toys offer an
                opportunity to stimulate cognitive development.
              </p>
              <Link
                className="text-decoration-none text-white   fw-bolder"
                to="/"
              >
                Read More <i className="fab fa-readme"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            data-aos="zoom-in"
          >
            <div
              className="blog column text-center"
              style={{ backgroundColor: "#181D4E", color: "white" }}
            >
              <img
                src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post5-copyright.jpg"
                width="500"
                height="500"
                alt=""
              />
              <h4 className="text">
                Choosing the right toys for newborn babies
              </h4>
              <p className=" font-italic">
                Educational toys (sometimes also called "instructive toys") are
                objects of play, generally designed for children.
              </p>
              <Link
                className="text-decoration-none text-white  fw-bolder"
                to="/"
              >
                Read More <i className="fab fa-readme"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
