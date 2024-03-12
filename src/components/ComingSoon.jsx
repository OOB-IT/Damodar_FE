import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 150px 0 0 0;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
`;

const ImageContainer = styled.div`
  margin-top: 30px;
`;

const Image = styled.img`
  border-radius: 8%;
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ComingSoon = () => {
  return (
    <Container>
      <Heading>This Page is under development</Heading>
      <Paragraph>
        We're working hard to bring you an amazing experience!
      </Paragraph>
      <ImageContainer>
        <Image
          src='https://www.deweyjames.com/wp-content/uploads/2018/04/under-construction-1000x500.jpg'
          alt='Coming Soon Image'
        />
      </ImageContainer>
    </Container>
  );
};

export default ComingSoon;
