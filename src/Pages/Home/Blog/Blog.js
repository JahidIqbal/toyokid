import React from "react";
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

        <div className="card-group">
          <div className="card">
            <img
              src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post7-copyright.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                What does a baby do in the first 3 months?
              </h5>
              <p className="card-text">
                Playing with real scrambled eggs or a bowl of spaghetti may not
                B. the best idea, but when it comes to toy food, we say: play
                the days.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted ">Last updated 10 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://kidsparadise.com.bd/wp-content/uploads/2022/08/Kids-Bop-Punch-Boxing-Bag-Toy.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Mommies’ blogs you should be reading
              </h5>
              <p className="card-text">
                Improved Cognitive Abilities. Traditional toys offer an
                opportunity to stimulate cognitive development.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 20 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post5-copyright.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Choosing the right toys for newborn babies
              </h5>
              <p className="card-text">
                Educational toys (sometimes also called "instructive toys") are
                objects of play, generally designed for children.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 25 mins ago</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
