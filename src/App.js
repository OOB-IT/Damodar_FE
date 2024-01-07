import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import RouteFile from "./RouteFile";
import CompanyPage from "./component/Company";
import KeyPerson from "./component/KeyPerson";
import ContactForm from "./component/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<RouteFile />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/keyperson" element={<KeyPerson />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
