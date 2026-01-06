import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";

// Import Styles
import "./assets/css/bootstrap.css";
import "./assets/fonts/font-awesome/css/font-awesome.css";
import "./assets/css/style.css";
import "./assets/css/nivo-lightbox/nivo-lightbox.css";
import "./assets/css/nivo-lightbox/default.css";
import "./App.css";

// Import Components
import { Navigation } from "./components/navigation";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import AboutUsDetail from "./pages/AboutUsDetail";
import ProductDetails from "./pages/ProductDetails";
import ComingSoon from "./pages/ComingSoon";
import Company from "./pages/Company";
import CertificatePage from "./pages/CertificatePage";
import Products from "./pages/Products";
import SourcingAgentPage from "./pages/SourcingAgentPage";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  useEffect(() => {
    // Re-init smooth scroll if needed on mount
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-detail" element={<AboutUsDetail />} />
        <Route path="/product-detail" element={<ProductDetails />} />
        <Route path="/testimonials" element={<ComingSoon />} />
        <Route path="/company" element={<Company />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sourcing-agent" element={<SourcingAgentPage />} />
        <Route path="*" element={<h1 className="text-center mt-5">404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
