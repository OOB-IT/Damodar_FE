import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.8);
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 16px auto;
`;

const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  font-size: 3.5rem;
  color: #6372ff;;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2px;
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0;
`;

const Card = (props) => {
    const { icon, title, description } = props;
    return (
        <CardContainer>
            <CardIcon>
                <i className={icon} aria-hidden="true"></i>
            </CardIcon>
            {/* <CardTitle>{title}</CardTitle> */}
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    );
};

export default Card;