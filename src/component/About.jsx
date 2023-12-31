import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/damodarr.png";

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
  max-width: 400px; /* Adjust the max-width as needed */
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque velit sit amet arcu cursus, vel tincidunt magna
          scelerisque. Duis maximus justo vitae odio lacinia, id vulputate erat
          venenatis. Suspendisse potenti. Integer nec luctus purus. Nunc nec
          ligula eu nisi malesuada consectetur.
        </Description>
      </div>
    </AboutContainer>
  );
};

export default AboutUs;
