import React, { useEffect, useState } from "react";
import JsonData from "../data/data.json";
import styled from "styled-components";
import { Features } from "./features";
const AboutText = styled.div`
  background-color: rgba(255, 255, 255, 0.5); /* White with 70% opacity */
  border-radius: 10px;
`;
const Company = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const data = landingPageData.About;
  const fdata = landingPageData.Features;
  return (
    <div
      style={{
        padding: "150px 0 0 0",
        textAlign: "center",
      }}
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Company</h2>
          <p>Explore our organization's history and mission.</p>
        </div>
        <section id="company" class="portfolio">
          <AboutText>
            <div className="about-text">
              <p>{data ? data.paragraph1 + data.paragraph2 : "loading..."}</p>
              <p>{data ? data.paragraph3 + data.paragraph4 : "loading..."}</p>
            </div>
          </AboutText>
          <Features data={fdata} />
        </section>
      </div>
    </div>
  );
};

export default Company;
