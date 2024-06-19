import React from "react";
import styled from "styled-components";
// Import your local images
import image1 from "../asset/gallary/1.jpg";
import image2 from "../asset/gallary/2.jpg";
import image3 from "../asset/gallary/3.jpg";
import image4 from "../asset/gallary/4.jpg";
import image5 from "../asset/gallary/5.jpg";
import image6 from "../asset/gallary/6.jpg";
import image7 from "../asset/gallary/7.jpg";
import image8 from "../asset/gallary/8.jpg";

const Gallery = () => {
  // Array of imported local images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <GalleryContainer>
      <h2>Photo Gallery</h2>
      {images.map((image, index) => (
        <GalleryItem key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

// Styled components with responsive grid layout
const GalleryContainer = styled.div`
  text-align: center; /* Center align the title and items */
  margin: 20px;

  @media (min-width: 768px) {
    margin: 20px auto;
    max-width: 1200px;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  display: inline-block; /* Ensures items are in a row */
  width: calc(25% - 15px); /* 4 items per row with gap */
  margin-bottom: 15px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: calc(50% - 15px); /* 2 items per row on smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* 1 item per row on mobile */
  }
`;

export default Gallery;
