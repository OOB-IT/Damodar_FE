import React from "react";
import styled from "styled-components";
import certificateImage1 from "../assets/certificate1.png"; // Import your certificate images
import certificateImage2 from "../assets/certificate2.jpg"; // Import your certificate images

const CertificatesSectionContainer = styled.div`
  padding: 50px;
  background-color: #f5f5f5;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  max-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 20px;
`;

const CertificatesSection = () => {
  return (
    <CertificatesSectionContainer id="gallary">
      <h2>Business Certificates</h2>
      <CardContainer>
        <Card>
          <CertificateImage src={certificateImage1} alt="Certificate 1" />
          <Description>
            <h3>Certificate Title 1</h3>
            <p>Description of the certificate and its significance.</p>
          </Description>
        </Card>
        <Card>
          <CertificateImage src={certificateImage2} alt="Certificate 2" />
          <Description>
            <h3>Certificate Title 2</h3>
            <p>Description of the certificate and its significance.</p>
          </Description>
        </Card>
        <Card>
          <CertificateImage src={certificateImage1} alt="Certificate 1" />
          <Description>
            <h3>Certificate Title 1</h3>
            <p>Description of the certificate and its significance.</p>
          </Description>
        </Card>
        <Card>
          <CertificateImage src={certificateImage2} alt="Certificate 2" />
          <Description>
            <h3>Certificate Title 2</h3>
            <p>Description of the certificate and its significance.</p>
          </Description>
        </Card>
        <Card>
          <CertificateImage src={certificateImage2} alt="Certificate 2" />
          <Description>
            <h3>Certificate Title 2</h3>
            <p>Description of the certificate and its significance.</p>
          </Description>
        </Card>
        {/* Add more cards as needed */}
      </CardContainer>
    </CertificatesSectionContainer>
  );
};

export default CertificatesSection;
