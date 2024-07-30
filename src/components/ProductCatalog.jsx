import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { baseUrl } from "../utils/config";

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
  font-size: 1.6rem; /* Example: Adjust font size for title */
`;

const CardDesc = styled(Card.Text)`
  font-size: 1.2rem; /* Example: Adjust font size for description */
  font-weight: bold;
`;

// Skeleton Loading Styles
const skeletonLoading = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f5f5f5;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const SkeletonCard = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 8px;
  animation: ${skeletonLoading} 1.5s infinite;
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

const SkeletonText = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 10px 0;
  animation: ${skeletonLoading} 1.5s infinite;
`;

// Component
export const ProductCatalog = (props) => {
  const localData = props.data;
  const [apiRes, setApires] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/getProductCategories`)
      .then((response) => {
        if (response?.data) {
          setApires(response?.data);
        } else {
          setApires(localData);
        }
      })
      .catch((error) => {
        setApires(localData);
        console.error("Error fetching images:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
          {loading
            ? [...Array(6)].map((_, i) => (
                <SkeletonCard key={i}>
                  <SkeletonText width="100%" height="200px" />
                  <SkeletonText width="60%" />
                  <SkeletonText width="80%" />
                </SkeletonCard>
              ))
            : apiRes?.map((d, i) => (
                <CustomCard key={`${d.title}-${i}`}>
                  <CardImage variant="top" src={d.productTypeCtgImg} />
                  <CardBody>
                    <CardTitle>{d.productTypeTitle}</CardTitle>
                    <CardDesc>{d.productTypeCtgDesc}</CardDesc>
                    <ViewButton
                      variant="primary"
                      href={`/#${d.productPageUrl}`}
                    >
                      View
                    </ViewButton>
                  </CardBody>
                </CustomCard>
              ))}
        </CardContainer>
      </div>
    </div>
  );
};

export default ProductCatalog;
