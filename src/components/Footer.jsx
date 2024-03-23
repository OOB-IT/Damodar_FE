import React from "react";

const Footer = (props) => {
  return (
    <div
      id='footer'
      style={
        props?.in
          ? { position: "fixed", bottom: 0, width: "100%", marginTop: "20px" }
          : { bottom: 0, width: "100%", zIndex: "9", marginTop: "20px" }
      } className="mt-3">
      <div className='container text-center '>
        <p>
          &copy; {new Date().getFullYear()} Damodarr Global Venture LLP. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
