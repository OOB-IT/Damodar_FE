// OwnerCard.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap onto multiple lines */
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #cccccc;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin: 10px; /* Add some margin between cards */
  width: 300px; /* Default width for larger screens */

  @media (max-width: 600px) {
    width: 100%; /* Make the card full-width on smaller screens */
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Name = styled.h2`
  margin: 10px 0;
  color: #333;
`;

const Bio = styled.p`
  color: #666;
`;

const OwnerCard = ({ owner1, owner2 }) => {
  return (
    <Container>
      <Card>
        <Image src={owner1.image} alt={owner1.name} />
        <Name>{owner1.name}</Name>
        <Bio>{owner1.bio}</Bio>
      </Card>
      <Card>
        <Image src={owner2.image} alt={owner2.name} />
        <Name>{owner2.name}</Name>
        <Bio>{owner2.bio}</Bio>
      </Card>
    </Container>
  );
};

export default OwnerCard;
