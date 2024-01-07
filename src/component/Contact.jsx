import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ContactFormContainer = styled.div`
  padding: 50px;
  background-color: #cccccc;
`;

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const FormTitle = styled.h2`
  color: #333;
  text-align: center;
`;

const RatingStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StarIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.userRated ? "#FFD700" : "#ccc")};
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    color: #ffd700;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 40px;
  padding: 8px; /* Improved padding for better appearance */
  box-sizing: border-box; /* Ensures padding is included in the width */
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px; /* Adjusted height for better appearance */
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px; /* Improved padding for better appearance */
  box-sizing: border-box; /* Ensures padding is included in the width */
`;

const SubmitButton = styled.button`
  background-color: #5b5b5b;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

const ContactForm = () => {
  const [userRating, setUserRating] = useState(0);

  const handleStarClick = (rating) => {
    setUserRating(rating);
  };

  return (
    <ContactFormContainer id="contact">
      <FormWrapper>
        <FormTitle>Contact Us & Give Feedback</FormTitle>
        <RatingStars>
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon
              key={index}
              icon={faStar}
              userRated={index <= userRating}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </RatingStars>
        <Form>
          <InputGroup>
            <Label>Name:</Label>
            <Input type="text" placeholder="Your Name" />
          </InputGroup>
          <InputGroup>
            <Label>Email:</Label>
            <Input type="email" placeholder="Your Email" />
          </InputGroup>
          <InputGroup>
            <Label>Message:</Label>
            <TextArea rows="4" placeholder="Your Message" />
          </InputGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </ContactFormContainer>
  );
};

export default ContactForm;
