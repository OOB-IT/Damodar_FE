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

  useEffect(() => {
    setLandingPageData(JsonData);
    fetchSectionDetails();
  }, []);

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
    <div id="about">
      <div className="container">
        <div className="row">
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
                <div>
                  <h2>About Us</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: sectionDetails
                        ? formatSectionDesc(sectionDetails.sectionDesc)
                        : "loading...",
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
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {!loading && (
        <Features
          data={landingPageData.Features}
          showTitle={true}
          fromHome={true}
        />
      )}
    </div>
  );
};

// Styled components for skeleton loading
const waveAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
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

export default About;
