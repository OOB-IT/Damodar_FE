import React from "react";

export const Image = ({ title, productPageUrl, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {" "}
        <a href={productPageUrl} title={title} data-lightbox-gallery='gallery1'>
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className='img-responsive' alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
