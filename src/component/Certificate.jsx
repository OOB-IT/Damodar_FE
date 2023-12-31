import React from "react";
import styled from "styled-components";

const MembershipCertificationContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #f8f8f8; /* Light background color */
`;

const MembershipCertification = () => {
  return (
    <MembershipCertificationContainer id="membership-certification">
      <h2>Membership & Certification</h2>
    </MembershipCertificationContainer>
  );
};

export default MembershipCertification;
