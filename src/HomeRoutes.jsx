import React, { useEffect, useState } from "react";
import JsonData from "./data/data.json";

import { Header } from "./components/header";
import { About } from "./components/about";
import { ProductCatalog } from "./components/ProductCatalog";
import { Contact } from "./components/contact";
import MembershipCertification from "./components/Certificate";
import Footer from "./components/Footer";

const HomeRoutes = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <ProductCatalog data={landingPageData.ProductCatalog} />
      <MembershipCertification />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
};

export default HomeRoutes;
