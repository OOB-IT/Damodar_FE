import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";
import "./Gallery.css";
import image1 from "../assets/gallary/1.jpg";
import image2 from "../assets/gallary/2.jpg";
import image3 from "../assets/gallary/3.jpg";
import image4 from "../assets/gallary/4.jpg";
import image5 from "../assets/gallary/5.jpg";
import image6 from "../assets/gallary/6.jpg";
import image7 from "../assets/gallary/7.jpg";
import image8 from "../assets/gallary/8.jpg";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

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
        setImages(localImages);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleImageClick = (src) => {
    setLightboxImage(src);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Photo Gallery</h2>
        </div>

        <div className="gallery-grid">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="skeleton-item">
                <div className="skeleton-image"></div>
              </div>
            ))
            : images.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => handleImageClick(image.gImagePath)}
              >
                <img src={image.gImagePath} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
        </div>
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={handleCloseLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={handleCloseLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <img
              src={lightboxImage}
              alt="Lightbox view"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
