import styled from "styled-components";

export const FormSection = styled.div`
  padding: 50px 0;
  background-color: none;
  text-align: center;
`;

export const FormContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
`;

export const FormTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 24px;
  text-align: center;
`;

export const FormField = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const StarRatingInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-direction: row-reverse;

  input[type="radio"] {
    display: none;
  }

  label {
    font-size: 30px; /* Smaller size for the stars */
    color: #ddd; /* Default color for the stars */
    cursor: pointer;
    transition: color 0.2s;
  }

  input[type="radio"]:checked ~ label {
    color: #f5b301; /* Color when selected */
  }

  input[type="radio"]:hover ~ label {
    color: #ddd; /* Reset color for the stars ahead of the hovered star */
  }

  input[type="radio"]:hover + label,
  input[type="radio"]:hover + label ~ label {
    color: #f5b301; /* Hover color */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  &:hover {
    color: #ff0000;
  }
`;
