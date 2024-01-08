import React from "react";
import styled from "styled-components";
import logo from "../assets/damodarr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; /* Center items vertically */

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  flex: 2;
`;

const Logo = styled.img`
  width: 200px;
  margin: 0 auto; /* Center the image horizontally */
`;

const SiteMapSection = styled.div`
  display: flex; /* Use flexbox to make children side by side */
  flex: 2;
  flex-direction: column; /* Arrange children vertically on small screens */

  @media (min-width: 768px) {
    flex-direction: row; /* Arrange children horizontally on larger screens */
  }
`;

const SitemapContainer = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 0; /* Remove spacing between title and list on larger screens */
  }
`;

const SitemapTitle = styled.h5`
  margin-bottom: 10px;
`;

const SitemapList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SitemapItem = styled.li`
  margin-bottom: 8px;
  color: white !important;
`;

const ContactSection = styled.div`
  flex: 1;
  margin-top: -60px;

  @media (max-width: 767px) {
    margin-top: 20px; /* Add some spacing at the top */
  }
`;

const ContactTitle = styled.h4`
  margin-bottom: 10px;
`;

const ContactEmail = styled.p`
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 767px) {
    align-items: center; /* Apply these styles only for screens smaller than 768px */
    justify-content: center;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none; /* Remove underline */
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Logo src={logo} alt="Company Logo" />
        </LogoSection>
        <SiteMapSection>
          <SitemapContainer>
            <SitemapTitle>Quick Links</SitemapTitle>
            <SitemapList>
              <SitemapItem>
                <StyledLink href="#">> Home</StyledLink>
              </SitemapItem>
              <SitemapItem>
                <StyledLink href="#">> About Us</StyledLink>
              </SitemapItem>
              <SitemapItem>
                <StyledLink href="#">> Services</StyledLink>
              </SitemapItem>
              <SitemapItem>
                <StyledLink href="#">> Contact</StyledLink>
              </SitemapItem>
            </SitemapList>
          </SitemapContainer>

          <SitemapContainer>
            <SitemapTitle>Products Links</SitemapTitle>
            <SitemapList>
              <SitemapItem>
                <StyledLink href="#">> Food products</StyledLink>
              </SitemapItem>
              <SitemapItem>
                <StyledLink href="#">> Handicraft</StyledLink>
              </SitemapItem>
            </SitemapList>
          </SitemapContainer>
        </SiteMapSection>
        <ContactSection>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactEmail>Email: conatact@damodarr.com</ContactEmail>
          <SocialIcons>
            <StyledLink href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </StyledLink>
            <StyledLink href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </StyledLink>
            <StyledLink href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </StyledLink>
            <StyledLink href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </StyledLink>
          </SocialIcons>
        </ContactSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
