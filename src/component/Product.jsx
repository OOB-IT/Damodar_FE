import React, { useState } from "react";
import styled from "styled-components";

// Import product category images
import categoryImage1 from "../assets/category1.png";
import categoryImage2 from "../assets/category2.jpg";

const ProductsSectionContainer = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ProductCategories = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const CategoryBox = styled.div`
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductDescription = styled.div`
  max-width: 600px;
  padding: 20px;
`;

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: "Category 1", image: categoryImage1 },
    { id: 2, name: "Category 2", image: categoryImage2 },
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
