import React, { useEffect, useState } from "react";
import JsonData from "../data/data.json";
import ComingSoon from "./ComingSoon";

const ProductDetails = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const data = landingPageData.ProductCatalog; //nam badlavo
  return (
    // <div style={{ padding: "150px 0 0 0", textAlign: "center" }}>

    //   <div className='container' data-aos='fade-up'>
    //     <div className='section-title'>
    //       <h2>Product Details</h2>
    //       <p>
    //         Explore our comprehensive range of high-quality products and
    //         discover the perfect solutions for your needs.
    //       </p>
    //     </div>
    //     <section id='products' class='portfolio'>
    //       <ul
    //         id='portfolio-flters'
    //         class='d-flex justify-content-center'
    //         data-aos='fade-up'
    //         data-aos-delay='100'>
    //         <li data-filter='*' class='filter-active'>
    //           All
    //         </li>
    //         <li data-filter='.filter-app'>App</li>
    //         <li data-filter='.filter-card'>Card</li>
    //         <li data-filter='.filter-web'>Web</li>
    //       </ul>

    //       <div
    //         class='row portfolio-container'
    //         data-aos='fade-up'
    //         data-aos-delay='200'>
    //         <div class='col-lg-4 col-md-6 portfolio-item filter-app'>
    //           <div class='portfolio-img'>
    //             <img
    //               src='assets/img/portfolio/portfolio-1.jpg'
    //               class='img-fluid'
    //               alt=''
    //             />
    //           </div>
    //           <div class='portfolio-info'>
    //             <h4>App 1</h4>
    //             <p>App</p>
    //             <a
    //               href='assets/img/portfolio/portfolio-1.jpg'
    //               data-gallery='portfolioGallery'
    //               class='portfolio-lightbox preview-link'
    //               title='App 1'>
    //               <i class='bx bx-plus'></i>
    //             </a>
    //             <a
    //               href='portfolio-details.html'
    //               class='details-link'
    //               title='More Details'>
    //               <i class='bx bx-link'></i>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <ComingSoon />
  );
};

export default ProductDetails;
