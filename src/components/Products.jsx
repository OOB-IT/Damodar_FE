import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import JsonData from "../data/data.json";

const ProductsContainer = styled.div`
  padding: 150px 0 0 0;
  text-align: center;
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
    ${'' /* align-content: center;
    justify-content: center; */}
`;

const PortfolioItem = styled.div`
  margin:auto auto 20px auto;
  max-width: 350px;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;
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
  color: #fff;
  margin-bottom: 0px;
`;

const PortfolioType = styled.p`
  color: #f9fcfe;
  font-size: 14px;
  margin-bottom: 0;
`;

const Products = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const products = landingPageData.Products
  const categories = landingPageData.ProductCategories
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' ? products : products?.filter(product => product?.Type === selectedCategory);
  const typeCounts = products?.reduce((counts, product) => {
    const type = product.Type;
    counts[type] = (counts[type] || 0) + 1;
    return counts;
  }, {});
  return (
    <ProductsContainer>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Products</h2>
          <p>Explore our Products.</p>
        </div>
        <section id="portfolio" className="portfolio">
          <div className="row">
            <div className="col-lg-12">
              <PortfolioFilters className="portfolio-filters">
                {categories?.map((category, index) => (
                  <PortfolioFilterItem
                    onClick={() => handleFilterClick(`${category.categoryName}`)}
                    className={selectedCategory === `${category.categoryName}` ? 'filter-active' : ''}
                  >
                    {category.categoryName} ({categories[index].categoryFilter === 'all' ? products?.length : typeCounts[category.categoryName]})
                  </PortfolioFilterItem>
                )
                )}
              </PortfolioFilters>
            </div>
          </div>
          <div className='container'>
            <PortfolioContainer data-aos="fade-up">
              {filteredProducts && filteredProducts.map((product) => (
                <PortfolioItem
                  key={product.ID}
                  className={`col-lg-12 col-md-12 portfolio-item filter-${product.Type}`}
                >
                  <div className="portfolio-wrap hover-bg">
                    <div className='hover-text'>
                      <h4>{product.ProductTitle}</h4>
                    </div>
                    <PortfolioImage
                      src={`${product.FeaturedImage}`}
                      alt=""
                    />
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
