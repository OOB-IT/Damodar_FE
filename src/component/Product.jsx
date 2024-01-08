import React, { useState } from "react";
import styled from "styled-components";

import categoryImage1 from "../assets/category1.png";

const ProductsSectionContainer = styled.div`
  padding: 20px; /* Adjust padding for smaller screens */
  background-color: #cccccc;
  text-align: center;
`;

const ProductCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const CategoryBox = styled.div`
  flex: 0 0 calc(15.3333% - 10px); /* Adjust width for three boxes in a row */
  cursor: pointer;

  @media (max-width: 767px) {
    flex: 0 0 calc(50% - 10px); /* Adjust width for two boxes in a row on small screens */
  }
`;

const CategoryImage = styled.img`
  width: 100%; /* Make images fill the container */
  max-width: 100%;
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%; /* Make images fill the container */
  max-width: 300px;
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px;
`;

const ProductDescription = styled.div`
  max-width: 100%; /* Make text fill the container */
  padding: 20px;
`;

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: "Category 1", image: categoryImage1 },
    { id: 2, name: "Category 2", image: categoryImage1 },
    { id: 3, name: "Category 3", image: categoryImage1 },
    // Add more categories as needed
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ProductsSectionContainer id="Products">
      <h2>Product Categories</h2>
      <ProductCategories>
        {categories.map((category) => (
          <CategoryBox
            key={category.id}
            onClick={() => handleCategoryClick(category)}
          >
            <CategoryImage src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </CategoryBox>
        ))}
      </ProductCategories>
      {selectedCategory && (
        <ProductDetailsContainer>
          <ProductImage
            src={selectedCategory.image}
            alt={selectedCategory.name}
          />
          <ProductDescription>
            <h3>{selectedCategory.name}</h3>
            <p>
              Detailed description of the selected product category. Provide
              information about features, benefits, and any other relevant
              details.
            </p>
          </ProductDescription>
        </ProductDetailsContainer>
      )}
    </ProductsSectionContainer>
  );
};

export default ProductsSection;
