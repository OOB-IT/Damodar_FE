import React, { useState } from "react";
import {
  FormSection,
  FormContainer,
  FormTitle,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  CloseButton,
  StarRatingInput,
} from "./StyledComponents";
import axios from 'axios';

const PostReview = ({ onClose, handleShow }) => {
  const saveUrl = 'https://api.damodarr.com/api/postFeedback'
  const [formData, setFormData] = useState({
    userName: "",
    reviewDesc: "",
    starCount: 0,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (starCount) => {
    setFormData({ ...formData, starCount });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(saveUrl, formData);
      if (response) {
        onClose();
        handleShow();
      }
    } catch (error) {
      console.error('Error posting feedback:', error);
    }
  };

  return (
    <>
      <FormSection>
        <FormContainer>
          <CloseButton onClick={onClose}>×</CloseButton>
          <FormTitle>Post a Review</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="userName">Name</FormLabel>
              <FormInput
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <FormLabel htmlFor="reviewDesc">Review</FormLabel>
              <FormTextarea
                id="reviewDesc"
                name="reviewDesc"
                value={formData.reviewDesc}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <FormLabel>Rating</FormLabel>
              <StarRatingInput>
                {[5, 4, 3, 2, 1].map((star) => (
                  <React.Fragment key={star}>
                    <input
                      type="radio"
                      id={`star${star}`}
                      name="starCount"
                      value={star}
                      checked={formData.starCount === star}
                      onChange={() => handleRatingChange(star)}
                      required
                    />
                    <label htmlFor={`star${star}`}>★</label>
                  </React.Fragment>
                ))}
              </StarRatingInput>
            </FormField>
            <FormButton type="submit">Submit</FormButton>
          </form>
        </FormContainer>
      </FormSection>
    </>
  );
};

export default PostReview;
