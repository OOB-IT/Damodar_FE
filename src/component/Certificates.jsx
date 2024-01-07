// CombinedFile.js

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  dgft,
  gmp,
  apeda,
  fda,
  fieo,
  fssai,
  halal,
} from "../assets/certificates/index";

const CertificateTitle = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #ffffff; /* Light background color */
`;

const CertificateContainer = styled.div`
  height: 25rem;
  background: #;

  @media screen and (max-width: 786px) {
    height: 550px;
  }
  @media screen and (max-width: 480px) {
    height: 650px;
  }
`;

const CertificateWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CertificateCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 300px;
  padding: 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const CertificateImg = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
  border-radius: 1rem;
`;

const CarouselContainer = styled.div`
  background: none;
  .slick-prev,
  .slick-next {
    font-size: 0px;
    color: black;
  }
`;

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <CertificateTitle>
        <h2>Membership & Certification</h2>
      </CertificateTitle>
      <CertificateContainer id="certificates">
        <CertificateWrapper>
          <CarouselContainer>
            <Slider {...settings}>
              <CertificateCard>
                <CertificateImg src={apeda} />
              </CertificateCard>
              <CertificateCard>
                <CertificateImg src={dgft} />
              </CertificateCard>
              <CertificateCard>
                <CertificateImg src={fieo} />
              </CertificateCard>
              <CertificateCard>
                <CertificateImg src={fda} />
              </CertificateCard>
              <CertificateCard>
                <CertificateImg src={fssai} />
              </CertificateCard>
              <CertificateCard>
                <CertificateImg src={gmp} />
              </CertificateCard>
              <CertificateCard>
                <CertificateImg src={halal} />
              </CertificateCard>
            </Slider>
          </CarouselContainer>
        </CertificateWrapper>
      </CertificateContainer>
    </>
  );
};

export default Certificates;
