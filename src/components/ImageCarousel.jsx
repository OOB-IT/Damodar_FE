import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  dgft,
  gmp,
  apeda,
  fda,
  fieo,
  fssai,
  halal,
} from "../asset/certificate/index";
import "./ImageCarousel.css";
import axios from "axios";
import { baseUrl } from "../utils/config";
const images = [
  { src: apeda, alt: "apeda" },
  { src: dgft, alt: "dgft" },
  { src: gmp, alt: "gmp" },
  { src: fda, alt: "fda" },
  { src: fssai, alt: "fssai" },
  { src: fieo, alt: "fieo" },
  { src: halal, alt: "halal" },
  // Add more images as needed
];
const ImageCarousel = () => {
  const [certificates, setCertificates] = useState();
  const duplicateCertificates = (cert, count) =>
    Array.from({ length: count }, () => cert).flat();
  const repeatedCertificates = duplicateCertificates(certificates, 500);

  useEffect(() => {
    fetchCertificateData();
  }, []);

  const fetchCertificateData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getCertificatesImg`, {
        params: {
          limit: 6,
        },
      });
      if (response !== undefined) {
        setCertificates(response?.data);
      } else {
        setCertificates(images);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setCertificates(images);
    }
  };
  return (
    // <div className='carousel-container'>
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      stopOnHover={false}
      transitionTime={500}
      slidesToShow={3} // Display 3 images at once
      centerMode
      centerSlidePercentage={100 / 3}
      renderIndicator={false}
    >
      {repeatedCertificates &&
        repeatedCertificates.map((image, index) => (
          <div key={index} className="carousel-image">
            <img
              src={image?.src}
              alt={image?.alt}
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
        ))}
    </Carousel>
  );
};

export default ImageCarousel;
