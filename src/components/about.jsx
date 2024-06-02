import React, { useEffect, useState } from "react";
import about from "../asset/about.jpg";
import JsonData from "../data/data.json";
import { Link } from "react-router-dom";
import { Features } from "./features";

export const About = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const fdata = landingPageData.Features;

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src={about}
              style={{ borderRadius: "10px", objectFit: "cover" }}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className=" ">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
              <button type="submit" className="btn btn-custom btn-lg rounded">
                <Link style={{ color: "#f5f5f5" }} to="/company">
                  View More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Features data={fdata} showTitle={true} fromHome={true} />
    </div>
  );
};
