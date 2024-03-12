import React from "react";
import OwnerCard from "./KeyData";
import img1 from "../asset/Darshit.jpg";
import img2 from "../asset/person.jpg";
import Footer from "./Footer";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px; /* Reduced the gap between cards */
  margin-bottom: 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

export const KeyPersons = () => {
  const o1 = {
    name: "Mr. DARSHIT",
    image: img1,
    designation: "Founder & CEO",
    bio: " Mr. Darshit is an experienced international businessman with over 5 years in global trade. He possesses a deep understanding of multiple markets and strives to lead with visionary solutions. His products prioritize health and sustainability for all",
    fbLink: "https://www.google.com",
    instaLink: "#",
    linkedInLink: "#",
    waLink: "#",
  };

  const owner2 = {
    name: "MR.DEV",
    image: img2,
    designation: "Co-founder & CTO",
    bio: "Mr. Dev, a computer engineer by education, is a seasoned consultant with a keen interest in global business. Specializing in digital platforms, he offers expertise in digital marketing, advertising, and strategic digital tool utilization.",
    fbLink: "#",
    instaLink: "#",
    linkedInLink: "#",
    waLink: "#",
  };

  return (
    <Container>
      <CardsContainer>
        <ProfileCard data={o1} />
        <ProfileCard data={owner2} />
      </CardsContainer>
      <Footer in={"in"} />
    </Container>
  );
};

export default KeyPersons;
