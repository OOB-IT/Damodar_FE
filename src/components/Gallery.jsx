import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import image1 from "../asset/gallary/1.jpg";
import image2 from "../asset/gallary/2.jpg";
import image3 from "../asset/gallary/3.jpg";
import image4 from "../asset/gallary/4.jpg";
import image5 from "../asset/gallary/5.jpg";
import image6 from "../asset/gallary/6.jpg";
import image7 from "../asset/gallary/7.jpg";
import image8 from "../asset/gallary/8.jpg";
import axios from "axios";
import { baseUrl } from "../utils/config";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/getGalleryImages`)
      .then((response) => {
        if (response?.data) {
          setImages(response.data);
        } else {
          setImages(localImages);
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setImages(localImages); // Fallback to local images
      })
      .finally(() => setLoading(false));
  }, []);

  // Array of imported local images as a fallback
  const localImages = [
    { gImagePath: image1 },
    { gImagePath: image2 },
    { gImagePath: image3 },
    { gImagePath: image4 },
    { gImagePath: image5 },
    { gImagePath: image6 },
    { gImagePath: image7 },
    { gImagePath: image8 },
  ];

  const handleImageClick = (src) => {
    setLightboxImage(src);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <GalleryContainer>
      <h2>Photo Gallery</h2>
      <GalleryGrid>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonItem key={index}>
                <SkeletonImage />
              </SkeletonItem>
            ))
          : images.map((image, index) => (
              <GalleryItem
                key={index}
                onClick={() => handleImageClick(image.gImagePath)}
              >
                <img src={image.gImagePath} alt={`Image ${index + 1}`} />
              </GalleryItem>
            ))}
      </GalleryGrid>

      {lightboxImage && (
        <LightboxOverlay onClick={handleCloseLightbox}>
          <LightboxImage>
            <img src={lightboxImage} alt="Lightbox" />
          </LightboxImage>
        </LightboxOverlay>
      )}
    </GalleryContainer>
  );
};

// Styled components with responsive grid layout
const GalleryContainer = styled.div`
  text-align: center;
  margin: 20px;

  @media (min-width: 768px) {
    margin: 20px auto;
    max-width: 1200px;
  }
`;

const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GalleryItem = styled.div`
  position: relative;
  width: calc(25% - 15px);
  margin-bottom: 15px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SkeletonItem = styled.div`
  position: relative;
  width: calc(25% - 15px);
  margin-bottom: 15px;
  background: #f0f0f0;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Define the wave animation
const waveAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: ${waveAnimation} 1.5s infinite;
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxImage = styled.div`
  max-width: 90%;
  max-height: 80%;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export default Gallery;
