import React from "react";
import Carousel from "./component/Carousel";
import AboutUs from "./component/About";
import Certificates from "./component/Certificates";
import FeedbackSection from "./component/Feedback";
import WhatWeDo from "./component/WhatWeDo";
import WhyChooseUs from "./component/WhychooseUs";

const RouteFile = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <WhatWeDo />
      <WhyChooseUs />
      <FeedbackSection />
      <Certificates />
    </div>
  );
};

export default RouteFile;
