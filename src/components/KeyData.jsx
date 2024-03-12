import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 50px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin: 10px;
  width: 300px;

  @media (max-width: 600px) {
    width: calc(100% - 20px); /* Adjust width for smaller screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h2`
  margin: 10px 0;
  color: #333;
`;

const Bio = styled.p`
  color: #666;
`;

const ExpandedBio = styled.p`
  color: #666;
  font-size: 14px;
  margin-top: 10px;
`;

const OwnerCard = ({ owner1, owner2 }) => {
  const [expandedOwners, setExpandedOwners] = useState([]);

  const handleCardClick = (owner) => {
    if (!expandedOwners.includes(owner)) {
      setExpandedOwners([...expandedOwners, owner]);
    }
  };

  return (
    <Container>
      <Card onClick={() => handleCardClick(owner1)}>
        <Image src={owner1.image} alt={owner1.name} />
        <Name>{owner1.name}</Name>
        {owner1.bio}
        {expandedOwners.includes(owner1) && (
          <ExpandedBio>
            <p>
              Mr. Darshit is an experienced international businessman with over
              5 years in global trade. He possesses a deep understanding of
              multiple markets and strives to lead with visionary solutions. His
              products prioritize health and sustainability for all
            </p>
          </ExpandedBio>
        )}
      </Card>
      <Card onClick={() => handleCardClick(owner2)}>
        <Image src={owner2.image} alt={owner2.name} />
        <Name>{owner2.name}</Name>
        {owner2.bio}
        {expandedOwners.includes(owner2) && (
          <ExpandedBio>
            <p>
              Mr. Dev, a computer engineer by education, is a seasoned
              consultant with a keen interest in global business. Specializing
              in digital platforms, he offers expertise in digital marketing,
              advertising, and strategic digital tool utilization.
            </p>
          </ExpandedBio>
        )}
      </Card>
    </Container>
  );
};

export default OwnerCard;
