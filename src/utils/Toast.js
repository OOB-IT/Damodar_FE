import React from 'react';
import styled from 'styled-components';

const ToastContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  z-index: 1050;
`;

const ToastHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: #5ca9fb;
  color: white;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const ToastBody = styled.div`
  padding: 0.75rem;
  background-color: white;
  color: black;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

const ToastImage = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 0.5rem;
`;

const ToastCloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
`;

const Toast = ({ show, onClose, headerText, bodyText, timeAgo, imageSrc }) => {
    if (!show) return null;

    return (
        <ToastContainer className="toast show">
            <ToastHeader>
                {imageSrc && <ToastImage src={imageSrc} alt="Toast Icon" />}
                <strong className="mr-auto">{headerText}</strong>
                <small>{timeAgo}</small>
                <ToastCloseButton onClick={onClose} aria-label="Close">
                    &times;
                </ToastCloseButton>
            </ToastHeader>
            <ToastBody>
                {bodyText}
            </ToastBody>
        </ToastContainer>
    );
};

export default Toast;
