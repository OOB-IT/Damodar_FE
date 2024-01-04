import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/about.jpeg";

const AboutContainer = styled.div`
  background-color: #fff;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Description = styled.p`
  color: #555;
  font-size: 1.2em;
  margin-top: 10px;
  text-align: left;
  max-width: 600px; /* Adjust the max-width as needed */
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const VerticalLine = styled.div`
  height: 500px;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #ccc, transparent);
  margin: 0 20px; /* Adjust the margin as needed */

  @media (max-width: 767px) {
    display: none;
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <ProductImage src={aboutImg} alt={""} />
      <VerticalLine />
      <div>
        <Title>About Us</Title>
        <Description>
          Founded on October 19, 2023, Damodarr Global Venture LLP is committed
          to a mission of global business excellence, placing utmost value on
          our customers. Our diverse range of high-quality products includes
          Warmi Compost Fertilizer, Natural Honey, Paper Packaging Products, A-2
          Pure Cow Ghee, and Cereal & Cereal Products. In addition to these
          offerings, we specialize in personalized product sourcing to meet
          individual customer requirements.
        </Description>
      </div>
    </AboutContainer>
  );
};

export default AboutUs;
