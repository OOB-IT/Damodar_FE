import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import about from "../asset/about.jpg";
import JsonData from "../data/data.json";
import { Link } from "react-router-dom";
import { Features } from "./features";
import { baseUrl } from "../utils/config";

export const About = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  const [sectionDetails, setSectionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainLoaderVisible, setMainLoaderVisible] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLandingPageData(JsonData);
      await fetchSectionDetails();
      setMainLoaderVisible(false);
    };

    fetchData();

    // Show skeleton loading after the main loader has been visible for 1.2 seconds
    const mainLoaderTimer = setTimeout(() => {
      setMainLoaderVisible(false); // Hide main loader
      setLoading(false); // Show skeleton loader
    }, 3500); // Adjust this time as needed

    return () => clearTimeout(mainLoaderTimer);
  }, []);
  console.log();

  const fetchSectionDetails = async () => {
    try {
      const response = await fetch(`${baseUrl}/getSectionDetails/1`);
      if (response.ok) {
        const data = await response.json();
        setSectionDetails(data?.data);
      } else {
        console.error("Error fetching section details:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching section details:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatSectionDesc = (text) => {
    if (!text) return "";
    return text.replace(/\n/g, "<br />") || text.replace("\r\n\r\n", "<br />");
  };

  return (
    <>
      <div id="about">
        {mainLoaderVisible && <MainLoader />}
        <div className={mainLoaderVisible ? "hidden" : ""}>
          {loading ? (
            <SkeletonContainer>
              <SkeletonImage />
              <SkeletonTextBlock>
                <SkeletonTitle />
                <SkeletonParagraph />
                <SkeletonParagraph />
                <SkeletonButton />
              </SkeletonTextBlock>
            </SkeletonContainer>
          ) : (
            <>
              <div className="col-xs-12 col-md-6">
                <img
                  src={about}
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                  className="img-responsive"
                  alt="About Us"
                />
              </div>
              <div className="col-xs-12 col-md-6">
                <TextContainer>
                  <h2 className="animated-heading">About Us</h2>
                  <p
                    className="animated-text"
                    dangerouslySetInnerHTML={{
                      __html: sectionDetails
                        ? formatSectionDesc(sectionDetails.sectionDesc)
                        : formatSectionDesc(landingPageData?.About?.sectionDesc),
                    }}
                  ></p>
                  <button
                    type="submit"
                    className="btn btn-custom btn-lg rounded"
                  >
                    <Link style={{ color: "#f5f5f5" }} to="/company">
                      View More
                    </Link>
                  </button>
                </TextContainer>
              </div>
            </>
          )}
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      {!loading && (
        <FeaturesContainer>
          <Features
            data={landingPageData.Features}
            showTitle={true}
            fromHome={true}
          />
        </FeaturesContainer>
      )}
    </>
  );
};

// Keyframes for animations
const waveAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Main Loader Styled Component
const MainLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  z-index: 1000;
`;

// Hide main loader when data is loaded
const Hidden = styled.div`
  display: none;
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const SkeletonElement = styled.div`
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${waveAnimation} 1.5s infinite;
`;

const SkeletonImage = styled(SkeletonElement)`
  width: 100%;
  max-width: 500px;
  height: 300px;
  border-radius: 10px;
`;

const SkeletonTextBlock = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
`;

const SkeletonTitle = styled(SkeletonElement)`
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const SkeletonParagraph = styled(SkeletonElement)`
  width: 100%;
  height: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SkeletonButton = styled(SkeletonElement)`
  width: 30%;
  height: 40px;
  border-radius: 5px;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  animation: ${fadeIn} 1s ease-out;
  .animated-heading {
    animation: ${fadeIn} 1s ease-out;
  }
  .animated-text {
    animation: ${fadeIn} 1.5s ease-out;
  }
`;

// Container for Features component with spacing
const FeaturesContainer = styled.div`
  margin-top: 40px; // Add margin to create space from the button
  padding: 0 15px; // Padding to ensure responsiveness on smaller screens

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 0 10px;
  }
`;

export default About;
