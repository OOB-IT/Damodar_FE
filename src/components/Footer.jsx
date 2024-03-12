import React from "react";

const Footer = (props) => {
  return (
    <div
      id='footer'
      style={
        props?.in
          ? { position: "fixed", bottom: 0, width: "100%" }
          : { bottom: 0, width: "100%" }
      }>
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
