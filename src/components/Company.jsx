import React, { useEffect, useState } from "react";
import JsonData from "../data/data.json";
import styled from "styled-components";
import { Features } from "./features";
import foto from '../asset/company.jpg'

const AboutText = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 50px 20px 5px 20px;
  margin-bottom: 50px;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  z-index:99999;
  ${'' /* border-radius: 0 0 10px 10px; */}
`;

const ResponsiveImage = styled.img`
  width: 100%;
  max-height: 80vh;
  object-fit: cover;
  z-index:9999;
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
        <section id="company" className="portfolio company">
          <AboutText>
            <div className="about-text">
              <p>{data ? data.paragraph1 + data.paragraph2 : "loading..."}</p>
              <p>{data ? data.paragraph3 + data.paragraph4 : "loading..."}</p>
            </div>
          </AboutText>

          <ImageContainer id="imageContainer">
            {/* <ResponsiveImage src="https://images.unsplash.com/photo-1634646809203-f3b4adff9127?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Damodarr Global Ventures LLP" /> */}
            <ResponsiveImage src={foto} alt="Damodarr Global Ventures LLP" />
          </ImageContainer>

          <Features data={fdata} showTitle={true} />
        </section>
      </div>
    </div>
  );
};

export default Company;
