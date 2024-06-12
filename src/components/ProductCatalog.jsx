import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image } from "./image";

// Styled components
const PortfolioSection = styled.section`
  text-align: center;
  padding: 60px 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const CustomCard = styled(Card)`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 576px) {
    width: 45%;
  }

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 992px) {
    width: 22%;
  }
`;

const CardImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  width: -webkit-fill-available; /* Add this line */
`;

const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ViewButton = styled(Button)`
  margin-top: auto;
`;

const CardTitle = styled(Card.Title)`
  font-size: 1.2rem; /* Example: Adjust font size for title */
`;

const CardDesc = styled(Card.Text)`
  font-size: 0.9rem; /* Example: Adjust font size for description */
`;

// Component
export const ProductCatalog = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div>
          <h2>Product Catalog</h2>
          <p>
            Explore our comprehensive range of high-quality products and
            discover the perfect solutions for your needs.
          </p>
        </div>
        <CardContainer>
          {props.data
            ? props.data.map((d, i) => (
                <CustomCard key={`${d.title}-${i}`}>
                  <CardImage variant="top" src={d.smallImage} />
                  <CardBody>
                    <CardTitle>{d.title}</CardTitle>
                    <CardDesc>{d.desc}</CardDesc>
                    <ViewButton variant="primary" href={d.productPageUrl}>
                      View
                    </ViewButton>
                  </CardBody>
                </CustomCard>
              ))
            : "Loading..."}
        </CardContainer>
      </div>
    </div>
  );
};

export default ProductCatalog;
