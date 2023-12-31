import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleArrows,
  faUserGroup,
  faAward,
  faBusinessTime,
  faHandHoldingDollar,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

const ChooseUsContainer = styled.div`
  background-color: #fff; /* White background color */
  padding: 50px;
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 2em;
  margin-bottom: 30px;
`;

const ChooseUsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ChooseUsBox = styled.div`
  width: calc(100% - 20px); /* Full width on small screens */
  max-width: 400px; /* Adjust the max-width as needed */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  background-color: #f8f8f8; /* Light background color */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: calc(33.33% - 20px); /* Adjust the width for larger screens */
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
`;

const Icon = styled.img`
  width: 40px; /* Adjust the width of the SVG icon */
  height: 40px; /* Adjust the height of the SVG icon */
  margin-bottom: 10px;
`;

const WhyChooseUs = () => {
  return (
    <ChooseUsContainer id="choose-us">
      <Heading>Why Choose Us</Heading>
      <ChooseUsGrid>
        <ChooseUsBox>
          <FontAwesomeIcon icon={faPeopleArrows} />
          <Title>We Build Relations</Title>
          <Description>
            Building strong and lasting relationships with our clients.
          </Description>
        </ChooseUsBox>
        <ChooseUsBox>
          <FontAwesomeIcon icon={faUserGroup} />
          <Title>Experience & Professional</Title>
          <Description>
            Experienced and professional team dedicated to your success.
          </Description>
        </ChooseUsBox>
        <ChooseUsBox>
          <FontAwesomeIcon icon={faAward} />
          <Title>High Quality Products</Title>
          <Description>
            Ensuring the delivery of high-quality products to meet your
            standards.
          </Description>
        </ChooseUsBox>
        <ChooseUsBox>
          <FontAwesomeIcon icon={faBusinessTime} />
          <Title>We Deliver On Time</Title>
          <Description>
            Commitment to delivering products on time, every time.
          </Description>
        </ChooseUsBox>
        <ChooseUsBox>
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          <Title>Price Benefits</Title>
          <Description>
            Providing cost-effective solutions for your business needs.
          </Description>
        </ChooseUsBox>
        <ChooseUsBox>
          <FontAwesomeIcon icon={faFaceSmile} />
          <Title>Complete Client Satisfaction</Title>
          <Description>
            Ensuring complete satisfaction and exceeding client expectations.
          </Description>
        </ChooseUsBox>
      </ChooseUsGrid>
    </ChooseUsContainer>
  );
};

export default WhyChooseUs;
