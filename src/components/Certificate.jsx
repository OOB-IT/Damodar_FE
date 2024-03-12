import ImageCarousel from "./ImageCarousel";
import React from "react";

const MembershipCertification = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Licence & Certificates</h2>
          <p>
            View our licensing terms for the use of our products and services.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCertification;
