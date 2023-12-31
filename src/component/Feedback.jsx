import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FeedbackSectionContainer = styled.div`
  padding: 50px;
  background-color: #f8f8f8; /* Light background color */
  text-align: center;
`;

const FeedbackList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const FeedbackItem = styled.li`
  max-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const RatingStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #333; /* Dark background color */
  color: #fff;
`;

const FeedbackContent = styled.div`
  padding: 20px;
`;

const UserName = styled.p`
  font-weight: bold;
  color: #333; /* Dark text color */
`;

const FeedbackDescription = styled.p`
  color: #555; /* Slightly darker text color */
`;

const StarIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.userRated ? "#FFD700" : "#ccc")};
`;

const FeedbackSection = () => {
  const feedbackData = [
    {
      id: 1,
      userRating: 5,
      userName: "John Doe",
      description: "Excellent service! Very satisfied.",
    },
    {
      id: 2,
      userRating: 4,
      userName: "Jane Smith",
      description: "Great product quality. Will buy again.",
    },
    // Add more feedback data as needed
  ];

  return (
    <FeedbackSectionContainer id="feedback">
      <h2>Users Feedback</h2>
      <FeedbackList>
        {feedbackData.map((feedback) => (
          <FeedbackItem key={feedback.id}>
            <RatingStars>
              {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon
                  key={index}
                  icon={faStar}
                  userRated={index <= feedback.userRating}
                />
              ))}
            </RatingStars>
            <UserName>{feedback.userName}</UserName>

            <FeedbackContent>
              <FeedbackDescription>{feedback.description}</FeedbackDescription>
            </FeedbackContent>
          </FeedbackItem>
        ))}
      </FeedbackList>
    </FeedbackSectionContainer>
  );
};

export default FeedbackSection;
