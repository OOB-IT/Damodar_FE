import "./App.css";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Carousel from "./component/Carousel";
import AboutUs from "./component/About";
import CertificatesSection from "./component/Certificate";
import ProductsSection from "./component/Product";
import FeedbackSection from "./component/Feedback";
import ContactForm from "./component/Contact";

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
      <CertificatesSection />
      <ProductsSection />
      <FeedbackSection />
      <ContactForm />
    </>
  );
}

export default App;
