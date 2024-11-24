import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../utils/config";

const ProductsContainer = styled.div`
  padding: 150px 0 0 0;
  text-align: center;
`;

const SectionTitle = styled.div`
  margin-bottom: 50px;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IntroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  flex: 1;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const IntroDescription = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PortfolioContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProductTypeSection = styled.div`
  text-align: left;
`;

const ProductTypeTitle = styled.h3`
  margin-bottom: 10px;
  color: #37517e;
`;

const ProductTypeDescription = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PortfolioItem = styled.div`
  max-width: 200px;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PortfolioImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PortfolioTitle = styled.h4`
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;

const Products = () => {
  const [productDetails, setProductDetails] = useState({});
  const [product, setProduct] = useSearchParams();
  const mcId = product?.get("id");

  useEffect(() => {
    axios
      .get(`${baseUrl}/getProductDataByMainCategory?id=${mcId}`)
      .then((response) => {
        const data = response?.data?.data || {};
        console.log(data);

        setProductDetails(data);
      });
  }, [product]);

  const parseMarkdown = (markdown) => {
    if (!markdown) return "";
    return markdown
      .replace(/^###### (.*?)(\r?\n|$)/gm, "<h6>$1</h6>")
      .replace(/^##### (.*?)(\r?\n|$)/gm, "<h5>$1</h5>")
      .replace(/^#### (.*?)(\r?\n|$)/gm, "<h4>$1</h4>")
      .replace(/^### (.*?)(\r?\n|$)/gm, "<h3>$1</h3>")
      .replace(/^## (.*?)(\r?\n|$)/gm, "<h2>$1</h2>")
      .replace(/^# (.*?)(\r?\n|$)/gm, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/\r?\n/g, "<br />");
  };

  return (
    <ProductsContainer>
      <div className="container" data-aos="fade-up">
        <SectionTitle className="section-title">
          <h2>{productDetails?.mainCategoryTitle}</h2>
          <p>Explore our Products.</p>
        </SectionTitle>
        <IntroSection>
          <IntroImage
            style={{ width: window.innerWidth <= 768 ? "100%" : "40%" }}
            src={productDetails?.mainCategoryImgPath || ""}
            alt="Intro Image"
          />
          <IntroDescription>
            <h3>Product Introduction</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(productDetails?.mainCategoryDesc),
              }}
            ></div>
          </IntroDescription>
        </IntroSection>
        <PortfolioContainer>
          {productDetails?.productsCategory?.map((productType) => (
            <ProductTypeSection key={productType.productTypeId}>
              <ProductTypeTitle>{productType.productTypeTitle}</ProductTypeTitle>
              <ProductTypeDescription>
                {productType.productTypeDesc}
              </ProductTypeDescription>
              <ProductList>
                {productType.productList.map((product) => (
                  <PortfolioItem key={product.productId}>
                    <PortfolioImgWrapper>
                      <PortfolioImage
                        src={product.productImgPath}
                        alt={product.productName}
                      />
                    </PortfolioImgWrapper>
                    <PortfolioTitle>{product.productName}</PortfolioTitle>
                  </PortfolioItem>
                ))}
              </ProductList>
            </ProductTypeSection>
          ))}
        </PortfolioContainer>
      </div>
    </ProductsContainer>
  );
};

export default Products;
