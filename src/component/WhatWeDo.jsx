import React from "react";
import styled, { keyframes } from "styled-components";

const Heading = styled.h4`
  font-size: 2em;
  margin-bottom: 30px;
  position: relative;

  &:after {
    content: " >>>>";
    display: inline-block;
    color: white; /* Arrow color */
    position: absolute;
    top: 30px;
    right: 0px;
  }

  @media (max-width: 767px) {
    &:after {
      display: none; /* Hide the arrow in mobile view */
    }
  }
`;

const ServicesContainer = styled.div`
  background-color: #333; /* Dark background color */
  color: #fff; /* Light text color */
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const ServiceBoxHoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ServiceBox = styled.div`
  width: calc(100% - 20px); /* Full width on small screens */
  max-width: 400px; /* Adjust the max-width as needed */
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${ServiceBoxHoverAnimation} 1s forwards; /* Adjust animation duration as needed */
  }

  @media (min-width: 768px) {
    width: calc(25% - 20px); /* Adjust the width for larger screens */
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1em;
`;

const WhatWeDo = () => {
  return (
    <ServicesContainer id="services">
      <Heading>What We Do </Heading>

      <ServiceBox>
        <Title>Export</Title>
        <Description>
          We are exporting the best quality products around the world. If you
          need the best product on time, you are at the right place @ Damodarr
          Export Import.
        </Description>
      </ServiceBox>
      <ServiceBox>
        <Title>Import Agent</Title>
        <Description>
          (For foreign clients) We help foreign companies introduce their best
          quality products in India and assist them in finding local partners.
        </Description>
      </ServiceBox>
      <ServiceBox>
        <Title>Sourcing Agent</Title>
        <Description>
          We work as local partners for our foreign clients to source the best
          quality products from India according to client requirements.
        </Description>
      </ServiceBox>
    </ServicesContainer>
  );
};

export default WhatWeDo;
