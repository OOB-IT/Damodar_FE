import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal"; // Import your Modal component
import PostReview from "./PostReview";

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
`;

const TestimonialImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;

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
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Testimonials = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);

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
          {data
            ? data.map((d, i) => (
                <TestimonialColumn key={`${d.name}-${i}`} className="col-md-4">
                  <TestimonialCard className="testimonial">
                    <TestimonialImage className="testimonial-image">
                      <img src={d.img} alt="" />
                    </TestimonialImage>
                    <TestimonialContent className="testimonial-content text-center">
                      <p>"{d.text}"</p>
                    </TestimonialContent>
                    <TestimonialMeta className="testimonial-meta">
                      - {d.name}
                    </TestimonialMeta>
                    {renderStars(d.rating)}
                  </TestimonialCard>
                </TestimonialColumn>
              ))
            : "loading"}
        </TestimonialsRow>
        <PostReviewButton onClick={() => setModalOpen(true)}>
          Post Review
        </PostReviewButton>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <PostReview />
          </Modal>
        )}
      </div>
    </TestimonialsSection>
  );
};
