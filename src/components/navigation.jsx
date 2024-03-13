import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useViewType from "../utils/useViewType";

import logo from "../asset/logo.png";
import TitleBar from "./TitleBar";

export const Navigation = () => {
  const navigate = useNavigate(); // useNavigate hook
  const location = useLocation();
  const viewType = useViewType();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Set state to true if scrolled
      } else {
        setIsScrolled(false); // Set state to false if at top of the page
      }
    };

    window.addEventListener("scroll", handleScroll); // Add event listener for scroll

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to close the navbar and navigate to the specified path
  const handleNavItemClick = (path) => {
    navigate(path); // Navigate to the specified path
    closeNavbar(); // Close the navbar after clicking a nav item
  };

  // Function to close the navbar
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggle");
    if (navbarToggler.classList.contains("collapsed")) return; // Navbar is already collapsed
    navbarToggler.click(); // Click to collapse the navbar
  };

  return (
    <>
      {location.pathname === "/" && viewType === "desktop" ? < TitleBar /> : " "}
      <nav
        id="menu"
        style={{ zIndex: "8", paddingTop: isScrolled && location.pathname === "/" ? "20px" : location.pathname === "/" ? "40px" : "20px" }} // Update paddingTop based on scroll state
        className="navbar navbar-default navbar-fixed-top"
      >
        <div className="container">
          <div className="navbar-header">
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
              <Link
                to="/"
                className="navbar-brand page-scroll"
                style={{
                  paddingTop: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  style={{
                    maxHeight: "50px",
                    maxWidth: "200px"
                  }}
                  alt="Logo"
                ></img>
              </Link>{" "}
            </div>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  to="/"
                  onClick={() => handleNavItemClick("/")} // Close navbar on click and navigate to '/'
                >
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/company">Company</Link>
                  </li>
                  <li>
                    <Link to="/certificate">Certificate</Link>
                  </li>
                  <li>
                    <Link
                      to="/about-detail"
                      onClick={() => handleNavItemClick("/about-detail")} // Close navbar on click and navigate to '/about-detail'
                    >
                      Key Persons
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/product-detail"
                  onClick={() => handleNavItemClick("/product-detail")} // Close navbar on click and navigate to '/product-detail'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/sourcing-agent"
                  onClick={() => handleNavItemClick("/sourcing-agent")} // Close navbar on click and navigate to '/sourcing-agent'
                >
                  Sourcing Agent
                </Link>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              {/* <li>
              <Link
                to='/contact'
                onClick={() => handleNavItemClick('/contact')} // Close navbar on click and navigate to '/contact'
              >
                Contact
              </Link>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
