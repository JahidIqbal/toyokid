import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="mt-4">
      <section id="blog">
        <div className="row">
          <div className=" text-center">
            <h1 className=" fw-bolder display-3 w-100 "> Latest Blog Posts </h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            data-aos="zoom-in"
          >
            <div className="blog column text-center ">
              <img
                src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post7-copyright.jpg"
                alt=""
                width="100%"
              />
              <h4 className="text">
                What does a baby do in the first 3 months?
              </h4>
              <p className="font-italic">
                Watches are highly desirable fashion accessories and utilities
                and are treated as essential wardrobe items as well.
              </p>
              <Link
                className="text-decoration-none text-dark   fw-bolder"
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
            <div className="blog column text-center ">
              <img
                src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post7-copyright.jpg"
                alt=""
                width="100%"
              />
              <h4 className="text">Mommies’ blogs you should be reading</h4>
              <p className="font-italic">
                Watches are highly desirable fashion accessories and utilities
                and are treated as essential wardrobe items as well.
              </p>
              <Link
                className="text-decoration-none text-dark   fw-bolder"
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
            <div className="blog column text-center">
              <img
                src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post5-copyright.jpg"
                alt=""
                width="100%"
              />
              <h4 className="text">
                Choosing the right toys for newborn babies
              </h4>
              <p className=" font-italic">
                Our judgments, like our watches, none go just alike, yet each
                believes his own.
              </p>
              <Link
                className="text-decoration-none text-dark  fw-bolder"
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
