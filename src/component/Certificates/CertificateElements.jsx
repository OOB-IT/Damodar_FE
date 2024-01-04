import styled from "styled-components";

export const CertificateTitle = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #f8f8f8; /* Light background color */
`;

export const CertificateContainer = styled.div`
height:25rem;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #;

@media screen and (max-width:786px){
    height:550px;
}
@media screen and (max-width:480px){
    height:650px;
}
`;

export const CertificateWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const CertificateCard = styled.div`
background:#f8f8f8;
display:flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
border-radius:20px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: transform 0.3s ease-in-out;

&:hover{
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
`;

export const CertificateImg = styled.img`
height:180px;
width:180px;
margin-bottom:10px;
border-radius: 1rem;
`;

