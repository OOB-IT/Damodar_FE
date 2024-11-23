import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import JsonData from "../data/data.json";
import mainHoney from "../asset/product/mainHoney.jpg";
import ghee from "../asset/product/ghee (1).jpg";
import millets from "../asset/product/millets.jpg";
import snacks from "../asset/product/dry snacks.jpg";
import paper from "../asset/product/cup.jpg";
import sbt from "../asset/product/sugarcane bagasse compartment meal tray.jpg";
import furniture from "../asset/product/wooden bed.jpg";
import fertilizer from "../asset/product/vermicompost smooth and natural.jpg";
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
  padding: 10px;
  text-align: left;
  max-height: 400px; /* Limit the height */

  padding: 20px; /* Add padding inside the box */

  position: relative; /* Position for shading effect */

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PortfolioContainer = styled.div`
  padding: 150px 0 0 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center; /* Center items horizontally */

  @media (max-width: 768px) {
    justify-content: flex-start; /* Align items to the start for mobile view */
  }
`;

const PortfolioItem = styled.div`
  margin: auto auto 20px auto;
  max-width: 350px;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2 ease-in-out;
  }
`;
const PortfolioImgWrapper = styled.div`
  width: 400px;
  height: 300px;
  overflow: hidden;
  text-align: center;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s;
`;

const PortfolioInfo = styled.div`
  opacity: 0;
  position: absolute;
  left: 15px;
  bottom: 0;
  z-index: 3;
  right: 15px;
  transition: all 0.3s;
  background: rgba(55, 81, 126, 0.8);
  padding: 10px 15px;
`;

const PortfolioTitle = styled.h4`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 0px;
`;

const PortfolioType = styled.p`
  color: #f9fcfe;
  font-size: 14px;
  margin-bottom: 0;
`;

const Products = () => {
  const productData = "";

  const [productTypeData, setProductTypeData] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  const [apiProductData, setApiProductData] = useState([]);
  const [product, setProduct] = useSearchParams();

  useEffect(() => {
    axios.get(`${baseUrl}/getProductCategories`).then((response) => {
      const data = response?.data || productData;
      setProductTypeData(data);
      const selectedProduct =
        data?.find((p) => p?.productTypeShortName === product?.get("p")) ||
        productData[product.get("p")];

      setProductDetails(selectedProduct);

      if (selectedProduct) {
        axios
          .get(`${baseUrl}/getProducts`, {
            params: { productTypeId: selectedProduct.productTypeId },
          })
          .then((response) => {
            setApiProductData(response.data);
          });
      }
    });
  }, [product]);

  useEffect(() => {}, [productTypeData, product]);

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
          <h2>{productDetails?.productTypeTitle}</h2>
          <p>Explore our Products.</p>
        </SectionTitle>
        <IntroSection>
          <IntroImage
            style={{ width: window.innerWidth <= 768 ? "100%" : "40%" }}
            src={productDetails?.productTypeImgPath}
            alt="Intro Image"
          />
          <IntroDescription>
            <h3>Product Introduction</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(productDetails?.productTypeDesc),
              }}
            ></div>
          </IntroDescription>
        </IntroSection>
        <section id="portfolio" className="portfolio">
          <div className="">
            <PortfolioContainer data-aos="fade-up">
              {apiProductData &&
                apiProductData.map((product) => (
                  <PortfolioItem
                    key={product.id}
                    className={`col-lg-12 col-md-12 portfolio-item filter-${product.id}`}
                  >
                    <div className="portfolio-wrap hover-bg">
                      <div className="hover-text">
                        <h4>{product.name}</h4>
                      </div>
                      <PortfolioImgWrapper>
                        <PortfolioImage
                          src={`${product.imageUrl}`}
                          alt={product.name}
                        />
                      </PortfolioImgWrapper>
                      <PortfolioInfo>
                        <PortfolioTitle>{product.name}</PortfolioTitle>
                        <PortfolioType>{product.name}</PortfolioType>
                      </PortfolioInfo>
                    </div>
                  </PortfolioItem>
                ))}
            </PortfolioContainer>
          </div>
        </section>
      </div>
    </ProductsContainer>
  );
};

export default Products;
