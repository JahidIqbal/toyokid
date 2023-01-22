import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
        <div
          className="container-fluid"
          style={{ backgroundColor: " #3a7bd5" }}
        >
          <NavLink to="/" className="navbar-brand h5 text-white">
            Toyokid <i className="fas fa-democrat"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link text-white">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/explore" className="nav-link text-white">
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link text-white">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link text-white">
                  <button type="button" className="btn btn-sm btn-light">
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
