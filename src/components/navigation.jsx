import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useViewType from "../utils/useViewType";

import logo from "../asset/logo.png";
import TitleBar from "./TitleBar";
import JsonData from "../data/data.json";
import { baseUrl } from "../utils/config";
import axios from "axios";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const viewType = useViewType();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (path) => {
    // navigate(path);
    closeNavbar();
  };

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggle");
    const navbarCollapse = document.querySelector(
      "#bs-example-navbar-collapse-1"
    );

    if (navbarToggler && navbarCollapse.classList.contains("in")) {
      navbarToggler.click();
    }
  };

  const [landingPageData, setLandingPageData] = useState([]);
  const localData = JsonData.ProductCategories;
  useEffect(() => {
    axios
      .get(`${baseUrl}/getProductCategories`)
      .then((response) => {
        if (response?.data) {
          setLandingPageData(response?.data);
        } else {
          setLandingPageData(localData);
        }
      })
      .catch((error) => {
        setLandingPageData(localData);
        console.error("Error :", error);
      });
  }, []);

  const categories = landingPageData;
  // console.log("landingPageData", landingPageData);
  // console.log("localData", localData);

  return (
    <>
      {location.pathname === "/" && viewType === "desktop" ? (
        <TitleBar />
      ) : null}
      <nav
        id="menu"
        style={{
          zIndex: "8",
          paddingTop:
            isScrolled && location.pathname === "/"
              ? "20px"
              : location.pathname === "/"
              ? "40px"
              : "20px",
        }}
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
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
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
                    maxWidth: "200px",
                  }}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" onClick={() => handleNavItemClick("")}>
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <a
                  // href="#"
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
                    <Link
                      to="/company"
                      onClick={() => handleNavItemClick("/company")}
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/certificate"
                      onClick={() => handleNavItemClick("/certificate")}
                    >
                      Certificate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-detail"
                      onClick={() => handleNavItemClick("/about-detail")}
                    >
                      Key Persons
                    </Link>
                  </li>
                </ul>
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
                  Products <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  {categories &&
                    categories.map((category) => (
                      <li key={category.productTypeId}>
                        <Link
                          to={category.productPageUrl}
                          onClick={() =>
                            handleNavItemClick(category.productPageUrl)
                          }
                        >
                          {category.productTypeTitle}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
              <li>
                <Link
                  to="/sourcing-agent"
                  onClick={() => handleNavItemClick("/sourcing-agent")}
                >
                  Sourcing Agent
                </Link>
              </li>
              {location.pathname === "/" && (
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
