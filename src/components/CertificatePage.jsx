import React, { useEffect, useState } from "react";
import "./CertificatePage.css";
import {
  dgft,
  gmp,
  apeda,
  fda,
  fieo,
  fssai,
  halal,
} from "../asset/certificate/index";
import axios from "axios";
import { baseUrl } from "../utils/config";
const images = [
  { src: apeda, alt: "apeda" },
  { src: dgft, alt: "dgft" },
  { src: gmp, alt: "gmp" },
  { src: fda, alt: "fda" },
  { src: fssai, alt: "fssai" },
  { src: fieo, alt: "fieo" },
  { src: halal, alt: "halal" },
];
const CertificatePage = () => {
  const [certificates, setCertificates] = useState();

  useEffect(() => {
    fetchCertificateData();
  }, []);

  const fetchCertificateData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getCertificatesImg`, {
        params: {
          limit: 6,
        },
      });
      if (response !== undefined) {
        setCertificates(response?.data);
      } else {
        setCertificates(images);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setCertificates(images);
    }
  };
  return (
    <div style={{ padding: "150px 0 0 0", textAlign: "center" }}>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Certification</h2>
          <p>We are certified from following standards.</p>
        </div>
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            {/*  */}
            <div className="row gy-4 justify-content-center">
              {certificates?.map((image, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 pb-2">
                  <div className="gallery-item h-100">
                    <img
                      src={image.src}
                      className="img-fluid"
                      alt={image.alt}
                    />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                      <a
                        href={image.src}
                        title={image.alt}
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-arrows-angle-expand"></i>
                      </a>
                      <a href="feravva nu 6" className="details-link">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CertificatePage;
