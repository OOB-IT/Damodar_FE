import React from "react";
import styled from "styled-components";
import WhatWeDo from "./WhatWeDo";

const CompanyPageContainer = styled.div`
  text-align: center;
  background-color: #ccc; /* Light gray background color */
  padding-top: 80px; /* Adjusted padding-top */
`;

const HistoryCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const HistoryHeading = styled.h2`
  color: #333;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, #ccc, transparent);
  margin: 20px 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BulletListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;

  &:before {
    content: "•";
    color: #333;
    font-size: 1.2em;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CompanyPage = () => {
  return (
    <CompanyPageContainer>
      <HistoryHeading>Organization History</HistoryHeading>
      <HistoryCard>
        <BulletList>
          <BulletListItem>
            Founded on October 19, 2023, Damodarr Global Venture LLP is
            committed to a mission of global business excellence, placing utmost
            value on our customers. Our diverse range of high-quality products
            includes Warmi Compost Fertilizer, Natural Honey, Paper Packaging
            Products, A-2 Pure Cow Ghee, and Cereal & Cereal Products. In
            addition to these offerings, we specialize in personalized product
            sourcing to meet individual customer requirements.
          </BulletListItem>
          <BulletListItem>
            Our diverse range of high-quality products includes Warmi Compost
            Fertilizer, Natural Honey, Paper Packaging Products, A-2 Pure Cow
            Ghee, and Cereal & Cereal Products.
          </BulletListItem>
          <BulletListItem>
            Our journey is guided by the visionary founder, Mr. Darshit Patel,
            whose ambitious spirit envisions a business that can positively
            impact the world. Since our founding, Damodarr Global Venture LLP
            has achieved significant milestones, fueled by a dedicated team of
            four members committed to excellence in every aspect of our
            operations.
          </BulletListItem>
          <BulletListItem>
            Discover the Damodarr difference – where global business meets
            unparalleled quality and personalized service.
          </BulletListItem>
        </BulletList>
      </HistoryCard>
      <HorizontalLine />
      <WhatWeDo />
    </CompanyPageContainer>
  );
};

export default CompanyPage;
