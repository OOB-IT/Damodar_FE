import React, { useEffect, useState } from "react";
import about from "../asset/about.jpg";
import JsonData from "../data/data.json";
import { Link } from "react-router-dom";
import { Features } from "./features";

export const About = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  const [sectionDetails, setSectionDetails] = useState(null);
  const fetchSectionDetails = async () => {
    try {
      const response = await fetch(
        "https://api.damodarr.com/api/getSectionDetails/1"
      );
      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data.data);
        setSectionDetails(data?.data);
      } else {
        console.error("Error fetching section details:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching section details:", error);
    }
  };
  useEffect(() => {
    setLandingPageData(JsonData);
    fetchSectionDetails();
  }, []);
  const fdata = landingPageData.Features;

  // Convert \r\n\r\n to <br /><br />
  const formatSectionDesc = (text) => {
    console.log("////", text);
    if (!text) return "";
    return text.replace(/\n/g, "<br />");
  };

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
              <p
                dangerouslySetInnerHTML={{
                  __html: props.data
                    ? formatSectionDesc(sectionDetails?.sectionDesc)
                    : "laoding....",
                }}
              ></p>
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
