import "./App.css";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Carousel from "./component/Carousel";
import AboutUs from "./component/About";
import CertificatesSection from "./component/Certificate";
import ProductsSection from "./component/Product";
import FeedbackSection from "./component/Feedback";
import ContactForm from "./component/Contact";
import OfficeLocationMap from "./component/Map";
import Footer from "./component/Footer";
import WhatWeDo from "./component/WhatWeDo";
import WhyChooseUs from "./component/WhychooseUs";
import MembershipCertification from "./component/Certificate";

// Define the styled components
const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const ComingSoonText = styled.div`
  color: #333;
`;

function App() {
  return (
    <>
      <reactFragment id="home">
        {/* <ComingSoonContainer>
        <ComingSoonText>
          <h1>Welcome to Damodar Global Venture</h1>
          <h2>Coming Soon!</h2>
          <p>We are working on to bring you something amazing. Stay tuned!</p>
        </ComingSoonText>
      </ComingSoonContainer> */}
        <Navbar />
        <Carousel />
        <AboutUs />
        <WhatWeDo />
        <WhyChooseUs />
        <FeedbackSection />
        <MembershipCertification />
        {/* 
      <ProductsSection />
      <ContactForm />
      <OfficeLocationMap /> */}
        <Footer />
      </reactFragment>
    </>
  );
}

export default App;
