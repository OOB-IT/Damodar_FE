import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";
import "./ProductCatalog.css";

export const ProductCatalog = (props) => {
  const localData = props.data;
  const [apiRes, setApiRes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/getProductCategories`)
      .then((response) => {
        if (response?.data) {
          setApiRes(response?.data);
        } else {
          setApiRes(localData);
        }
      })
      .catch((error) => {
        setApiRes(localData);
        console.error("Error fetching images:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="catalog-header">
          <h2 className="catalog-title">Product Catalog</h2>
          <p className="catalog-description">
            Explore our comprehensive range of high-quality products and
            discover the perfect solutions for your needs.
          </p>
        </div>

        <div className="catalog-scroll-container">
          <div className="catalog-grid">
            {loading
              ? [...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-card">
                  <div className="skeleton-element skeleton-image"></div>
                  <div className="skeleton-element skeleton-text skeleton-text-short"></div>
                  <div className="skeleton-element skeleton-text skeleton-text-long"></div>
                  <div className="skeleton-element skeleton-text"></div>
                </div>
              ))
              : apiRes?.map((d, i) => (
                <div key={`${d.productTypeTitle}-${i}`} className="product-card">
                  <div className="product-image-wrapper">
                    <img
                      src={d.productTypeCtgImg}
                      alt={d.productTypeTitle}
                      className="product-image"
                    />
                  </div>
                  <div className="product-body">
                    <h3 className="product-title">{d.productTypeTitle}</h3>
                    <p className="product-description">{d.productTypeCtgDesc}</p>
                    <a href={`#${d.productPageUrl}`} className="product-button">
                      <span>View Details</span>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
