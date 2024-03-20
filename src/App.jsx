import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import HomeRoutes from "./HomeRoutes";
import { AboutUsDetail } from "./components/AboutUsDetail";
import ProductDetails from "./components/ProductDetails";
import ComingSoon from "./components/ComingSoon";
import Company from "./components/Company";
import CertificatePage from "./components/CertificatePage";
import Products from "./components/Products";

// Initialize SmoothScroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          {/* Specify exact prop to prevent partial matching */}
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/about-detail" element={<AboutUsDetail />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/sourcing-agent" element={<ComingSoon />} />
          <Route path="/testimonials" element={<ComingSoon />} />
          <Route path="/company" element={<Company />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/products" element={<Products />} />
          {/* Add a wildcard route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// A component to render when route is not found
const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

export default App;
