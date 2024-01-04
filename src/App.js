import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import RouteFile from "./RouteFile";
import CompanyPage from "./component/Company";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<RouteFile />} />
          <Route path="/company" element={<CompanyPage />} />
          {/* Catch-all route for unauthorized routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
