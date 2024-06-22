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

const PostReview = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    img: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormSection>
      <FormContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <FormTitle>Post a Review</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="text">Review</FormLabel>
            <FormTextarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="img">Image URL</FormLabel>
            <FormInput
              type="text"
              id="img"
              name="img"
              value={formData.img}
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
                    name="rating"
                    value={star}
                    checked={formData.rating === star}
                    onChange={() => handleRatingChange(star)}
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
  );
};

export default PostReview;
