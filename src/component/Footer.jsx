import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SiteMap = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  & > a {
    margin-right: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SiteMap>
          <h3>Site Map</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </SiteMap>
        <SocialIcons>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="path-to-your-facebook-icon" alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="path-to-your-twitter-icon" alt="Twitter" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="path-to-your-instagram-icon" alt="Instagram" />
          </a>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
