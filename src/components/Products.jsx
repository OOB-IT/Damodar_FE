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

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PortfolioFilters = styled.ul`
  list-style: none;
  margin-bottom: 20px;
`;

const PortfolioFilterItem = styled.li`
  cursor: pointer;
  display: inline-block;
  margin: 10px 5px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  color: #444444;
  transition: all 0.3s;
  padding: 8px 20px;
  border-radius: 10px;

  &:hover,
  &.filter-active {
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    color: #fff;
  }
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
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
  const productData = {
    a2ghee: {
      pId: 1,
      pUrlParam: "a2ghee",
      pTitle: "A-2 Cow Ghee",
      pimage: ghee,
      pMetaDesc: "",
      pDesc:
        "As a leading exporter from India, we proudly present our A-2 Pure Cow Ghee to the world. Sourced from indigenous A-2 cows, our ghee is a rich, golden treasure crafted using traditional methods to retain its natural goodness.",
    },
    honey: {
      pId: 2,
      pUrlParam: "honey",
      pTitle: "Natural & raw honey",
      pimage: mainHoney,
      pMetaDesc: "",
      pDesc:
        "As a premier exporter from India, we are delighted to offer the world our exquisite Natural and Raw Honey. Harvested from the untouched forests and pristine farms of India, our honey is a testament to purity and natural goodness, free from additives and processing.",
    },
    lentils: {
      pId: 3,
      pUrlParam: "lentils",
      pTitle: "Lentils & Cereals",
      pimage: millets,
      pMetaDesc: "",
      pDesc:
        "As a leading exporter from India, we take pride in offering a diverse range of high-quality lentils and cereals to the global market. Cultivated in the fertile soils of India and carefully selected, our products bring the authentic taste and nutritional benefits of Indian agriculture to your table.",
    },
    snacks: {
      pId: 4,
      pUrlParam: "snacks",
      pTitle: "Snacks & Namkeens",
      pimage: snacks,
      pMetaDesc: "",
      pDesc:
        "As a premier exporter from India, we are excited to bring the delightful and diverse range of Indian snacks and namkeens to the global market. Our products are crafted using traditional recipes and the finest ingredients, ensuring an authentic taste that celebrates India's rich culinary heritage.",
    },
    paper: {
      pId: 5,
      pUrlParam: "paper",
      pTitle: "Paper packaging products",
      pimage: paper,
      pMetaDesc: "",
      pDesc:
        "As a leading exporter from India, we are proud to offer a diverse selection of eco-friendly paper packaging products to the global market. Our products are crafted with precision and care, using sustainable materials to meet the growing demand for environmentally conscious packaging solutions.",
    },
    sbt: {
      pId: 6,
      pUrlParam: "sbt",
      pTitle: "Sugarcane bagasse tableware",
      pimage: sbt,
      pMetaDesc: "",
      pDesc:
        "As a leading exporter from India, we are delighted to offer a comprehensive range of eco-friendly sugarcane bagasse tableware products to the global market. Made from the byproducts of sugarcane processing, our tableware is a sustainable and biodegradable alternative to conventional plastic and Styrofoam products, contributing to a greener planet.",
    },
    fertilizer: {
      pId: 7,
      pUrlParam: "fertilizer",
      pTitle: "Vermicompost fertilizer",
      pimage: fertilizer,
      pMetaesc: "",
      pDesc:
        "As a leading exporter from India, we are proud to offer our top-grade vermicompost fertilizer to the global market, with a special focus on Middle Eastern countries. Our vermicompost is produced using organic waste and earthworms, resulting in a nutrient-rich, eco-friendly fertilizer that promotes healthy soil and robust plant growth.",
    },
    furniture: {
      pId: 8,
      pUrlParam: "furniture",
      pTitle: "Wooden furniture",
      pimage: furniture,
      pMetaDesc:
        "As a leading exporter from India, we are delighted to present our exquisite collection of wooden furniture, crafted with precision and elegance to cater to global tastes. Our furniture range includes beds, sofas, TV units, center tables, dining tables with chairs, wardrobes, cabinets, sideboards, and wine racks, all made from high-quality wood to ensure durability and timeless beauty.",
      pDesc: "",
    },
  };
  const [landingPageData, setLandingPageData] = useState({});
  const [product, setProduct] = useSearchParams();

  console.log(product.get("p"));
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    setProductDetails(productData[[product.get("p")]]);
  }, [product.get("p")]);
  const products = landingPageData.Products;
  console.log(productDetails);
  return (
    <ProductsContainer>
      <div className="container" data-aos="fade-up">
        <SectionTitle className="section-title">
          <h2>{productDetails.pTitle}</h2>
          <p>Explore our Products.</p>
        </SectionTitle>
        <IntroSection>
          <IntroImage
            style={{ width: "40%" }}
            src={productDetails.pimage}
            alt="Intro Image"
          />
          <IntroDescription>
            <h3>Product Introduction</h3>
            <p>{productDetails.pDesc ? productDetails.pDesc : ""}</p>
          </IntroDescription>
        </IntroSection>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <PortfolioContainer data-aos="fade-up">
              {products &&
                products[productDetails.pUrlParam].map((product) => (
                  <PortfolioItem
                    key={product.ID}
                    className={`col-lg-12 col-md-12 portfolio-item filter-${product.Type}`}
                  >
                    <div className="portfolio-wrap hover-bg">
                      <div className="hover-text">
                        <h4>{product.ProductTitle}</h4>
                      </div>
                      <PortfolioImgWrapper>
                        <PortfolioImage
                          src={`${product.FeaturedImage}`}
                          alt=""
                        />
                      </PortfolioImgWrapper>
                      <PortfolioInfo>
                        <PortfolioTitle>{product.ProductTitle}</PortfolioTitle>
                        <PortfolioType>{product.Type}</PortfolioType>
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
