// import PropTypes from 'prop-types'
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component{
  render() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        style={{ padding: "0px", zIndex: "99", marginBottom: "70px" }}
      >
        <div className="container-fluid bg-dark position-fixed top-0 ">
          <Link
            className="navbar-brand"
            style={{ color: "white", height: "50px" }}
            to="/"
          >
            NewsWindow
          </Link>
          <button
            className="navbar-toggler"
            style={{ backgroundColor: "white" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  style={{ color: "white" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
  }
};

export default NavBar;
