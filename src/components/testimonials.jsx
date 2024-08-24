import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "./Modal"; // Import your Modal component
import PostReview from "./PostReview";
import userImg from "../asset/user.png";
import axios from "axios";
import Toast from "../utils/Toast";
import toastImg from "../asset/logo2.png";
import { Carousel } from "react-responsive-carousel";
import { baseUrl } from "../utils/config";

const TestimonialsSection = styled.div`
  padding: 100px 0;
  background-color: #f9f9f9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 50px;

  h2 {
    font-size: 36px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  min-height: 350px;
  box-sizing: border-box;
  width: 80%; /* Adjust width to make the card larger on mobile */
  margin: 0 auto; /* Center the card */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`;

const TestimonialImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
  margin-left: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialContent = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TestimonialMeta = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: #ffd700;

  & > span {
    margin: 0 2px;
  }
`;

const Star = ({ filled }) => <span>{filled ? "★" : "☆"}</span>;

const PostReviewButton = styled.button`
  background-color: #5ca9fb;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #6372ff;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Skeleton Loading Styles
const waveAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonCard = styled.div`
  background: #f0f0f0;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  min-height: 350px;
  animation: ${waveAnimation} 2s infinite;
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkeletonImage = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(-90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  border-radius: 50%;
  margin-bottom: 15px;
`;

const SkeletonText = styled.div`
  width: 80%;
  height: 20px;
  background: linear-gradient(-90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  margin-bottom: 10px;
  border-radius: 5px;
`;

const SkeletonStarRating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 50%;
  height: 20px;
  background: linear-gradient(-90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  border-radius: 5px;
`;

export const Testimonials = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchTestimonialData();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const fetchTestimonialData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getFeedbacksForClientPage`, {
        params: {
          limit: 6,
        },
      });
      setTestimonialData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const renderStars = (count) => {
    return (
      <StarRating>
        {[...Array(5)].map((star, index) => (
          <Star key={index} filled={index < count} />
        ))}
      </StarRating>
    );
  };

  const centerSlidePercentage = windowWidth <= 768 ? 100 : 100 / 3;

  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <SectionTitle className="section-title">
          <h2>What our clients say</h2>
        </SectionTitle>
        {loading ? (
          <Carousel
            autoPlay
            interval={1000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            stopOnHover={false}
            transitionTime={500}
            centerMode
            centerSlidePercentage={100} // Show only 1 card at a time on mobile
            renderIndicator={false}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index}>
                <SkeletonCard>
                  <SkeletonImage />
                  <SkeletonText />
                  <SkeletonText />
                  <SkeletonStarRating />
                </SkeletonCard>
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            autoPlay
            interval={1000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            stopOnHover={false}
            transitionTime={500}
            centerMode
            centerSlidePercentage={centerSlidePercentage} // Dynamically set based on screen size
            renderIndicator={false}
          >
            {testimonialData.map((d, i) => (
              <div key={`${d.fbkUserName}-${i}`}>
                <TestimonialCard className="testimonial">
                  <TestimonialImage className="testimonial-image">
                    <img src={userImg} alt={d.fbkUserName} />
                  </TestimonialImage>
                  <TestimonialContent className="testimonial-content text-center">
                    <p>"{d.fbkReviewDesc}"</p>
                  </TestimonialContent>
                  <TestimonialMeta className="testimonial-meta">
                    - {d.fbkUserName}
                  </TestimonialMeta>
                  {renderStars(d.fbkStarCount)}
                </TestimonialCard>
              </div>
            ))}
          </Carousel>
        )}
        <PostReviewButton onClick={() => setModalOpen(true)}>
          Post a Review
        </PostReviewButton>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <PostReview />
          </Modal>
        )}
      </div>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        headerText="Feedback Posted"
        bodyText="Thank you for your valuable feedback."
        timeAgo="Just now"
        imageSrc={toastImg}
      />
    </TestimonialsSection>
  );
};

export default Testimonials;
