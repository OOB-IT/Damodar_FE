import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal"; // Import your Modal component
import PostReview from "./PostReview";
import userImg from "../asset/user.png";
import axios from "axios";
import Toast from "../utils/Toast";
import toastImg from "../asset/logo2.png";

const TestimonialsSection = styled.div`
  padding: 100px 0;
  background-color: #f9f9f9;
  text-align: center;
`;

const SectionTitle = styled.div`
  margin-bottom: 50px;
`;

const TestimonialsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TestimonialColumn = styled.div`
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
  padding: 15px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  min-height: 350px;
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
`;

export const Testimonials = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [testimonialData, setTestimonialData] = useState([]);
  const [isRef, setIsRef] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const handleShow = () => setShowToast(true);
  const handleClose = () => setShowToast(false);

  useEffect(() => {
    fetchtestimonialData();
  }, [isRef]);

  const fetchtestimonialData = async () => {
    try {
      const response = await axios.get(
        "https://api.damodarr.com/api/getFeedbacksForClientPage",
        {
          params: {
            limit: 6,
          },
        }
      );
      setTestimonialData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <SectionTitle className="section-title">
          <h2>What our clients say</h2>
        </SectionTitle>
        <TestimonialsRow className="row">
          {testimonialData
            ? testimonialData.map((d, i) => (
                <TestimonialColumn
                  key={`${d.fbkUserName}-${i}`}
                  className="col-md-4"
                >
                  <TestimonialCard className="testimonial">
                    <TestimonialImage className="testimonial-image">
                      <img src={userImg} alt="" />
                    </TestimonialImage>
                    <TestimonialContent className="testimonial-content text-center">
                      <p>"{d.fbkReviewDesc}"</p>
                    </TestimonialContent>
                    <TestimonialMeta className="testimonial-meta">
                      - {d.fbkUserName}
                    </TestimonialMeta>
                    {renderStars(d.fbkStarCount)}
                  </TestimonialCard>
                </TestimonialColumn>
              ))
            : "loading"}
        </TestimonialsRow>
        <PostReviewButton onClick={() => setModalOpen(true)}>
          Post a Review
        </PostReviewButton>
        {isModalOpen && (
          <Modal
            onClose={() => {
              setModalOpen(false);
            }}
          >
            <PostReview handleShow={handleShow} />
          </Modal>
        )}
      </div>
      <Toast
        show={showToast}
        onClose={handleClose}
        headerText="Feedback Posted"
        bodyText="Thank you for your valuable feedback."
        timeAgo="Just now"
        imageSrc={toastImg}
      />
    </TestimonialsSection>
  );
};
