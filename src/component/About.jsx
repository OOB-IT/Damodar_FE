import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #fff;
  padding: 50px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #555;
  font-size: 1.2em;
`;

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <Title>About Us</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque velit sit amet arcu cursus, vel tincidunt magna scelerisque.
        Duis maximus justo vitae odio lacinia, id vulputate erat venenatis.
        Suspendisse potenti. Integer nec luctus purus. Nunc nec ligula eu nisi
        malesuada consectetur. Proin convallis justo eget sapien ultrices, id
        tincidunt libero malesuada. Donec nec arcu sed leo consectetur volutpat.
        Sed bibendum elit eu elit cursus, sit amet tincidunt elit sagittis. Sed
        aliquam, metus non venenatis fermentum, est quam dignissim felis, at
        sagittis nisl est et orci. Integer fringilla fermentum turpis ut
        fringilla.
      </Description>
    </AboutContainer>
  );
};

export default AboutUs;
